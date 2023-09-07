

const pname=document.getElementById('pname');
const pid=document.getElementById('pid');
const ratting =document.getElementById('ratting');
const location1 =document.getElementById('location1');
const season =document.getElementById('season');
const cap=document.getElementById('cap');
const cost =document.getElementById('cost');
const day =document.getElementById('day');
const night =document.getElementById('night');
const spotdes=document.getElementById('spotdes');


async function f1(){
    const p_id=localStorage.getItem('package_id');
    console.log('hey you are in packagedescription.js.js');
    const response=await fetch(`/packagepage/${p_id}`);
    const data= await response.json();
    console.log(data);

    pname.textContent= `${data[0][0]}`;
    pid.textContent= `${data[0][1]}`;
    ratting.textContent= `${data[0][2]}`;
    location1.textContent= `${data[0][3]}`;
    season.textContent= `${data[0][4]}`;
    cap.textContent= `${data[0][5]}`;
    cost.textContent= `${data[0][6]}`;
    day.textContent= `${data[0][7]}`;
    night.textContent= `${data[0][8]}`;
    spotdes.textContent= `${data[0][10]}`;


}