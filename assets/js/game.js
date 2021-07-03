function theGame() {

    const gameWindow = document.getElementById('gameWindow');
    const counterDiv = document.getElementById('score_counter');
    const levelDiv = document.getElementById('select_level');
    const livesDiv = document.getElementById('lives_remailing');

    // game window hidth/height
    let width;
    let height;

    // random number variables
    let numWidth;
    let numHeight;

    // x any screen position
    let positionx;
    let positiony;

    // Timmer variables 
    let timer1;
    let timer2;
    let timer3;


    //Game Window-And target-variables
    const target1 = gameWindow.children[0];
    const target2 = gameWindow.children[1];
    const target3 = gameWindow.children[2];

    //Score Counter varialles
    const score = counterDiv.children[0];
    const scoreMissed = counterDiv.children[1];

    // set level variables
    const level1 = levelDiv.children[0];
    const level2 = levelDiv.children[1];
    const level3 = levelDiv.children[2];

    let life1 = livesDiv.children[0];
    let life2 = livesDiv.children[1];
    let life3 = livesDiv.children[2];

    // Lives Colors 
life1.style.backgroundColor = 'indigo';
life2.style.backgroundColor = 'red';
life3.style.backgroundColor = 'royalblue';

    // -------------------RANDOM NUMBER GENERATOR------------------
    // getting width and height numbers based on the screen size.

    // Passing width and height numbers into a random number generator to
    // get random x and y coardinates for the game objects.
    function positionYX() {
        width = gameWindow.offsetWidth;
        height = gameWindow.offsetHeight;

        numWidth = Math.floor(Math.random() * (width - 50));
        numHeight = Math.floor(Math.random() * (height - 50));

        positionx = numWidth + 'px';
        positiony = numHeight + 'px';
        console.log(width, height);
    };

    positionYX();
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
        targetReset();
        randomObject1();
    }

    function gameTwo() {
        targetReset();
        randomObject1();
        randomObject2();
    }

    function gameThree() {
        targetReset();
        randomObject1();
        randomObject2();
        randomObject3();
    }

    //Timer Reset
    function reset() {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
    }

    // Target reset display:block
    function targetReset() {
        target1.style.display = 'block';
        target2.style.display = 'block';
        target3.style.display = 'block';
    }
    // Target event listermers- target--Score counters-------------------------

let scoreCount = 0;
    function targets() {
        target1.addEventListener('click', function () {
            this.style.display = 'none';
            score.innerText++;
            scoreCount = score.innerText;
            countScore();
            console.log(score.innerText)
        });
        target2.addEventListener('click', function () {
            this.style.display = 'none';
            score.innerText++;
            scoreCount = score.innerText;
            countScore();
            console.log(score.innerText)

        });
        target3.addEventListener('click', function () {
            this.style.display = 'none';
            score.innerText++;
            scoreCount = score.innerText;
            countScore();
            console.log(score.innerText)
        });
                            
    }

    // game window event mouseup/ mousedown listener and missed score counter------
    // prevent click event trigger on child elements solution
    //--Stackoverflow---user--Sabaz-----https://stackoverflow.com/questions/1369035/
    //how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli
let detectWindowEvents; 

    function gameSetup() {
        gameWindow.addEventListener('mousedown', detectWindowEvents);

        function detectWindowEvents(event) {
            if (this === event.target) {
                scoreMissed.innerText++;
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'indigo') {
                    life1.style.backgroundColor = 'white';

                } else if (life2.style.backgroundColor === 'red'  &&  life1.style.backgroundColor === 'white') {
                    life2.style.backgroundColor = 'white';

                } else if (life1.style.backgroundColor === 'white' && life2.style.backgroundColor === 'white') {
                    life3.style.backgroundColor = 'white';
                    stopTheGame()
                }
            };
            gameWindow.addEventListener('mouseup', function () {
                this.style.backgroundColor = 'lavenderblush';
            });
        };
    }
function countScore() {    
    if (scoreCount == 5) { 
        if(life3.style.backgroundColor === 'royalblue' || life2.style.backgroundColor === 'white') {
            life2.style.backgroundColor = 'red';
        } if (life1.style.backgroundColor === 'white' && life2.style.backgroundColor === 'red') {
            life1.style.backgroundColor = 'indigo';
        } else {
            countScore();
            console.log(life1.style.backgroundColor);
        };
    };
} 



    

    // Game Setup based on Level sellection-------------------------


    level1.addEventListener('click', levelEasy);
    level2.addEventListener('click', levelMedium);
    level3.addEventListener('click', levelHard);
    console.log(window.location.href);

    function levelEasy() {
        levelDiv.style.display = 'none';
        targets();
        gameSetup();
        reset();
        timer1 = setInterval(function () {
            gameOne();
            console.log('Easy');
        }, 3000);
    }

    function levelMedium() {
        levelDiv.style.display = 'none';
        targets();
        gameSetup();
        reset();
        timer2 = setInterval(function () {
            gameTwo();
            console.log('Medium');
        }, 3000);
    }

    function levelHard() {
        levelDiv.style.display = 'none';
        targets();
        gameSetup();
        reset();
        timer3 = setInterval(function () {
            gameThree();
            
            console.log('Hard');
        }, 3000);
    }

    function stopTheGame() {
        console.log('game over');
        gameWindow.removeEventListener('mousedown',   detectWindowEvents);
        location.reload();
        reset();
        theGame();
    }

}


theGame();