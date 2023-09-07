const oracledb = require('oracledb');
const express = require('express');
const path = require('path');
//const { notStrictEqual } = require('assert');
const app = express();

const port = 3003;

const staticPath = path.join(__dirname, '../public');
console.log(staticPath);
app.use(express.static(staticPath));


async function run(query) {
  try {
    const connection = await oracledb.getConnection({
      user: 'TRAVELERS',
      password: '12345',
      connectionString: '127.0.0.1/orclpdb',
    });


    console.log(query);
    const result = await connection.execute(query);
    await connection.commit();
    await connection.close();

    return result.rows; // Return the rows from the query result
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error for handling in your Express routes
  }
}

// Define a new route to handle /result
app.get('/user/:username/:id', async (req, res) => {
  const username = req.params.username;
  const id=req.params.id;
  const data = await run(
    `select * from CUSTOMERS where USER_NAME='${username}' AND PASSWORD='${id}'`
  );
  res.json(data);
  
});

//admin login
app.get('/admin/:username/:id', async (req, res) => {
  const username = req.params.username;
  const id=req.params.id;
  const data = await run(
    `select * from ADMIN where USER_NAME='${username}' AND PASSWORD='${id}'`
  );
  res.json(data);
  
});


// booking 
app.get('/book/:cid/:pid/:pmethod', async (req, res) => {
  const cid = req.params.cid;
  const pid=req.params.pid;
  const pmethod=req.params.pmethod;
  

  const data2= await run(
    `UPDATE TOUR_PACKAGES
    SET CURRENT_CAPACITY = CURRENT_CAPACITY - 1
    WHERE PACKAGE_ID = ${pid}`
  );

  const data1 = await run(
    `INSERT INTO PAYMENT (PAYMENT_ID, PAYMENT_MEDIA, AMOUNT, PAID_UNPAID_STATUS, DUE)
    VALUES ((SELECT PAYMENT_ID FROM PAYMENT ORDER BY PAYMENT_ID DESC FETCH FIRST 1 ROWS ONLY)+1,
    '${pmethod}', 0.00, 'UNPAID', (SELECT COST
    FROM TOUR_PACKAGES
    WHERE PACKAGE_ID =${pid} ))`
  );


  const data = await run(
    `INSERT INTO RESERVATION (RESERVATION_ID, RESERVATION_DATE, STATUS, CUSTOMER_ID, PAYMENT_ID, PACKAGE_ID)
    VALUES ((SELECT RESERVATION_ID FROM RESERVATION ORDER BY RESERVATION_ID DESC FETCH FIRST 1 ROWS ONLY)+1,
    SYSDATE, 'CONFIRMED', ${cid},
    (SELECT PAYMENT_ID FROM PAYMENT ORDER BY PAYMENT_ID DESC FETCH FIRST 1 ROWS ONLY), ${pid})`
  );

  res.json(data1);
  
});


//inserting customers
app.get('/user/:name/:phone/:email/:address/:username/:password/:gender/:isnew', async (req, res) => {
  const name = req.params.name;
  const phone = req.params.phone;
  const email = req.params.email;
  const address = req.params.address;
  const username = req.params.username;
  const password = req.params.password;
  const gender = req.params.gender;
  const isnew = req.params.isnew;
  console.log(`${address}`);
  const data = await run(
    `INSERT INTO CUSTOMERS VALUES ('${name}', (SELECT CUSTOMER_ID FROM CUSTOMERS ORDER BY CUSTOMER_ID DESC FETCH FIRST 1 ROWS ONLY
      )+1, '${phone}', '${email}', '${address}', '${username}', '${password}', '${gender}', '${isnew}')`
    

  );
  res.json(data);
});


//updating customers
app.get('/updatecustomer/:id/:name/:phone/:email/:address/:username/:password/:gender/:isnew', async (req, res) => {
  const id=req.params.id;
  const name = req.params.name;
  const phone = req.params.phone;
  const email = req.params.email;
  const address = req.params.address;
  const username = req.params.username;
  const password = req.params.password;
  const gender = req.params.gender;
  const isnew = req.params.isnew;
  console.log(`${address}`);
  const data = await run(
    `BEGIN UPDATE_CUSTOMER(${id}, '${name}','${phone}','${email}','${address}','${username}','${password}','${gender}','${isnew}'); END;`
  );
  res.json(data);
});



//inserting new package
app.get('/addpkj/:day/:night/:cost/:capacity/:spot', async (req, res) => {
  const day = req.params.day;
  const night = req.params.night;
  const cost = req.params.cost;
  const capacity = req.params.capacity;
  const spot = req.params.spot;
  console.log(capacity);
   // `INSERT INTO TOUR_PACKAGES VALUES ('${name}', (SELECT CUSTOMER_ID FROM CUSTOMERS ORDER BY CUSTOMER_ID DESC FETCH FIRST 1 ROWS ONLY
    //   )+1, '${phone}', '${email}', '${address}', '${username}', '${password}', '${gender}', '${isnew}')`
    
  const data = await run(
   
`BEGIN INSERT_TOUR_PACKAGE(GET_NEXT_PACKAGE_ID, ${day}, ${night}, ${cost}, 1, ${capacity}, ${spot}); END;`
  );
  res.json(data);
});



