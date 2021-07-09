const startGameElement = document.getElementById('start_game');
const gameWindowElement = document.getElementById('game_window');
const counterElement = document.getElementById('score_counter');
const levelsElement = document.getElementById('select_level');
const livesElement = document.getElementById('lives_remailing');
const livesDivElement = document.getElementById('add_life');
const gameOverElement = document.getElementById('game-over');
const contactWindow = document.getElementById('contact_window');
const speedElement = document.getElementById('speed');


//----------------------------START SCREEN-------------------------------------|

// Start screen Effect
const startChild2 = document.getElementById('start_game').children[1].style.margin = '0%';
const startChild3 = document.getElementById('start_game').children[2].style.margin = '0%';
const startChild4 = document.getElementById('start_game').children[3].style.margin = '0%';
const startChild5 = document.getElementById('start_game').children[4].style.margin = '0%';

//level variables
const level1 = levelsElement.children[0];
const level2 = levelsElement.children[1];
const level3 = levelsElement.children[2];

// Start pageutton listeners
document.addEventListener('DOMContentLoaded', function() {

document.getElementById('contact_button').addEventListener('click', contactPage);
document.getElementById('info').addEventListener('click', infoPopout);
level1.addEventListener('click', levelEasy);
level2.addEventListener('click', levelMedium);
level3.addEventListener('click', levelHard);
});

function removeLevelListeners() {
    level1.removeEventListener('click', levelEasy);
    level2.removeEventListener('click', levelMedium);
    level3.removeEventListener('click', levelHard);
}

//----------------------------INFO-POP-OUT-------------------------------------|

const helpElement = document.getElementById('help');
helpElement.style.display = 'none'
function infoPopout() {
    
    const gameHelp = document.getElementById('game_help');
    if (helpElement.style.display === 'none') {
        helpElement.style.display = 'flex';
        gameHelp.style.display = 'block';
        setTimeout(function () {
            helpElement.style.transition = 'margin-top 1s cubic-bezier(.36,1.27,1,.49)';
            helpElement.style.marginTop = '290px';
            gameHelp.style.transition = 'bottom 1s cubic-bezier(.36,1.27,1,.49)';
            gameHelp.style.bottom = '8%';
        }, 100);
    } else {
        helpElement.style.marginTop = '0px';
        gameHelp.style.bottom = '-100%';

        setTimeout(function () {
            helpElement.style.display = 'none';
            gameHelp.style.display = 'none';
        }, 500);
    }
}

//----------------------------CONTACT PAGE-------------------------------------|
contactWindow.style.display = 'none';

function contactPage() {
    document.getElementById('form');
    const formChild2 = document.getElementById('contact_window').children[1];
    const formChild3 = document.getElementById('contact_window').children[2];
    document.getElementById('button2').addEventListener('click', pageReload1);
    contactWindow.style.display = 'flex';
    setTimeout(setTimeout1, 100);
    //setTimeout for page load styling
    function setTimeout1() {
        formChild2.style.margin = '0%';
        formChild3.style.margin = '0%';
        startGameElement.style.display = 'none';
        gameOverElement.style.display = 'none';
    };

}
//-CONTACT FORM--API--emailjs.com
// Some of emailjs API code is reused of Code Institute Resume project 
// Added message element and clear form after sent
function sendMail(contactForm) {
    emailjs.send("gmail", "game", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "Game_bug_report": contactForm.gameBugReport.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                // Added alert mesaage after successfull delivery
                document.getElementById('submit_alert').setAttribute("class", "submit_alert border");
                document.getElementById('submit_alert').innerHTML = `<p>Your message has been sent successfully. Thank You!</p>`;
                // Reset alert message after 6 seconds
                setTimeout(alertOff, 6000);
                document.getElementById('form').reset();
                // Alert reset function
                function alertOff() {
                    document.getElementById('submit_alert').setAttribute("class", "");
                    document.getElementById('submit_alert').innerHTML = '';
                }
            },
            function (error) {
                alert('Your Failed to sent. Please check your details. Thank you...')
                console.log("FAILED", error);
            }
        );
    return false;
}


//----------------------------GAME WINDOW-------------------------------------|

// Lives Elements
let life1 = livesElement.children[0];
let life2 = livesElement.children[1];
let life3 = livesElement.children[2];

// Lives Colors 
life1.style.backgroundColor = 'green';
life2.style.backgroundColor = 'red';
life3.style.backgroundColor = 'royalblue';

//Tarnsition ellects liver remeinling
life1.style.transition = ".6s";
life2.style.transition = ".6s";
life3.style.transition = ".6s";
livesDivElement.style.transition = ".6s";

