
const idinput = document.getElementById('id-input');


const text = document.getElementById('welcome');




async function processInput() { 
    
    const id = idinput.value;
    console.log(id);
    const response =await fetch(`/removecustomer/${id}`);
    text.textContent='done!';

}
