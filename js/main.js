// setting up the constants
const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

// setting up my even listeners

btn.addEventListener('click', function(){
    // console.log(document.body);
    // get random number between 0 and 3.
    // const randomNumber = 2;
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    // fetching the color from colors array
    // Setting it up as the background color of our document.
    document.body.style.backgroundColor = colors[randomNumber];
    // changing the text of div with class of color.
    color.textContent = colors[randomNumber];

});
// following function will generate random numbers.
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}