// Reset lives to color oldlace
function livesDisplaySeashell() {
    life1.style.backgroundColor = 'oldlace';
    life2.style.backgroundColor = 'oldlace';
    life3.style.backgroundColor = 'oldlace';
}


let detectWindowEvents;
let clicksIs = 0;
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
            boxClicks = 0;
            streak2 = 0;
            streak1 = 0;
            clicksIs = 0;
            clicksIs++;
            countDifference();
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

// ---------------------------RANDOM NUMBER GENERATOR--------------------------------|
// getting width and height numbers based on the screen size.
// Passing width and height numbers into a random number generator to
// get random x and y coardinates for the game objects.
// game window hidth/height
let width;
let height;
// random number variables
let numWidth;
let numHeight;
// x any screen position
let positionx;
let positiony;

function positionYX() {
    width = gameWindowElement.offsetWidth;
    height = gameWindowElement.offsetHeight;

    numWidth = Math.floor(Math.random() * (width - 50));
    numHeight = Math.floor(Math.random() * (height - 50));

    positionx = numWidth + 'px';
    positiony = numHeight + 'px';
};
positionYX()
console.log(`Screen size:  ${width}px ${height}px`);

//Target-variables
const target1 = gameWindowElement.children[0];
const target2 = gameWindowElement.children[1];
const target3 = gameWindowElement.children[2];

// Trarget Colors
target1.style.backgroundColor = 'green';
target2.style.backgroundColor = 'red';
target3.style.backgroundColor = 'royalblue';

// Target reset display:none
function targetsDisplayNone() {
    target1.style.display = 'none';
    target2.style.display = 'none';
    target3.style.display = 'none';
}
// Tagtet possition setup
function randomObject1() {
    positionYX();
    target1.style.left = positionx;
    target1.style.top = positiony;
    target1.style.display = 'block';
}

function randomObject2() {
    positionYX();
    target2.style.left = positionx;
    target2.style.top = positiony;
    target2.style.display = 'block';
}

function randomObject3() {
    positionYX()
    target3.style.left = positionx;
    target3.style.top = positiony;
    target3.style.display = 'block';
}


//-------------------------------SCORE STREAK COUNTER ----------------------------|

//Score Counter varialles
const score = counterElement.children[0];
const scoreStreak = counterElement.children[1];
const scoreMissed = counterElement.children[2];


let streak2 = 0;
let streak1 = 0;
let highScore = 0;

function countHighScore(highScoreClick, higScoreMiss) {
    highScoreClick = streak1;
    higScoreMiss = streak2;
    if (highScoreClick > higScoreMiss) {
        highScore = Math.abs(highScoreClick - higScoreMiss);
        scoreStreak.innerText = highScore;
    } else {
        highScore = Math.abs(higScoreMiss - highScoreClick);
        scoreStreak.innerText = highScore;
    };
}

//------------------------------ ADD LIVES LOGIC ----------------  ----------------| 

// reset window and target click event count
// click counter variables

let boxClicks = 0;
let difference = 0;

function countDifference(clicksIs) {
    if (boxClicks > clicksIs) {
        difference = Math.abs(clicksIs - difference);
    } else {
        difference = Math.abs(boxClicks, clicksIs);
    };
}

function livesLogic() {
    speedElement.children[0].innerText = `${progressSpeed  / 1000}s`;
    score.innerText++;
    targetClick++;
    boxClicks++;
    streak1++;
    countHighScore();
    countDifference();
    GameProgress();

    //Add one life
    if (life1.style.backgroundColor == 'oldlace' && life2.style.backgroundColor === 'red') {
        livesDivElement.style.width = difference * 4 + '%';
        livesDivElement.style.backgroundColor = 'green';
    } else if (life2.style.backgroundColor == 'oldlace') {
        livesDivElement.style.width = difference * 4 + '%';;
        livesDivElement.style.backgroundColor = 'red';
    };

    //life counter progress bar
    if (difference == 25 && life1.style.backgroundColor !== 'green') {
        if (life1.style.backgroundColor === 'oldlace' && life2.style.backgroundColor === 'red') {
            life1.style.backgroundColor = 'green';
            boxClicks = 0;
        } else if (life3.style.backgroundColor === 'royalblue' && life2.style.backgroundColor === 'oldlace') {
            life2.style.backgroundColor = 'red';
            boxClicks = 0;
        } else {
            livesLogic();
        };
    };
}

//----------------------------------MISSED TARGET LOGIC-----------------------------------|
// If click on target check the count level1
let targetClick;

