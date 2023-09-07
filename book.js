
const idInput = document.getElementById('id');
const packageidInput = document.getElementById('package-id');
const pmethodInput = document.getElementById('p-method');
// const paymentidInput = document.getElementById('payment-id');


async function bookfunc(){
    
    const id = idInput.value;
    const packageid = packageidInput.value;
    const pmethod = pmethodInput.value;
    // const paymentid = paymentidInput.value;
    console.log(id);
    console.log(packageid);
    console.log(pmethod);
    // console.log(paymentid);

    const response =await fetch(`/book/${id}/${packageid}/${pmethod}`);



    console.log('hey');
    
}



   