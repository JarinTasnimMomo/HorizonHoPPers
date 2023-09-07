const cname = document.getElementById('customer_name');

function welcomeFunc(){
console.log(localStorage.getItem('customer_name'));
console.log('hello customer');
cname.textContent=localStorage.getItem('customer_name');

}