function checkRemainingTargets() {}
if (targetClick === undefined) {
    targetClick = 0;
} else if (targetClick < 4) {
    targetClick++;
}

// If missed click on target deduct one life or game over for level1
function didNotClickE() {
    if (targetClick === 0 && targetClick !== undefined) {
        if (life1.style.backgroundColor === 'green' && life2.style.backgroundColor === 'red') {
            scoreMissed.innerText++;
            livesDivElement.style.width = '0';
            life1.style.backgroundColor = 'oldlace';
            targetClick = 0;
        } else if (life1.style.backgroundColor === 'oldlace' && life2.style.backgroundColor === 'red') {
            life2.style.backgroundColor = 'oldlace';
            livesDivElement.style.width = '0';
            scoreMissed.innerText++;
            targetClick = 0;
        } else if (life3.style.backgroundColor === 'royalblue' && life2.style.backgroundColor === 'oldlace') {
            scoreMissed.innerText++;
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
    if (targetClick === 1) {
        targetClick = 0;
    };
}

// check if Did not click on any target for level2
function didNotClickM() {
    if (targetClick === 0 && targetClick !== undefined) {
        if (life1.style.backgroundColor === 'green' && life2.style.backgroundColor === 'red') {
            life1.style.backgroundColor = 'oldlace';
            scoreMissed.innerText++;
            life2.style.backgroundColor = 'oldlace';
            scoreMissed.innerText++;
            livesDivElement.style.width = '0';
            targetClick = 0;
        } else if (life3.style.backgroundColor === 'royalblue' && life2.style.backgroundColor === 'oldlace') {
            scoreMissed.innerText++;
            scoreMissed.innerText++;
            stopTheGame();
            reset();
        } else if (life3.style.backgroundColor === 'royalblue' && life2.style.backgroundColor === 'red') {
            scoreMissed.innerText++;
            scoreMissed.innerText++;
            stopTheGame();
            reset();
        };
    };
}

// If missed click on target/s deduct one life or game over for level2
function compareMedium() {
    if (targetClick === 1) {
        if (life1.style.backgroundColor === 'green' && life2.style.backgroundColor === 'red') {
            life1.style.backgroundColor = 'oldlace';
            scoreMissed.innerText++;
            livesDivElement.style.width = '0';
            targetClick = 0;
        } else if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'oldlace') {
            life2.style.backgroundColor = 'oldlace';
            scoreMissed.innerText++;
            livesDivElement.style.width = '0';
            targetClick = 0;
        } else if (life2.style.backgroundColor === 'oldlace' && life3.style.backgroundColor === 'royalblue') {
            scoreMissed.innerText++;
            stopTheGame();
            reset();
        };
    } else if (targetClick = 2); {
        console.log('reset the counter');
        targetClick = 0;
    }
}

// check if Did not click on any target for level3
function didNotClickH() {
    if (targetClick === 0 && targetClick !== undefined) {
        scoreMissed.innerText++;
        scoreMissed.innerText++;
        scoreMissed.innerText++;
        stopTheGame();
        reset();
    };
}

// If missed click on target/s deduct one life or game over for level3
function compareHard() {
    if (targetClick === 1) {
        if (life1.style.backgroundColor === 'green' && life2.style.backgroundColor === 'red') {
            life1.style.backgroundColor = 'oldlace';
            scoreMissed.innerText++;
            life2.style.backgroundColor = 'oldlace';
            scoreMissed.innerText++;
            livesDivElement.style.width = '0';
            boxClicks = 0;
            targetClick = 0;
        } else if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'oldlace') {
            scoreMissed.innerText++;
            scoreMissed.innerText++;
            stopTheGame();
            reset();
        } else if (life2.style.backgroundColor === 'oldlace' && life3.style.backgroundColor === 'royalblue') {
            scoreMissed.innerText++;
            scoreMissed.innerText++;
            stopTheGame();
            reset();
        };
    } else if (targetClick === 2) {
        if (life1.style.backgroundColor === 'green' && life2.style.backgroundColor === 'red') {
            life1.style.backgroundColor = 'oldlace';
            scoreMissed.innerText++;
            livesDivElement.style.width = '0';
            boxClicks = 0;
            targetClick = 0;
        } else if (life2.style.backgroundColor === 'red' && life1.style.backgroundColor === 'oldlace') {
            life2.style.backgroundColor = 'oldlace';
            scoreMissed.innerText++;
            livesDivElement.style.width = '0';
            boxClicks = 0;
            targetClick = 0;
        } else if (life2.style.backgroundColor === 'oldlace' && life3.style.backgroundColor === 'royalblue') {
            scoreMissed.innerText++;
            stopTheGame()
            reset();
        };
    } else if (targetClick === 3) {
        targetClick = 0;
    };
}
livesDivElement.style.width = '100%';
livesDivElement.style.backgroundColor = 'green';

