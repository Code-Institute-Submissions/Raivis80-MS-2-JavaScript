# Top

## MS-2 JavaScript | Reaction Time Game.

<!--For assestment - README.md file structure was copied from my first milestone project."-->
![View](project_files/site.PNG)
## [View the live project here.](https://raivis80.github.io/MS-2-JavaScript/game.html)
### Table of contents

1. [Introduction](#Introduction)
1. [UX](#UX)
    - [Player goal's](#Player-goals)
    - [Owner goal's](#Owner-goals)
    - [Developer goal's](#Developer-goals)
    - [Functionality Requirements](#Functionality-Requirements)
    - [User Stories](#User-Stories)
1. [Design](#Design)
    - [Wireframe](#Wireframe)
1. [Game Mechanics](#Game-Mechanics)
1. [Game Logic](#Game-Logic)
1. [Features](#Features)
    - [The Game](#The-Game)
    - [In Game](#In-Game)
    - [Game Information Poup](#Game-Information-Popup)
    - [Contact Bug report](#Contact-Bug-report)
    - [Game Over](#Game-Over)
1. [Testing](#Testing)
    - [W3C Validation](#W3C-Validation)
    - [Future Testing](#FutureTesting)
    - [User Stories](#User-Stories-Testing)
    - [Solved issues or bugs](#Solved-issues-or-bugs)
1. [Technologies and Frameworks](#Technologies-and-Frameworks)
   - [Languages](#Languages)
   - [Frameworks Libraries and Programs](#Frameworks-Libraries-and-Programs)  
1. [Deployment](#Deployment)
   - [Deployment on GitHub Pages](#Deploying-on-GitHub-Pages)
   - [Forking the Repository](#Forking-the-Repository)
   - [Creating a Clone](#Creating-a-Clone)
1. [Credits](#Credits)
   - [Code](#Code)
   - [Helpfull sites](#Helpfull-sites)
   - [Acknowledgements](#Acknowledgements)

# [&#8686;](#Top)
## ***Introduction***

**Single-player reaction time game** 

This is my second of four Milestone Projects that the developer must complete during the Full Stack Web Development Program at The Code Institute. 

The main requirement for this project is to write interactive web applications using HTML, CSS, JavaScript, and Application Programming Interfaces (APIs).

To manipulate the DOM as much as possible, I'm building a simple JavaScript single-player reaction time game.<br> 
The objective of this game is to click or tap the objects that are spawning randomly on the screen as quickly as you can.<br>
The difficulty will increase throughout the game.
# [&#8686;](#Top)
## **UX**
### **Player goals:**
1. Have fun playing the game.
1. Age appropriateness and child-friendly.
1. User-friendly controls.
1. Improve reaction times
1. Information on how to use the game.
1. If the mobile version is available.
1. Is the desktop version available.
### **Owner goals:**
1. Make a game that is fun to play.
1. The game is suitable for players of all ages.
1. The game Is child-friendly.
1. The game works on most devices.
1. Game rules available in-game on how to use the game.
1. It is vital to include a  bug report, contact form.
### **Developer goals:**
1. Developer will Learn code in javascript.
1. Connect at least one API.
1. Developer will manipulate the DOM as much as possible.
1. Developer will take up the challenge and learn new skills.
1. Include a JavaScrip project to build a portfolio.
### **User Stories**
As a player I want to:
1. To understand the game rules and to have gameplay instructions available.
1. Heve fun playing the game. 
1. To play a game that is visually appealing and has a user-friendly design.
1. To be able to understand the controls for the game.
1. The be able to select appropriate different levels, depending on player skill level. 
1. To be able to contact the developer if encounter any bugs or issues.
1. If the game is available on mobile devices and or despot pc's is important.
### **Functionality Requirements**
1. Build a simple single-player reaction time game.
1. Three-level selection. Easy, medium, and hard depending on the device.
1. Increase in complexity throughout the game.
1. The score counter if the player clicks or misses the target.
1. Provide the player with instructions on how to play the game.
1. Feedback form if encountered bugs or glitches.
1. Provide the player with feedback on how they're doing at any stage.
# [&#8686;](#Top)
## **Design**
- Color Scheme
    - Body background color antiquewhite.
    - Game Window background color oldlace.
    - Font and element background color red, royelBlue and green.
- Typography
    - Primary font-family: Press Start 2P with cursive as a fallback font
    - Secondary font-family: Roboto with sans-serif as a fallback
### **Wireframe**

You can view the wireframe [Here](project_files/wireframe.jpg)

# [&#8686;](#Top)
## **Game Mechanics**
1. Game Play
    - Select a difficulty level to start the game.
    - Click or tap on target objects once they spawn.
1. Select Level 
    - Touch-enabled devices start with higher speed.
    - Levels for mobile devices  = "Easy" Start with one target, "Medium" start with two targets "Hard" start with three targets.
    - Levels for PC's devices  = "Easy" Start with two targets, "Medium" start with three targets "Hard" start with four targets.
1. Score Counters
    - Score counter:
        - Will increase by one once the player clicks on the target.
    - Missed score counter:
        - Will increase by one if the target is not clicked on time or target is, missed altogether.
1. Lives Remaining
    - The game starts with three lives.
    - Players will gain life once every 50 score points. 
    - Maximum of three lives can be gained at once.
    - Player will lose a life if the target is not clicked on time or the target is missed altogether. 
    - Losing all lives means game over.
# [&#8686;](#Top)
## **Game Logic**  

Game logic wireframe can be seen [Here](project_files/wireframe2.jpg)
*** 
- Select Level
    - Added touchscreen detection, for mobile devices starting speed is faster than pointing enabled devices.
    - Levels for mobile devices  = "Easy" Start with one target, "Medium" start with two targets "Hard" start with three targets.
    - Levels for PC's devices  = "Easy" Start with two targets, "Medium" start with three targets "Hard" start with four targets.
        - Level target count and speed could be set in the game.js file 

Detect touch devices & add one ectra target for touch enebled devices & and set speed 
```JavaScript 
if ('ontouchstart' in window) { //<-Detect Touch devices
         speed = 2800; // <-Set game starting speed and everything else will change dynamically
        for (cube of cubes) {//<-IIf Touchscreen device detected, select level buttons show extra cube for consistency  
        cube.style.display = 'block';
        cube++ 
        }
    } else {
    //starting speed pc|
    speed = 3000; //<-Starting speed, with pointing devices
}

Starting Target count 
        if ('ontouchstart' in window) {
            objectCount = 4; //<-If Touchscreen device detected start with four targets  everything else, will change dynamically
        } else {
            objectCount = 3; //Else start with 3
        }
        startTheGame();
```
***
- Lives Remaining
    - Based on capture and click events, all Unsuccessful clicks and missed on-time events will disable one life element.
    - Based on the Score counter, every 50 score points will create one life. Enable one life element (if statement)
```JavaScript
//Set this to adjust How many points will add one life, This number must divide evenly with 100
pointsForLife = 50;
```
***
- Random Number generator
    - Extract Window height and width.
    - Create random number integer of a current window width and height.
```JavaScript
// get random position depending on screen size 
function posotioning() {
    w = gameWindowElement.offsetWidth;
    h = gameWindowElement.offsetHeight;
    x = Math.floor(Math.random() * (w - 50)) + 'px';
    y = Math.floor(Math.random() * (h - 50)) + 'px';
}
```
***
- In game target objects
    - Target HTML div elements in the DOM for game box targets.
    - Two random generated integers used for position x and y coardinates to target css position properties for HTML div elements.
```JavaScript
// append color and position for individual targets 
function objects() {
    for (let i = 0; i < objectCount; i++) {
        randColor = colours[(Math.random() * colours.length) | 0]
        posotioning();
        targets[i].style.display = 'block';
        targets[i].style.left = x;
        targets[i].style.top = y;
        targets[i].style.backgroundColor = randColor;
    }
}
```
***
- Click event listeners and capture events.
    - Create event listeners for game targets that will record successful clicks and disable target once clicked. If not will take away one life
```JavaScript
//target event listeners + styling once clickeed display none is set
function targetSetup() {
    for (let i = 0; i < objectCount; i++) {
        livesDivElement.style.transition = ".6s";
        targets[i].addEventListener('click', clickEvent = () => {
            targets[i].style.display = 'none';
            scoreCount = score.innerText;
            livesLogic();
        })
    }
}

```
***
- Create an event listener for the game window to record unsuccessful clicks. 
```JavaScript
//Detects clicks in game area and counts as miss 
function gameWindow() {
    // Game window mousedown listener
    gameWindowElement.addEventListener('mousedown', detectWindowEvents);
    function detectWindowEvents(event) {
        //Prevent click event trigger on child elements.                                    
        if (this === event.target) {
            clicks = 0;
            streak2 = 0;
            streak1 = 0;
            livesCount--;
            scoreMissed.innerText++;
            countDifference();
            deductLife()
            livesDivElement.style.width = '0';
            this.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        };
    };

    gameWindowElement.addEventListener('mouseup', function () {
        this.style.backgroundColor = 'oldlace';
    });
}

```
***
- Capture events on all failed click attempts. I managed to achieve this by counting how many objects at the end of setInterval() cycle has display: none; 
```JavaScript
//Timing for target check if display none count is less than initial target count then it will be, sent to not click() function, for calculation
let notClick = 0;
function timigFunction() {
    
    notClick = 0;
    for (let i = 0; i < targets.length; i++)
        if (targets[i].style.display === 'block') {
            notClick++;
        }
    if (notClick >= 3 && objectCount >= 3) {
        stopTheGame();
    } else if (notClick == 2 || notClick == 1) {
        livesCount = livesCount - notClick;
        deductLife()
    }
    console.log(livesCount)
    notClick = 0;
}

// Deduct life/lives if missed target/s
function deductLife() {
    if (livesCount == 2) {
        lives[0].style.backgroundColor = 'oldlace';
    } else if (livesCount == 1) {
        lives[0].style.backgroundColor = 'oldlace';
        lives[1].style.backgroundColor = 'oldlace';
    } else if (livesCount <= 0) {
        lives[0].style.backgroundColor = 'oldlace';
        lives[1].style.backgroundColor = 'oldlace';
        lives[2].style.backgroundColor = 'oldlace';
        stopTheGame();
    }
}
```
***
- Game setup
    - Based on Level selection. if "EASY", else if "MEDIUM", else if "HARD".
    - Level variable will be passed into the setInterval() function and will launch the game.
```JavaScript
// The game setup adds listeners and so on
function startTheGame() { 
    startGameElement.style.display = 'none';
    livesDivElement.style.width = '100%';
    levelsElement.style.display = 'none';
    gameWindow();
    targetSetup();
    levelH(speed);
}

function levelH(speed) {
    timer1 = setInterval(timingF, speed);//<-This set interval method Timing for game loop is' set dynamically 
    function timingF() { //<-The game set interval loop function.
        objects(); //<-Targets
        setTimeout(timigFunction, timing, ); //<-The timeout method to check the remaining target's timing is just at the end of the set interval time.
    }
}
```
- Game Progression levels
    - Speed will increase over, course of the game. 
    - Target count will increase over, course of the game.
    - Create setInterval() function passing, it into game level selection once desired score is, reached.
```JavaScript
//Set this to increase progression speed add targets as you like here
// points needed for progression
let progressPoints = 200;
//Speed progression multiplier
// adds an object on progression
function gameProgress() {
    if (progressPoints == score.innerText && objectCount <= 12) {
        progressPoints = progressPoints + speedScore;
        speed = speed - 200;
        timing = speed - 100;
        objectCount++; //< adds one target once every point is set for progression
        let listen = objectCount - 1;
        setTimeout(() => {
            targets[listen].addEventListener('click', addClickEvent = () => {
                targets[listen].style.display = 'none';
                scoreCount = score.innerText;
                livesLogic();
            });
        }, 20);
    }
}
```
# [&#8686;](#Top)
## **Features**
![Here](project_files/features/feature.jpg)
### **The Game** 

`Start screen screenshot` [Here](project_files/features/desktop-home.PNG)
- The game 
    -  The Game Detects touch devices and sets difficulty accordingly
    -  Responsive works on most devices(desktop, mobile)
    -  It could be, resized, and it will recalculate the game area on the fly.
- Select Level
    - Player can select a difficulty level.
    - Mobile devices starting speed is faster than pointing, and target count
### **In Game** 

`In game screenshot` [here](project_files/features/desktop-ingame.PNG)
- Score counter 
    - Enables players to keep track of points when playing a game.
- Speed display
    -  Enables players to see current game speed in seconds.
- Lives Remaining
    - If a player misses the box target, you lose one life, but once a score of 50 has been, reached players will gain one life.
- Game-level-Up
    - Gain enough points in the game to enable a player to go up to a higher level.
    - Speed and target count are increasing throughout the game.
### **Game Information Popup** 

`Info popup screenshot` [Here](project_files/features/desktop-info.PNG)
- Game Help/instruction Pop-up
    - Enables players to look at game instructions on how to play the game.
    - 
### **Contact Bug report** 

`Contact page screenshot` [Here](project_files/features/contact-form.PNG)  
`Contact page screenshot submitted` [Here](project_files/features/form-after-submit.PNG)
- Contact/Bug report form
    - Bug report/feedback form for the user to contact if they encounter any glitches or bugs.
    - 
### **Game Over** 

`And game over screenshot` [Here](project_files/features/desktop-game-over.PNG)
- Links back to the landing page and bug report page.

# [&#8686;](#Top)
## **TESTING**
### **W3C Validation**
  The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- [W3C Markup Validator](project_files/validation/Html-Checker.PNG)
- [W3C CSS Validator](project_files/validation/W3C-CSS.PNG)
### **Future Testing**
I have tested the game on a variety of browsers such as  Chrome, Opera, Microsoft Edge, and Firefox desktop version browsers and Huawei p30 Pro chrome and android browser.

I have used Chrome DevTools to Test a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhone X for responsive design.

Friends and family members helped point out any bugs or issues.
### **User Stories Testing**
1. Information presented to understand the game rules is clear and easy to understand.
1. The game controls are clear and easy to use..
1. The game design is visually appealing and is user friendly.
1. To be able to select different levels depending on player skill level is great.
1. That the Game is available on mobile devices and or  pc's  is essential.
1. Bug report form is easy to understand and easy to use.
1. I have been advised to add more in-game variations, such as target timings.
### **Solved issues or bugs**
1. After adding a click event listener to the game window, all the children elements within the parent element were triggered.

    `Solution i wound on her https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli `
```javascript
    if (this === event.target) {
    }
```
***
2. Friends and family members pointed out that the game on Mobile devices was too slow.
     
     `To solve this, I have added touch device detection and for mobile devices I have added extra target and faster initial speed.`
```javascript
    if ('ontouchstart' in window) {
        speed = 2800;
        }
    } else {
        speed = 3000;
    }
```
***

3. After friends pointed out that it would be more interesting if in-game progression extra targets would spawn as you paly
     
     `My initial design was static targets so, To make this work, I had to redesign the target creation I used for-loop to create extra targets. And to add target listener, first listeners have to be removed then added for all squares just at the end of the set interval cycle`.
```javascript
// Add targets loop ndividual targets 
function objects() {
    for (let i = 0; i < objectCount; i++) {
        targets[i].style.display = 'block';
    }
}

//Add target event listeners to the targets in-game progress
function addTargetListeners() {
    for (let i = 0; i < objectCount; i++) {
        targets[i].addEventListener('click', clickEvent = () => {});
    }
}

// adds a target if set points are reached
 function gameProgress() {
    if (progressPoints == score.innerText && objectCount <= 12) {
        progressPoints = progressPoints + speedScore;
        speed = speed - 200;// Speed progression deduct 200ms. Can be set any value
        timing = speed - 100;
        objectCount++; // adds the target
        let listen = objectCount - 1;
        setTimeout(() => { // adds event listeners time out 
            targets[listen].addEventListener('click', addClickEvent = () => {
                targets[listen].style.display = 'none';
                scoreCount = score.innerText;
                livesLogic();
            });
        }, 20);// time out is set for 20 ms
    }
}
```
***

4. In landscape mode on mobile devices, some of elements were pushed out of the size of the screen.

    `I have solved this by disabling some of the elements using Media query is a CSS technique.`
```css
@media only screen and (max-height: 530px) {
    .elements {
        display: none
    }
}
```
***
5.  The issue with the progress bar no resetting in some cases and missed points not counting'

  `Added missed score counter++ to the loop to count missed points and added to deduct Life function resset to 0`
```javascript

// added to timing function missed score counter++ to the loop
            scoreMissed.innerText++;
            scoreMissed.innerText + livesCount;
// added to deduct Life function
              streak2 = 0;
              streak1 = 0;
            livesDivElement.style.width = '0';
```
***
5.  The issue with the Last life was not resetting if three targets was missed'

  `Added added resset color for three lives to the stop the game funcrion.`
```javascript
    lives[0].style.backgroundColor = 'oldlace';
    lives[1].style.backgroundColor = 'oldlace';
    lives[2].style.backgroundColor = 'oldlace';
```
# [&#8686;](#Top)
## **Technologies and Frameworks**
### **Languages**
- [HTML5](https://en.wikipedia.org/wiki/HTML5) Hypertext Markup Language (HTML)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) Cascading Style Sheets (CSS)
- [JavaScript](https://www.javascript.com/) Interactive functionality.

### **Frameworks Libraries and Programs**
- [Google Fonts:](https://fonts.google.com/) Making the web more beautiful.
- [Font Awesome:](https://fontawesome.com/) to add icons to the website.
- [Git](https://git-scm.com/) Git was used for version control.
- [GitHub:](https://github.com/) used to store the projects code.
- [gitpod.io](https://gitpod.io/) gitpod Was used for codding.
- [VS Code](https://code.visualstudio.com/) gitpod Was used for codding.

# [&#8686;](#Top)
## ***Deployment***
Source: https://docs.github.com/
### **Deploying on GitHub Pages**
1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
1. Locate the [GitHub Repository](https://github.com/Raivis80/)"Link to GitHub Repo".
1. In the GitHub repository, navigate to the Settings tab.
1. From the source section drop-down menu, select the Master Branch.
1. Upon selection, the page will automatically refresh meaning that the website is now deployed.
1. Under "GitHub Pages", select the GitHub Pages visibility drop-down menu, then click a visibility.
1. Now deploy it to GitHub Pages.
1. To see your published site, under "GitHub Pages", click your site's URL.

More Detailed information on GitHub Pages can be found here: [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site) "Link to GitHub docs"
### **Fork A repository**
A Fork is a coppy of repository allows you to freely experiment with changes without effecting the original project.
<br>Forking a repository is a simple two-step process.

1. On GitHub, navigate to The [GitHub Repository](https://github.com/Raivis80/)" Link to my Repo".
1. In the top-right corner of the page, click Fork.

Detailed Steps for forkig a repository from GitHub can be found here: [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
### **Creating a Clone**

You can clone reposetory. When you clone repository, you copy repository to your Machine.
<br>Locate the [GitHub Repository](https://github.com/Raivis80/)"Link to GitHub Repo".
<br>Steps for cloning a repository from GitHub can be found here: [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) "Link to GitHub docs"
# [&#8686;](#Top)
## ***Credits***
### **Code**

- Some of emailjs API code is reused of Code Institute Resume project. Thanks to Matt Rudge.
- Detect touchscreen devices [link here](https://hacks.mozilla.org/2013/04/detecting-touch-its-the-why-not-the-how/)
- Prevent click event trigger on child elements helped me to solve this Stackoverflow user abaz [link here](https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli)                     

### **Helpfull sites**
#### **Thanks To:**
-  [google.com](https://google.com/): Search for anything.
-  [stackoverflow.com](https://stackoverflow.com/): Useful website for code tips.
-  [www.w3schools](https://www.w3schools.com/): Examples of how to use HTML, CSS, JavaScript.
-  [developer.mozilla.org](https://developer.mozilla.org/): Examples of how to use HTML, CSS, JavaScript.
-  [css-tricks.com](https://css-tricks.com/): Useful CSS styling tips.
-  [developer.mozilla.org](https://developer.mozilla.org/):Used to source how to use JavaScript.
### **Acknowledgements**
- A huge thanks to Owonikoko Oluwaseun, My Mentor for continuous support and inspire me to push myself beyond where I think I can go.
- Tutor support at Code Institute for their support.

# [&#8686;](#Top)
