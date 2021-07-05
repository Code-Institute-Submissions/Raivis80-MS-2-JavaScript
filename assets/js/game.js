function theGame() {

    const gameWindow = document.getElementById('gameWindow');
    const counterDiv = document.getElementById('score_counter');
    const levelDiv = document.getElementById('select_level');
    const livesDiv = document.getElementById('lives_remailing');
    const addLife = document.getElementById('add_life');
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

    target1.style.backgroundColor = 'indigo';
    target2.style.backgroundColor = 'red';
    target3.style.backgroundColor = 'royalblue';


    // -------------------RANDOM NUMBER GENERATOR-------------------
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

    };
    positionYX()
    console.log(width, height);

    // ------Get random number and position in one function.----------------
    //x,t possition for individual targets
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
        // setTimeout(console.log(difference, 'EndGame') , 8000);
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

    function targetsDisplayNone() {
        target1.style.display = 'none';
        target2.style.display = 'none';
        target3.style.display = 'none';
    }

    function livesDisplayWhite() {
        life1.style.backgroundColor = 'white';
        life2.style.backgroundColor = 'white';
        life3.style.backgroundColor = 'white';
    }

    //---------- Target event listermers- target--Score counters------------------
    function targets() {
        target1.addEventListener('click', function () {
            this.style.display = 'none';
            score.innerText++;
            scoreCount = score.innerText;
            countScore();
            livesClick++;
            countDifference();
            addLifeDisplay()
            console.log(boxClicks, clicksIs)
        });
        target2.addEventListener('click', function () {
            this.style.display = 'none';
            score.innerText++;
            scoreCount = score.innerText;
            countScore();
            livesClick++;
            countDifference();
            addLifeDisplay()
            console.log(boxClicks, clicksIs)
        });
        target3.addEventListener('click', function () {
            this.style.display = 'none';
            score.innerText++;
            scoreCount = score.innerText;
            countScore();
            livesClick++;
            countDifference();
            addLifeDisplay()
            console.log(boxClicks, clicksIs)
        });

    }

    // ---------------------GAME Setup Function ----------------------
    //life click counter variable
    let clicksIs = 0;

    // window click function
    let detectWindowEvents;

    function gameSetup() {
        // Game window mousedown listener
        gameWindow.addEventListener('mousedown', detectWindowEvents);
        // window click detection function
        function detectWindowEvents(event) {
            // prevent click event trigger on child elements solution|
            //--Stackoverflow---user--Sabaz-----                     |
            //https://stackoverflow.com/questions/1369035/           |
            //how-do-i-prevent-a-parents-onclick-event-from          |
            //firing-when-a-child-anchor-is-cli                      |
            if (this === event.target) {
                scoreMissed.innerText++;
                resetClicks();
                windowClicks++
                clicks = 0;
                clicksIs++;
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                // Check  if lives remeining.
                // Deduct one live if available, 
                // Else go to the game over function.
                if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'indigo') {
                    life1.style.backgroundColor = 'white';

                } else if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'white') {
                    life2.style.backgroundColor = 'white';

                } else if (life1.style.backgroundColor === 'white' && life2.style.backgroundColor === 'white') {
                    life3.style.backgroundColor = 'white';
                    stopTheGame()
                }
            };
        };
        // Game window mouseup listener
        gameWindow.addEventListener('mouseup', function () {
            this.style.backgroundColor = 'lavenderblush';
        });
    }

    // click counter variables
    let windowClicks = 0;
    let boxClicks = 0;
    let difference = 0;
    // reset window and target click event count
    function resetClicks() {
        windowClicks = 0;
        boxClicks = 0;
    }
    // -User--Salil---https://stackoverflow.com/questions/3156765/
    // javascript-function-to-get-the-difference-between-two-numbers/3156794
    // get diffference detween succesful and unsuccessful clicks
    function countDifference(clicksIs, clicksIs) {
        if (boxClicks > clicksIs) {
            difference = Math.abs(clicksIs - boxClicks);
        } else {
            difference = Math.abs(boxClicks, clicksIs);
        };
    }

    // add life counter display

    function addLifeDisplay() {
        
        if (life1.style.backgroundColor == 'white' && life2.style.backgroundColor == 'red') {
            if (difference == 0) {
                addLife.style.width = '0';
                addLife.style.backgroundColor = 'indigo';
            } else if (difference === 1) {
                addLife.style.width = '10%';
                addLife.style.backgroundColor = 'indigo';
            } else if (difference === 2) {
                addLife.style.width = '20%';
                addLife.style.backgroundColor = 'indigo';
            } else if (difference === 4) {
                addLife.style.width = '40%';
                addLife.style.backgroundColor = 'indigo';
            } else if (difference === 6) {
                addLife.style.width = '60%';
                addLife.style.backgroundColor = 'indigo';
            } else if (difference == 8) {
                addLife.style.width = '80%';
                addLife.style.backgroundColor = 'indigo';
            } else if (difference == 9) {
                addLife.style.width = '100%';
            }
        } if (life2.style.backgroundColor == 'white') {
                if (difference == 0) {
                    addLife.style.width = '0';
                    addLife.style.backgroundColor = 'red';
                } else if (difference === 1) {
                    addLife.style.width = '10';
                    addLife.style.backgroundColor = 'red';
                } else if (difference === 2) {
                    addLife.style.width = '20%';
                    addLife.style.backgroundColor = 'red';
                }else if (difference === 4) {
                    addLife.style.width = '40%';
                    addLife.style.backgroundColor = 'red';
                } else if (difference === 6) {
                    addLife.style.width = '60%';
                    addLife.style.backgroundColor = 'red';
                } else if (difference == 8) {
                    addLife.style.width = '80%';
                    addLife.style.backgroundColor = 'red';
                } else if (difference == 9) {
                    addLife.style.width = '100%';
                };
        } else {
            // addLife.style.width = '100%';
            // addLife.style.backgroundColor = 'indigo';
        };
    }
    console.log(boxClicks, clicksIs)
    //Add one life if traget & game window 
    //point difference is reached + click counter 
    function countScore() {
        boxClicks++;
        if (difference == 9 && life1.style.backgroundColor !== 'indigo') {
            if (life1.style.backgroundColor === 'white' && life2.style.backgroundColor === 'red') {
                life1.style.backgroundColor = 'indigo';
                resetClicks();
            } else if (life3.style.backgroundColor === 'royalblue' && life2.style.backgroundColor === 'white') {
                life2.style.backgroundColor = 'red';
                resetClicks();
            } else {
                countScore();
                console.log(life1.style.backgroundColor);
            };
        };
    }

    let livesClick;

    // If click on target check the count 
    function chekRemainingTargets() {}
    if (livesClick === undefined) {
        livesClick = 0;
    } else if (livesClick < 4) {
        livesClick++;
    }

    function didNotClickE() {
        if (livesClick === 0 && livesClick !== undefined) {
            if (life1.style.backgroundColor === 'indigo' && life2.style.backgroundColor === 'red') {
                life1.style.backgroundColor = 'white';
                livesClick = 0;
            } else if (life1.style.backgroundColor === 'white' && life2.style.backgroundColor === 'red') {
                life2.style.backgroundColor = 'white';
            } else if (life3.style.backgroundColor === 'royalblue' && life2.style.backgroundColor === 'white') {
                stopTheGame();
            }
        };
    }

    function compareEasy() {
        if (livesClick === 1) {
            livesClick = 0;
            console.log('reset the counter');
        };
    }

    function didNotClickM() {
        if (livesClick === 0 && livesClick !== undefined) {
            if (life1.style.backgroundColor === 'indigo' && life2.style.backgroundColor === 'red') {
                life1.style.backgroundColor = 'white';
                life2.style.backgroundColor = 'white';
                livesClick = 0;
            } else if (life3.style.backgroundColor === 'royalblue' && life2.style.backgroundColor === 'white') {
                stopTheGame();
            };
        };
    }

    function compareMedium() {
        if (livesClick === 1) {
            if (life1.style.backgroundColor === 'indigo' && life2.style.backgroundColor === 'red') {
                life1.style.backgroundColor = 'white';
                livesClick = 0;
            } else if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'white') {
                life2.style.backgroundColor = 'white';
                livesClick = 0;
            } else if (life2.style.backgroundColor === 'white' && life3.style.backgroundColor === 'royalblue') {
                stopTheGame();
            };
        } else if (livesClick = 2); {
            console.log('reset the counter');
            livesClick = 0;
        }
    }

    function didNotClickH() {
        if (livesClick === 0 && livesClick !== undefined) {
            stopTheGame();
        };
    }

    function compareHard() {
        if (livesClick === 1) {
            if (life1.style.backgroundColor === 'indigo' && life2.style.backgroundColor === 'red') {
                life1.style.backgroundColor = 'white';
                life2.style.backgroundColor = 'white';
                resetClicks();
                livesClick = 0;
            } else if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'white') {
                stopTheGame();
            } else if (life2.style.backgroundColor === 'white' && life3.style.backgroundColor === 'royalblue') {
                stopTheGame();
            };
        } else if (livesClick === 2) {
            if (life1.style.backgroundColor === 'indigo' && life2.style.backgroundColor === 'red') {
                life1.style.backgroundColor = 'white';
                resetClicks();
                livesClick = 0;
            } else if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'white') {
                life2.style.backgroundColor = 'white';
                resetClicks();
                livesClick = 0;
            } else if (life2.style.backgroundColor === 'white' && life3.style.backgroundColor === 'royalblue') {
                stopTheGame()
            };
        } else if (livesClick === 3) {
            livesClick = 0;
        };
    }

    const startNewGame = document.getElementById('start_game');

    function startTheGame() {
        startNewGame.style.display = 'none';
    }
    // Game Level sellection-----------------------
    // Level sellection listeners
    level1.addEventListener('click', levelEasy);
    level2.addEventListener('click', levelMedium);
    level3.addEventListener('click', levelHard);
    console.log(window.location.href);

    // Easy level 
    function levelEasy() {
        startTheGame();
        addLife.style.width = '100%';
        console.log('Easy');
        levelDiv.style.display = 'none';
        targets();
        gameSetup();
        reset();
        timer1 = setInterval(function () {
            gameOne();
            chekRemainingTargets();
            compareEasy();
            setTimeout(didNotClickE, 2900);
        }, 3000);
    }
    // Medium Level 
    function levelMedium() {
        startTheGame();
        addLife.style.width = '100%';
        console.log('Medium');
        levelDiv.style.display = 'none';
        targets();
        gameSetup();
        reset();
        timer2 = setInterval(function () {
            gameTwo();
            chekRemainingTargets();
            compareMedium();
            setTimeout(didNotClickM, 2900);
        }, 3000);
    }
    // Level Hard
    function levelHard() {
        startTheGame();
        addLife.style.width = '100%';
        console.log('Hard');
        levelDiv.style.display = 'none';
        targets();
        gameSetup();
        reset();

        timer3 = setInterval(function () {
            gameThree();
            chekRemainingTargets();
            compareHard();
            setTimeout(didNotClickH, 2900);
        }, 3000);
    }

    // Stop The Game function 
    function stopTheGame() {
        console.log('game over', livesClick);
        gameWindow.removeEventListener('mousedown', detectWindowEvents);
        targetsDisplayNone();
        livesDisplayWhite();
        gameOver.style.display = 'flex';
        reset();
    }

    //Game Over reload screen
    const gameOver = document.getElementById('game-over');
    document.getElementById('new_game_btn').addEventListener('click', gameOverRestart);
    function gameOverRestart() {
        location.reload();
    }

}


theGame();