//----------------------GAME PROGRESS SPEED INCREASE-------------------------------------| 
// As score increase Speed will increase as well 
let progressSpeed;
let timerCompareReset;

function GameProgress() {
    progressSpeed = 3000;
    timerCompareReset = progressSpeed - 100;
    if (score.innerText >= 50 && score.innerText <= 100) {
        progressSpeed = 2500;
        timerCompareReset = progressSpeed - 100;
    } else if (score.innerText >= 100 && score.innerText <= 200) {
        progressSpeed = 2000;
        timerCompareReset = progressSpeed - 100;
    } else if (score.innerText >= 200 && score.innerText <= 300) {
        progressSpeed = 1800;
        timerCompareReset = progressSpeed - 100;
    } else if (score.innerText >= 300 && score.innerText <= 400) {
        progressSpeed = 1600;
        timerCompareReset = progressSpeed - 100;
    } else if (score.innerText >= 500) {
        progressSpeed = 1200;
    };
}
GameProgress()

//-------------------------------------GAME SELLECT---------------------------|
// Timmer variables 
let timer1;
let timer2;
let timer3;


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

// Game setup and start
function gameSetup() {
    targetTimer = progressSpeed / 2;
    startGameElement.style.display = 'none';
    removeLevelListeners();
    livesDivElement.style.width = '100%';
    levelsElement.style.display = 'none';
    gameWindow();
}

// Easy level-----------| 
function levelEasy() {
    //target event listeners
    target1.addEventListener('click', function () {
        this.style.display = 'none';
        scoreCount = score.innerText;
        livesLogic();
    });
    gameSetup();
    console.log('Easy');
    levelE(progressSpeed);
}

function levelE(speed) {
    timer1 = setInterval(timerEasy, speed);

    function timerEasy() {
        randomObject1();
        checkRemainingTargets();
        compareEasy();
        timeOut1 = setTimeout(didNotClickE, timerCompareReset);
    }
}

// Medium Level------------| 
function levelMedium() {
    //target event listeners
    target1.addEventListener('click', function () {
        this.style.display = 'none';
        scoreCount = score.innerText;
        livesLogic();
    });
    target2.addEventListener('click', function () {
        this.style.display = 'none';
        scoreCount = score.innerText;
        livesLogic();
    });
    gameSetup();
    console.log('Medium');
    levelM(progressSpeed);
}

function levelM(speed) {
    timer2 = setInterval(timerMedium, speed);

    function timerMedium() {
        randomObject1();
        randomObject2();
        checkRemainingTargets();
        compareMedium();
        timeOut2 = setTimeout(didNotClickM, timerCompareReset);
    }
}


//Level Hard-------------|
function levelHard() {
    //target event listeners
    target1.addEventListener('click', function () {
        this.style.display = 'none';
        scoreCount = score.innerText;
        livesLogic();
    });
    target2.addEventListener('click', function () {
        this.style.display = 'none';
        scoreCount = score.innerText;
        livesLogic();
    });
    target3.addEventListener('click', function () {
        this.style.display = 'none';
        scoreCount = score.innerText;
        livesLogic();
    });
    gameSetup();
    console.log('Hard');
    levelH(progressSpeed);
}

function levelH(speed) {
    timer3 = setInterval(timerHard, speed);

    function timerHard() {
        randomObject1();
        randomObject2();
        randomObject3();
        checkRemainingTargets();
        compareHard();
        timeOut3 = setTimeout(didNotClickH, timerCompareReset);
    }
}



//-------------------------------- STOP THE GAME----------------------------| 

const gameOverChild2 = document.getElementById('game-over').children[1];

function stopTheGame() {
    document.getElementById('new_game_btn').addEventListener('click', pageReload1);
    document.getElementById('contact_button2').addEventListener('click', contactPage);
    document.getElementById('new_game_btn').addEventListener('click', pageReload1);
    gameWindowElement.removeEventListener('mousedown', detectWindowEvents);
    targetsDisplayNone();
    livesDisplaySeashell();
    contactWindow.style.display = 'none';
    progressSpeed = progressSpeed * 1000;
    livesDivElement.style.width = '0';
    gameOverElement.style.display = 'flex';

    setTimeout(gameOverTimer, 100);

    function gameOverTimer() {
        gameOverChild2.style.margin = '0';
    };
}

//Game Over reload screen 
function pageReload1() {
    location.reload();
}