//const all = document.getElementById('all_customers');
const tableBody = document.getElementById('customer-table-body');
async function showCustomers(){
    const response =await fetch(`/all_customers`);
    const data= await response.json();
    console.log(data);
    tableBody.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const row = document.createElement('tr');
        // Assuming the order of data elements matches your table structure
        row.innerHTML = `
            <td>${data[i][0]}</td>
            <td>${data[i][1]}</td>
            <td>${data[i][2]}</td>
            <td>${data[i][3]}</td>
            <td>${data[i][4]}</td>
            <td>${data[i][5]}</td>
            <td>${data[i][6]}</td>
            <td>${data[i][7]}</td>
            <td>${data[i][8]}</td>

        `;
        tableBody.appendChild(row);
    }

    // data.forEach((customer) => {
    //     const row = document.createElement('tr');
    //     row.innerHTML = `
    //       <td>${customer.CUSTOMER_NAME}</td>
    //       <td>${customer.CUSTOMER_ID}</td>
    //       <td>${customer.PHONE_NO}</td>
    //       <td>${customer.EMAIL}</td>
          
    //       <td>${customer.ADDRESS}</td>
    //       <td>${customer.USER_NAME}</td>
    //       <td>${customer.PASSWORD}</td>
    //       <td>${customer.GENDER}</td>
    //       <td>${customer.IS_NEW}</td>
    //     `;
    //     tableBody.appendChild(row);
    //   });
    // for(i=0; i<data.length;i++){
    //     all.textContent=all.textContent+ data[i];
    // }
    //console.log(data);

}
//window.onload = showCustomers;