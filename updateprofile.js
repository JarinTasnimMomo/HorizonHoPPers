const nameInput = document.getElementById('name-input');

const phoneInput = document.getElementById('phone-input');
const emailInput = document.getElementById('email-input');
const addressInput = document.getElementById('address-input');
const usernameInput = document.getElementById('uname-input');
const passwordInput = document.getElementById('password-input');
const genderInput = document.getElementById('gender-input');
const isnewInput = document.getElementById('isnew-input');


const text = document.getElementById('welcome');

async function processInput() { 

    const name = nameInput.value;

    const phone = phoneInput.value;
    const email = emailInput.value;
    const address = addressInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const gender = genderInput.value;
    const isnew = isnewInput.value; 
    const id=localStorage.getItem('customer_id');
    
    const response =await fetch(`/updatecustomer/${id}/${name}/${phone}/${email}/${address}/${username}/${password}/${gender}/${isnew}`);
    text.textContent='done!';

    
    console.log(name);
    console.log(id);

    
    console.log(phone);
    console.log(email);
    console.log(address);
    console.log(username);

    console.log(password);
    console.log(gender);
    console.log(isnew);
    localStorage.setItem('customer_name', name);
}



