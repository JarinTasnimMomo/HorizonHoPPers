const p1= document.getElementById('p1');
const p2= document.getElementById('p2');
const p3= document.getElementById('p3');



const h1= document.getElementById('h1');
const h2= document.getElementById('h2');
const h3= document.getElementById('h3');

const i1=document.getElementById('i1');
const i2=document.getElementById('i2');
const i3=document.getElementById('i3');

const id1=document.getElementById('id1');
const id2=document.getElementById('id2');
const id3=document.getElementById('id3');

async function packagefunc(){
    console.log('hey you are in aboutscript.js');
    const response=await fetch(`/homepage`);
    const data= await response.json();

    console.log(data);
    p1.textContent=`${data[0][2]}`;
     p2.textContent=`${data[1][2]}`;
   p3.textContent=`${data[2][2]}`;
    

console.log(data[0][0]);
    h1.textContent=`${data[0][0]}`;
    h2.textContent=`${data[1][0]}`;
    h3.textContent=`${data[2][0]}`;


   i1.src=`${data[0][3]}`;
   console.log('i1');
    i2.textContent=`${data[1][3]}`;
    i3.textContent=`${data[2][3]}`;

    id2.textContent=`${data[1][1]}`;
    id1.textContent=`${data[0][1]}`;
    id3.textContent=`${data[2][1]}`;
}