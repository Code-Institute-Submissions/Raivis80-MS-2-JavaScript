function theGame() {

    const startGameElement = document.getElementById('start_game');
    const gameWindowElement = document.getElementById('game_window');
    const counterElement = document.getElementById('score_counter');
    const levelsElement = document.getElementById('select_level');
    const livesElement = document.getElementById('lives_remailing');
    const livesDivElement = document.getElementById('add_life');
    const gameOverElement = document.getElementById('game-over');
    const contactWindow = document.getElementById('contact_window');
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
    const target1 = gameWindowElement.children[0];
    const target2 = gameWindowElement.children[1];
    const target3 = gameWindowElement.children[2];

    //Score Counter varialles
    const score = counterElement.children[0];
    const scoreMissed = counterElement.children[1];

    // set level variables
    const level1 = levelsElement.children[0];
    const level2 = levelsElement.children[1];
    const level3 = levelsElement.children[2];

    let life1 = livesElement.children[0];
    let life2 = livesElement.children[1];
    let life3 = livesElement.children[2];

    // click counter variables
    let clicksIs = 0;
    let windowClicks = 0;
    let boxClicks = 0;
    let difference = 0;

    // Lives Colors 
    life1.style.backgroundColor = 'green';
    life2.style.backgroundColor = 'red';
    life3.style.backgroundColor = 'royalblue';

    // Trarget Colors
    target1.style.backgroundColor = 'green';
    target2.style.backgroundColor = 'red';
    target3.style.backgroundColor = 'royalblue';


    // -------------------RANDOM NUMBER GENERATOR-------------------
    // getting width and height numbers based on the screen size.
    // Passing width and height numbers into a random number generator to
    // get random x and y coardinates for the game objects.
    function positionYX() {
        width = gameWindowElement.offsetWidth;
        height = gameWindowElement.offsetHeight;

        numWidth = Math.floor(Math.random() * (width - 50));
        numHeight = Math.floor(Math.random() * (height - 50));

        positionx = numWidth + 'px';
        positiony = numHeight + 'px';

    };
    positionYX()

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

    // Game level targets 
    function gameOne() {
        target1.style.display = 'block';
        randomObject1();
    }

    function gameTwo() {
        target1.style.display = 'block';
        target2.style.display = 'block';
        randomObject1();
        randomObject2();
    }

    function gameThree() {
        target1.style.display = 'block';
        target2.style.display = 'block';
        target3.style.display = 'block';;
        randomObject1();
        randomObject2();
        randomObject3();
    }

    let timeOut1;
    let timeOut2;
    let timeOut3;
    //Timer Reset
    function reset() {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
        clearTimeout(timeOut1);
        clearTimeout(timeOut2);
        clearTimeout(timeOut3);
    }

    // Target reset display:none
    function targetsDisplayNone() {
        target1.style.display = 'none';
        target2.style.display = 'none';
        target3.style.display = 'none';
    }

    // Reset lives to color oldlace
    function livesDisplaySeashell() {
        life1.style.backgroundColor = 'oldlace';
        life2.style.backgroundColor = 'oldlace';
        life3.style.backgroundColor = 'oldlace';
    }

    //---------- Target event listermers- target--Score counters--------|
    function targetClickFunction() {
        target1.addEventListener('click', function () {
            this.style.display = 'none';
            score.innerText++;
            GameProgress();
            console.log(progressSpeed, timerCompareReset);
            scoreCount = score.innerText;
            countScore();
            livesClick++;
            countDifference();
            livesDivElementDisplay();

        });
        target2.addEventListener('click', function () {
            this.style.display = 'none';
            score.innerText++;
            GameProgress();
            console.log(progressSpeed, timerCompareReset);
            scoreCount = score.innerText;
            countScore();
            livesClick++;
            countDifference();
            livesDivElementDisplay();
        });
        target3.addEventListener('click', function () {
            this.style.display = 'none';
            score.innerText++;
            GameProgress();
            console.log(progressSpeed, timerCompareReset);
            scoreCount = score.innerText;
            countScore();
            livesClick++;
            countDifference();
            livesDivElementDisplay();
        });
    }

    // reset window and target click event count
    function resetClicks() {
        windowClicks = 0;
        boxClicks = 0;
    }

    let detectWindowEvents;

    //----------------------------Game Window---------------------------|
    function gameWindow() {
        // Game window mousedown listener
        gameWindowElement.addEventListener('mousedown', detectWindowEvents);
        // window click detection function

        function detectWindowEvents(event) {
            // prevent click event trigger on child elements helped me to solve this
            //Stackoverflow user abaz                    
            //https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli                      
            if (this === event.target) {
                scoreMissed.innerText++;
                resetClicks();
                windowClicks++
                clicks = 0;
                clicksIs++;
                livesDivElement.style.width = '0';
                this.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
                // Check  if lives remeining.Deduct one live if available, Else go to the game over function.
                if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'green') {
                    life1.style.backgroundColor = 'oldlace';

                } else if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'oldlace') {
                    life2.style.backgroundColor = 'oldlace';

                } else if (life1.style.backgroundColor === 'oldlace' && life2.style.backgroundColor === 'oldlace') {
                    life3.style.backgroundColor = 'oldlace';
                    stopTheGame()
                    reset();
                }
            };
        };
        // Game window mouseup listener
        gameWindowElement.addEventListener('mouseup', function () {
            this.style.backgroundColor = 'oldlace';
        });
    }


    //----get diffference detween succesful and unsuccessful clicks-------|
    // User Salil helped men with solution to prevent counting negative numbers 
    //https://stackoverflow.com/questions/3156765/javascript-function-to-get-the-difference-between-two-numbers/3156794
    let counetdDifference;

    function countDifference(clicksIs, clicksIs) {
        if (boxClicks > clicksIs) {
            difference = Math.abs(clicksIs - boxClicks);
            counetdDifference = difference;
        } else {
            difference = Math.abs(boxClicks, clicksIs);
            counetdDifference = difference;
        };
        return counetdDifference;
    }

    //----------------- add life counter progress bar ----------------------|
    function livesDivElementDisplay() {
        if (life1.style.backgroundColor == 'oldlace' && life2.style.backgroundColor == 'red') {
            if (difference == 0) {
                livesDivElement.style.width = '0';
                livesDivElement.style.backgroundColor = 'green';
            } else if (difference === 1) {
                livesDivElement.style.width = '10%';
                livesDivElement.style.backgroundColor = 'green';
            } else if (difference === 2) {
                livesDivElement.style.width = '20%';
                livesDivElement.style.backgroundColor = 'green';
            } else if (difference === 4) {
                livesDivElement.style.width = '40%';
                livesDivElement.style.backgroundColor = 'green';
            } else if (difference === 6) {
                livesDivElement.style.width = '60%';
                livesDivElement.style.backgroundColor = 'green';
            } else if (difference == 8) {
                livesDivElement.style.width = '80%';
                livesDivElement.style.backgroundColor = 'green';
            } else if (difference == 9) {
                livesDivElement.style.width = '100%';
            }
        } else if (life2.style.backgroundColor == 'oldlace') {
            if (difference == 0) {
                livesDivElement.style.width = '0';
                livesDivElement.style.backgroundColor = 'red';
            } else if (difference === 1) {
                livesDivElement.style.width = '10';
                livesDivElement.style.backgroundColor = 'red';
            } else if (difference === 2) {
                livesDivElement.style.width = '20%';
                livesDivElement.style.backgroundColor = 'red';
            } else if (difference === 4) {
                livesDivElement.style.width = '40%';
                livesDivElement.style.backgroundColor = 'red';
            } else if (difference === 6) {
                livesDivElement.style.width = '60%';
                livesDivElement.style.backgroundColor = 'red';
            } else if (difference == 8) {
                livesDivElement.style.width = '80%';
                livesDivElement.style.backgroundColor = 'red';
            } else if (difference == 9) {
                livesDivElement.style.width = '100%';
            };
        };
    }

    //---------------------------- Add lives Logic---------------------------| 
    //Add one life if traget & game window point difference is reached + click counter 
    function countScore() {
        console.log(`Score is: ${score.innerText} Missed target: ${clicksIs} Scorestreak is: ${counetdDifference}`)
        boxClicks++;
        if (difference == 9 && life1.style.backgroundColor !== 'green') {
            if (life1.style.backgroundColor === 'oldlace' && life2.style.backgroundColor === 'red') {
                life1.style.backgroundColor = 'green';
                resetClicks();
            } else if (life3.style.backgroundColor === 'royalblue' && life2.style.backgroundColor === 'oldlace') {
                life2.style.backgroundColor = 'red';
                resetClicks();
            } else {
                countScore();
            };
        };
    }

    // If click on target check the count level1
    let livesClick;

    function checkRemainingTargets() {}
    if (livesClick === undefined) {
        livesClick = 0;
    } else if (livesClick < 4) {
        livesClick++;
    }

    // If missed click on target deduct one life or game over for level1
    function didNotClickE() {
        if (livesClick === 0 && livesClick !== undefined) {
            if (life1.style.backgroundColor === 'green' && life2.style.backgroundColor === 'red') {
                life1.style.backgroundColor = 'oldlace';
                livesClick = 0;
            } else if (life1.style.backgroundColor === 'oldlace' && life2.style.backgroundColor === 'red') {
                life2.style.backgroundColor = 'oldlace';
            } else if (life3.style.backgroundColor === 'royalblue' && life2.style.backgroundColor === 'oldlace') {
                stopTheGame();
                reset();
            } else if (life3.style.backgroundColor === 'oldlace') {
                stopTheGame();
                reset();

            }
        };
    }

    // If clicked clear counter level 1
    function compareEasy() {
        if (livesClick === 1) {
            livesClick = 0;
            console.log('reset the counter');
        };
    }

    // check if Did not click on any target for level2
    function didNotClickM() {
        if (livesClick === 0 && livesClick !== undefined) {
            if (life1.style.backgroundColor === 'green' && life2.style.backgroundColor === 'red') {
                life1.style.backgroundColor = 'oldlace';
                life2.style.backgroundColor = 'oldlace';
                livesClick = 0;
            } else if (life3.style.backgroundColor === 'royalblue' && life2.style.backgroundColor === 'oldlace') {
                stopTheGame();
                reset();
            } else if (life3.style.backgroundColor === 'royalblue' && life2.style.backgroundColor === 'red') {
                stopTheGame();
                reset();
            };
        };
    }

    // If missed click on target/s deduct one life or game over for level2
    function compareMedium() {
        if (livesClick === 1) {
            if (life1.style.backgroundColor === 'green' && life2.style.backgroundColor === 'red') {
                life1.style.backgroundColor = 'oldlace';
                livesClick = 0;
            } else if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'oldlace') {
                life2.style.backgroundColor = 'oldlace';
                livesClick = 0;
            } else if (life2.style.backgroundColor === 'oldlace' && life3.style.backgroundColor === 'royalblue') {
                stopTheGame();
                reset();
            };
        } else if (livesClick = 2); {
            console.log('reset the counter');
            livesClick = 0;
        }
    }

    // check if Did not click on any target for level3
    function didNotClickH() {
        if (livesClick === 0 && livesClick !== undefined) {
            stopTheGame();
            reset();
        };
    }

    // If missed click on target/s deduct one life or game over for level3
    function compareHard() {
        if (livesClick === 1) {
            if (life1.style.backgroundColor === 'green' && life2.style.backgroundColor === 'red') {
                life1.style.backgroundColor = 'oldlace';
                life2.style.backgroundColor = 'oldlace';
                resetClicks();
                livesClick = 0;
            } else if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'oldlace') {
                stopTheGame();
                reset();
            } else if (life2.style.backgroundColor === 'oldlace' && life3.style.backgroundColor === 'royalblue') {
                stopTheGame();
                reset();
            };
        } else if (livesClick === 2) {
            if (life1.style.backgroundColor === 'green' && life2.style.backgroundColor === 'red') {
                life1.style.backgroundColor = 'oldlace';
                resetClicks();
                livesClick = 0;
            } else if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'oldlace') {
                life2.style.backgroundColor = 'oldlace';
                resetClicks();
                livesClick = 0;
            } else if (life2.style.backgroundColor === 'oldlace' && life3.style.backgroundColor === 'royalblue') {
                stopTheGame()
                reset();
            };
        } else if (livesClick === 3) {
            livesClick = 0;
        };
    }
    livesDivElement.style.width = '100%';
    livesDivElement.style.backgroundColor = 'green';

    //----------------------game complexity progression----------------| 
    // As score increase Speed will increase as well 
    let progressSpeed;
    let timerCompareReset;

    function GameProgress() {
        progressSpeed = 3000;
        timerCompareReset = progressSpeed - 100;
        if (score.innerText >= 100 && score.innerText <= 100) {
            progressSpeed = 2600;
            timerCompareReset = progressSpeed - 100;
        } else if (score.innerText >= 200 && score.innerText <= 150) {
            progressSpeed = 2200;
            timerCompareReset = progressSpeed - 100;
        } else if (score.innerText >= 300 && score.innerText <= 200) {
            progressSpeed = 1800;
            timerCompareReset = progressSpeed - 120;
        } else if (score.innerText >= 350 && score.innerText <= 250) {
            progressSpeed = 1400;
            timerCompareReset = progressSpeed - 120;
        } else if (score.innerText >= 400) {
            progressSpeed = 1000;
        };
    }
    GameProgress()


    //---------------------Game Level sellection-----------------------|
    // Level sellection listeners
    level1.addEventListener('click', levelEasy);
    level2.addEventListener('click', levelMedium);
    level3.addEventListener('click', levelHard);

    function removeLevelListeners() {
        level1.removeEventListener('click', levelEasy);
        level2.removeEventListener('click', levelMedium);
        level3.removeEventListener('click', levelHard);
    }

    // Game setup and start
    function gameSetup() {
        startGameElement.style.display = 'none';
        removeLevelListeners();
        livesDivElement.style.width = '100%';
        levelsElement.style.display = 'none';
        gameWindow();
    }

    // Easy level 
    function levelEasy() {
        gameSetup();
        console.log('Easy');
        targetClickFunction();

        function levelE() {
            clearInterval(timer1);
            gameOne();
            checkRemainingTargets();
            compareEasy();
            timeOut1 = setTimeout(didNotClickE, timerCompareReset);
            timer1 = setInterval(levelE, progressSpeed);
        };
        if (life3.style.backgroundColor === 'oldlace') {
            clearInterval(timer1);
        } else {
            timer1 = setInterval(levelE, progressSpeed);
        };
    }
    // Medium Level 
    function levelMedium() {
        gameSetup();
        console.log('Medium');
        targetClickFunction();

        function levelM() {
            clearInterval(timer2);
            gameTwo();
            checkRemainingTargets();
            compareMedium();
            timeOut2 = setTimeout(didNotClickM, timerCompareReset);
            timer2 = setInterval(levelM, progressSpeed);
        }
        if (gameOverElement.style.display === 'flex') {
            clearInterval(timer2);
        } else {
            timer2 = setInterval(levelM, progressSpeed);
        };
    }
    // Level Hard
    function levelHard() {
        gameSetup();
        console.log('Hard');
        targetClickFunction();

        function levelH() {
            clearInterval(timer3);
            gameThree();
            checkRemainingTargets();
            compareHard();
            timeOut3 = setTimeout(didNotClickH, timerCompareReset);
            timer3 = setInterval(levelH, progressSpeed);
        };
        if (life3.style.backgroundColor === 'oldlace') {
            clearInterval(timer3);
            console.log('cleared')
        } else {
            timer3 = setInterval(levelH, progressSpeed);
        };
    }


    //------------------------- Stop The Game function------------------| 
    function stopTheGame() {
        console.log('game over', livesClick);
        gameWindowElement.removeEventListener('mousedown', detectWindowEvents);
        document.getElementById('new_game_btn').addEventListener('click', gameOverRestart);
        targetsDisplayNone();
        livesDisplaySeashell();
        progressSpeed = progressSpeed * 1000;
        livesDivElement.style.width = 0;
        gameOverElement.style.display = 'flex';
    }

    //Game Over reload screen 
    function gameOverRestart() {
        location.reload();
    }

document.getElementById('new_game_btn').addEventListener('click', gameOverRestart);
document.getElementById('button2').addEventListener('click', gameOverRestart);
document.getElementById('contact_button').addEventListener('click', contactFormm);
document.getElementById('contact_button2').addEventListener('click', contactFormm);
 

function contactFormm() {
    contactWindow.style.display = 'flex';
    startGameElement.style.display = 'none';
 }
    // clicksIs = 0;
    // windowClicks = 0;
    // boxClicks = 0;
    // difference = 0;

    console.log(`Screen size:  ${width}px ${height}px`);

}


theGame();





//-------------------CONTACT FORM--API--emailjs.com--------------------------
// this code is reused of Code Institute Resume project 
function sendMail(contactForm) {
    emailjs.send("gmail", "game", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}