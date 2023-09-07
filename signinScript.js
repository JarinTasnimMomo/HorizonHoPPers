const usernameInput = document.getElementById('username-input');
const idInput = document.getElementById('id-input');
const text = document.getElementById('signedin');


async function signinfunc(){
    const username = usernameInput.value;
     const id = idInput.value;
     console.log(username);
     console.log(id);


     const response =await fetch(`/user/${username}/${id}`);
     const data= await response.json();
    
        

    if (data.length>0) {
        text.textContent='logged in successfully';
        console.log(data[0][0]);
        localStorage.setItem('customer_name', data[0][0]);
        localStorage.setItem('customer_id', data[0][1]);
        localStorage.setItem('customer_phone_no', data[0][2]);
        localStorage.setItem('customer_email', data[0][3]);
        localStorage.setItem('customer_address', data[0][4]);
        localStorage.setItem('customer_username', data[0][5]);
        localStorage.setItem('customer_password', data[0][6]);
        localStorage.setItem('customer_gender', data[0][7]);
        localStorage.setItem('customer_isnew', data[0][8]);


        location.href='/customer_profile.html';
        
        
    } else {
        text.textContent='Wrong entry!';
    }
     console.log(data);

}