let insertPoint = document.getElementById('stack');
let num = document.getElementById('num');


function push( ) {
    let box = document.createElement('div');
    box.setAttribute('class', 'box');
    box.innerText = num.value;
    insertPoint.appendChild(box);

}

// function pop( ) {
//         insertPoint.removeChild();
// }