const p1= document.getElementById('p1');
const p2= document.getElementById('p2');
const p3= document.getElementById('p3');
const p4= document.getElementById('p4');const p5= document.getElementById('p5');
const p6= document.getElementById('p6');
const p7= document.getElementById('p7');
const p8= document.getElementById('p8');
const p9= document.getElementById('p9');
const p10=document.getElementById('p10');


const h1= document.getElementById('h1');
const h2= document.getElementById('h2');
const h3= document.getElementById('h3');
const h4= document.getElementById('h4');
const h5= document.getElementById('h5');
const h6= document.getElementById('h6');
const h7= document.getElementById('h7');
const h8= document.getElementById('h8');
const h9= document.getElementById('h9');
const h10=document.getElementById('h10');

const i1=document.getElementById('i1');
const i2=document.getElementById('i2');
const i3=document.getElementById('i3');
const i4= document.getElementById('i4');
const i5= document.getElementById('i5');
const i6= document.getElementById('i6');
const i7= document.getElementById('i7');
const i8= document.getElementById('i8');
const i9= document.getElementById('i9');
const i10= document.getElementById('i10');

const id1=document.getElementById('id1');
const id2=document.getElementById('id2');
const id3=document.getElementById('id3');
const id4=document.getElementById('id4');
const id5=document.getElementById('id5');
const id6=document.getElementById('id6');
const id7=document.getElementById('id7');
const id8=document.getElementById('id8');
const id9=document.getElementById('id9');
const id10=document.getElementById('id10');



async function package2func(){
    console.log('hey you are in package.js.js');
    const response=await fetch(`/packagepage`);
    const data= await response.json();

    console.log(data);
    p1.textContent=`${data[0][2]}`;
     p2.textContent=`${data[1][2]}`;
   p3.textContent=`${data[2][2]}`;
   p4.textContent=`${data[3][2]}`;
   p5.textContent=`${data[4][2]}`;
   p6.textContent=`${data[5][2]}`;
   p7.textContent=`${data[6][2]}`;
   p8.textContent=`${data[7][2]}`;
   p9.textContent=`${data[8][2]}`;
   p10.textContent=`${data[9][2]}`;
    

console.log(data[0][0]);


    h1.textContent=`${data[0][0]}`;
    h2.textContent=`${data[1][0]}`;
    h3.textContent=`${data[2][0]}`;
    h4.textContent=`${data[3][0]}`;
    h5.textContent=`${data[4][0]}`;
    h6.textContent=`${data[5][0]}`;
    h7.textContent=`${data[6][0]}`;
    h8.textContent=`${data[7][0]}`;
    h9.textContent=`${data[8][0]}`;
    h10.textContent=`${data[9][0]}`;
    



    i1.src=`${data[0][3]}`;
    i2.src=`${data[1][3]}`;
    i3.src=`${data[2][3]}`;
    i4.src=`${data[3][3]}`;
    i5.src=`${data[4][3]}`;
    i6.src=`${data[5][3]}`;
    i7.src=`${data[6][3]}`;
    i8.src=`${data[7][3]}`;
    i9.src=`${data[8][3]}`;
    i10.src=`${data[9][3]}`;
    

    id2.textContent=`${data[1][1]}`;
    localStorage.setItem('package_id2',data[1][1] );

    id1.textContent=`${data[0][1]}`;
    localStorage.setItem('package_id1',data[0][1] );


    id3.textContent=`${data[2][1]}`;
    localStorage.setItem('package_id3',data[2][1] );

    id4.textContent=`${data[3][1]}`;
    localStorage.setItem('package_id4',data[3][1] );

    id10.textContent=`${data[9][1]}`;
    localStorage.setItem('package_id10',data[9][1] );

    id5.textContent=`${data[4][1]}`;
    localStorage.setItem('package_id5',data[4][1] );

    id6.textContent=`${data[5][1]}`;
    localStorage.setItem('package_id6',data[5][1] );

    id7.textContent=`${data[6][1]}`;
    localStorage.setItem('package_id7',data[6][1] );

    id8.textContent=`${data[7][1]}`;
    localStorage.setItem('package_id8',data[7][1] );

    id9.textContent=`${data[8][1]}`;
    localStorage.setItem('package_id9',data[8][1] );


}

function view1(){
    localStorage.setItem('package_id',localStorage.getItem('package_id1') );
}
function view2(){
    localStorage.setItem('package_id',localStorage.getItem('package_id2') );
}
function view3(){
    localStorage.setItem('package_id',localStorage.getItem('package_id3') );
}
function view4(){
    localStorage.setItem('package_id',localStorage.getItem('package_id4') );
}
function view5(){
    localStorage.setItem('package_id',localStorage.getItem('package_id5') );
}
function view6(){
    localStorage.setItem('package_id',localStorage.getItem('package_id6') );
}
function view7(){
    localStorage.setItem('package_id',localStorage.getItem('package_id7') );
}
function view8(){
    localStorage.setItem('package_id',localStorage.getItem('package_id8') );
}
function view9(){
    localStorage.setItem('package_id',localStorage.getItem('package_id9') );
}
function view10(){
    localStorage.setItem('package_id',localStorage.getItem('package_id10') );
}