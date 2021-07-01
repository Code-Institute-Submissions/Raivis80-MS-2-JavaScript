
    let width;
    let height;

    let numWidth;
    let numHeight;

    let positionx; 
    let positiony;

    
// get div elements 
let newDiv = document.getElementsByTagName('div');

//---------------------BOX Selector---------------------
let div1 = newDiv[0];
let div2 = newDiv[1];
let div3 = newDiv[2];

//---------------------LEVEL Selector---------------------
// getting width and height numbers based on the screen size.
function getPosition() {
    width = window.innerWidth;
    height = window.innerHeight;
}

// Passing width and height numbers into a random number generator to
// get random x and y coardinates for the game objects.
function positionYX() {
    numWidth = Math.floor(Math.random() * (width - 50));
    numHeight = Math.floor(Math.random() * (height - 50)); 
    
    positionx =  numWidth + 'px';
    positiony = numHeight + 'px';
}

// Get random number and position in one function.
function getRandom() {
    getPosition();    
    positionYX();
}
// create random Object-----------------------------------
function randomObject1() {
    div1.addEventListener('click', randomObject1);
    getRandom()  
    div1.style.left = positionx;
    div1.style.top = positiony;
}