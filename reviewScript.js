const nameInput = document.getElementById('name-input');
const idInput = document.getElementById('id-input');
const reviewInput = document.getElementById('review-input');


async function reviewfunc(){
    const name = nameInput.value;
    const id = idInput.value;
    const review = reviewInput.value;
    console.log(name);
    console.log(id);
    console.log(review);

    const response =await fetch(`/review/${name}/${id}/${review}`);



    console.log('hey');
    
}



   