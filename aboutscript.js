const p1= document.getElementById('p1');
const p2= document.getElementById('p2');
const p3= document.getElementById('p3');
const p4= document.getElementById('p4');
const p5= document.getElementById('p5');
const p6= document.getElementById('p6');
const p7= document.getElementById('p7');


const h1= document.getElementById('h1');
const h2= document.getElementById('h2');
const h3= document.getElementById('h3');
const h4= document.getElementById('h4');
const h5= document.getElementById('h5');
const h6= document.getElementById('h6');
const h7= document.getElementById('h7');


async function aboutfunc(){
    console.log('hey you are in aboutscript.js');
    const response=await fetch(`/reviewdata`);
    const data= await response.json();

    console.log(data);
    p1.textContent=`${data[0][3]}`;
    p2.textContent=`${data[1][3]}`;
    p3.textContent=`${data[2][3]}`;
    p4.textContent=`${data[3][3]}`;
    p5.textContent=`${data[4][3]}`;
    p6.textContent=`${data[5][3]}`;
    p7.textContent=`${data[6][3]}`;


    h1.textContent=`${data[0][1]}`;
    h2.textContent=`${data[1][1]}`;
    h3.textContent=`${data[2][1]}`;
    h4.textContent=`${data[3][1]}`;
    h5.textContent=`${data[4][1]}`;
    h6.textContent=`${data[5][1]}`;
    h7.textContent=`${data[6][1]}`;
}