// const all = document.getElementById('all_package');

// async function showpackages(){
//     console.log('choltese');

//     const response =await fetch(`/all_package`);
//     const data= await response.json();
//     // for(i=0; i<data.length;i++){
//     //     all.textContent=all.textContent+ data[i];
//     // }
//     all.textContent=data;
// }

const tableBody = document.getElementById('all_package');
async function showpackages(){
    const response =await fetch(`/all_package`);
    const data= await response.json();
    console.log(data);
    tableBody.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const row = document.createElement('tr');
        // Assuming the order of data elements matches your table structure
        row.innerHTML = `
            <td>${data[i][0]}</td>
            <td>${data[i][1]}</td>
            <td>${data[i][2]}</td>
            <td>${data[i][3]}</td>
            <td>${data[i][4]}</td>
            <td>${data[i][5]}</td>
            <td>${data[i][6]}</td>
          
           

        `;
        tableBody.appendChild(row);
    }
        //
}