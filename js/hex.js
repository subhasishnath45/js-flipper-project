const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
//
const color = document.querySelector('.color');
 
btn.addEventListener('click', function(){
    // initially hexColor will store #
    // As all of the hex color starts with an #
    let hexColor = '#';
    for(let i = 0; i<6; i++){
        // hexColor += hex[0];
        // Randomly accessing an element from hex array
        hexColor += hex[getRandomNumber()];
    }
 
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
 
function getRandomNumber(){
    // Math.random() will generate a random number between 0 and 1.
    // hex.length will return no of elements in the hex array starting from 0.
    // Math.floor() will round down the decimal number.
    return Math.floor(Math.random() * hex.length);
}
