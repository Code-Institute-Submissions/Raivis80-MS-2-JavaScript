

    
const gameWindow = document.getElementById('gameWindow');
const counterDiv = document.getElementById('score_counter');
const levelDiv = document.getElementById('select_level');

let width;
let height;

let numWidth;
let numHeight;

let positionx; 
let positiony;

//Game Window-And target-variables
const target1 = gameWindow.children[0];
const target2 = gameWindow.children[1];
const target3 = gameWindow.children[2];

// -------------------RANDOM NUMBER GENERATOR------------------
// getting width and height numbers based on the screen size.

// Passing width and height numbers into a random number generator to
// get random x and y coardinates for the game objects.
function positionYX() {
    width = gameWindow.offsetWidth;
    height = gameWindow.offsetHeight;

    numWidth = Math.floor(Math.random() * (width - 50));
    numHeight = Math.floor(Math.random() * (height - 50)); 
    
    positionx =  numWidth + 'px';
    positiony = numHeight + 'px';
    console.log(positionx, positiony)
};

positionYX()

// Get random number and position in one function.

// create random Object for individual targets------------
function randomObject1() {
    positionYX()
    target1.style.left = positionx;
    target1.style.top = positiony;
    
}

function randomObject2() {
    positionYX() 
    target2.style.left = positionx;
    target2.style.top = positiony;
}

function randomObject3() {
    positionYX()
    target3.style.left = positionx;
    target3.style.top = positiony;
}

// Game levels
function gameOne() {
    randomObject1();
}

function gameTwo() {
    randomObject1();
    randomObject2();
}

function gameThree() {
    randomObject1();
    randomObject2();
    randomObject3();
}

// Timmer variables 
let timer1;
let timer2;
let timer3;

//Timer Reset
function reset() {
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
}

// Score counter-------------------------------------------------

// Target event listermers
target1.addEventListener('click', function() {
    score.innerText = 1;
    console.log('clicked target1');
});

target2.addEventListener('click', function() {
    score.innerText = 1;
    console.log('clicked target2');
});
target3.addEventListener('click', function() {
    score.innerText = 1;
    console.log('clicked target3');
});

//Score Counter divs
let score = counterDiv.children[0];
let scoreMissed = counterDiv.children[1];
// game window event listener
gameWindow.addEventListener('click', function(e) {
// prevent click event trigger on child elements solution I found here https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli
    e = window.event || e; 
    if(this === e.target) {
//-----------user--Sabaz------------------
    let windowClick = 1;
    scoreMissed.innerText = 1;
    console.log(windowClick);
    }
});


// Game Setup based on Level sellection-----------------------


const level1 = levelDiv.children[0];
const level2 = levelDiv.children[1];
const level3 = levelDiv.children[2];

level1.addEventListener('click', function() {
    reset();
     timer1 = setInterval( function() {
            gameOne();
            console.log('Easy');
        }, 3000);
});
level2.addEventListener('click', function() {
    reset();
    timer2 = setInterval( function() {
        setTimeout(gameTwo, 2000);
        console.log('Medium');
    }, 3000);
});
level3.addEventListener('click', function() {   
    reset();
    timer3 = setInterval( function() {
        setTimeout(gameThree, 2000);
        console.log('Hard');
    }, 3000);
});



