const dayinput = document.getElementById('day-input');

const nightinput = document.getElementById('night-input');
const costinput = document.getElementById('cost-input');
const capacityinput = document.getElementById('capacity-input');
const spotinput = document.getElementById('spot-input');
const idinput = document.getElementById('id-input');


const text = document.getElementById('welcome');

async function processInput() { 
    const day = dayinput.value;
    const night = nightinput.value;
    const cost = costinput.value;
    const capacity = capacityinput.value;
    const spot = spotinput.value;

    
    console.log(capacity);
    const response =await fetch(`/addpkj/${day}/${night}/${cost}/${capacity}/${spot}`);
    text.textContent='done!';

    
}


async function processInput2() { 
    
    const id = idinput.value;
    console.log(id);
    const response =await fetch(`/removepkj/${id}`);
    text.textContent='done!';

}