//updating payment 
app.get('/payment/:id/:amount/:due/:status', async (req, res) => {
  const id = req.params.id;
  const amount = req.params.amount;
  const due = req.params.due;
  const status = req.params.status;
   
  const data = await run(  
`UPDATE PAYMENT
SET AMOUNT = ${amount},      
    DUE =${due},          
    PAID_UNPAID_STATUS = '${status}' 
WHERE PAYMENT_ID = (SELECT PAYMENT_ID
    FROM RESERVATION
    WHERE RESERVATION_ID = (SELECT MAX(RESERVATION_ID)
    FROM RESERVATION
    WHERE CUSTOMER_ID = ${id}))`
  );
  res.json(data);
console.log(due);
});

//removing packages
app.get('/removepkj/:id', async (req, res) => {
  
  const id = req.params.id;
  console.log(id);
   
  const data = await run(

    `BEGIN DELETE_PACKAGE_WITH_DEPENDENTS(${id}); END;`
  );
  res.json(data);

});


//removing customer
app.get('/removecustomer/:id', async (req, res) => {
  
  const id = req.params.id;
  console.log(id);
   
  const data = await run(
      `BEGIN DELETE_CUSTOMER_WITH_RELATIONS(${id}); END;`
  );
  res.json(data);

});




app.get('/review/:name/:id/:review', async (req, res) => {
  const name = req.params.name;
  const id = req.params.id;
  
  const review = req.params.review;
  const data = await run(
    `INSERT INTO REVIEW VALUES ( ${id}, '${name}', 
    (SELECT REVIEW_ID FROM REVIEW ORDER BY REVIEW_ID DESC FETCH FIRST 1 ROWS ONLY)+1, 
    '${review}')`
    );
  res.json(data);
});


app.get('/reviewdata', async (req, res) => {
  //const username = req.params.username;
  const data = await run(
    `SELECT * FROM(SELECT * FROM REVIEW ORDER BY REVIEW_ID DESC) WHERE ROWNUM <= 7 ORDER BY REVIEW_ID ASC`
  );
  res.json(data);
});


app.get('/homepage', async (req, res) => {
  //const username = req.params.username;
  const data = await run(
    `SELECT  TI.SPOT_NAME, TP.PACKAGE_ID,  TI.SPOT_INFO, TI.IMAGE_LINK
    FROM TOUR_SPOT TS
    JOIN TOUR_PACKAGES TP ON (TS.SPOT_ID = TP.SPOT_ID)
    JOIN TOUR_INFORMATION TI ON (TS.SPOT_ID = TI.SPOT_ID)
    ORDER BY TP.RATING DESC
    FETCH FIRST 3 ROWS ONLY`
  );
  res.json(data);
});





app.get('/packagepage', async (req, res) => {
  //const username = req.params.username;
  const data = await run(
    `SELECT  TI.SPOT_NAME, TP.PACKAGE_ID,  TI.SPOT_INFO, TI.IMAGE_LINK
    FROM TOUR_SPOT TS
    JOIN TOUR_PACKAGES TP ON (TS.SPOT_ID = TP.SPOT_ID)
    JOIN TOUR_INFORMATION TI ON (TS.SPOT_ID = TI.SPOT_ID)
    ORDER BY TP.RATING DESC`
  );
  res.json(data);
});


app.get('/packagepage/:pakage_id', async (req, res) => {
  const pid = req.params.pakage_id;
  console.log(pid);
  const data = await run(
    `SELECT  TS.NAME,TP.PACKAGE_ID, TP.RATING, TS.LOCATION, TS.SEASON,TP.CURRENT_CAPACITY,TP.COST, TP.DAY, TP.NIGHT, TI.SPOT_NAME, TI.SPOT_INFO
    FROM TOUR_SPOT TS
    JOIN TOUR_PACKAGES TP ON (TS.SPOT_ID = TP.SPOT_ID)
    JOIN TOUR_INFORMATION TI ON (TS.SPOT_ID = TI.SPOT_ID)
    WHERE TP.PACKAGE_ID=${pid}`
  );
  res.json(data);
});



//getting all customers
app.get('/all_customers', async (req, res) => {
  //const username = req.params.username;
  const data = await run(
    `SELECT * FROM Customers`
  );
  res.json(data);
});


//getting all packages
app.get('/all_package', async (req, res) => {
  const data = await run(
    `SELECT * FROM TOUR_PACKAGES`
  );
  res.json(data);
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
