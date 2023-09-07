const idInput = document.getElementById('id-input');
const paidInput = document.getElementById('paid-input');
const dueInput = document.getElementById('due-input');
const statusInput = document.getElementById('status-input');

const text = document.getElementById('payment');


async function signinfunc(){

    const id = idInput.value;
    const paid = paidInput.value;
    const due = dueInput.value;
    const status = statusInput.value;
    console.log(paid);
    console.log(due);
    console.log(status);
    console.log(id);


    const response =await fetch(`/payment/${id}/${paid}/${due}/${status}`);
    // const data= await response.json();
    
        


text.textContent="Done!";
}