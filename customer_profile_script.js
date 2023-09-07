const cname = document.getElementById('customer_name');
const id = document.getElementById('id');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const address = document.getElementById('address');
const username = document.getElementById('username');
const password = document.getElementById('password');
const gender = document.getElementById('gender');
const isnew = document.getElementById('isnew');


function customer_profile_func(){
console.log(localStorage.getItem('customer_name'));
console.log(localStorage.getItem('customer_id'));
console.log(localStorage.getItem('customer_phone_no'));
console.log(localStorage.getItem('customer_email'));
console.log(localStorage.getItem('customer_address'));
console.log(localStorage.getItem('customer_username'));
console.log(localStorage.getItem('customer_password'));
console.log(localStorage.getItem('customer_gender'));
console.log(localStorage.getItem('customer_isnew'));


cname.textContent=localStorage.getItem('customer_name');
id.textContent='Customer ID:'+localStorage.getItem('customer_id');
phone.textContent='Phone:'+localStorage.getItem('customer_phone_no');
email.textContent='Mail:'+localStorage.getItem('customer_email');
address.textContent='Address:'+localStorage.getItem('customer_address');
username.textContent='Username:'+localStorage.getItem('customer_username');
password.textContent='Password:'+localStorage.getItem('customer_password');
gender.textContent='Gender:'+localStorage.getItem('customer_gender');
isnew.textContent='You have travelled with us before:'+localStorage.getItem('customer_isnew');
}