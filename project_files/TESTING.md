## **TESTING**

### Table of contents
1. [W3C Validation](#W3C-Validation)
1. [User Stories Testing](#User-Stories-Testing)
    - [User suggestions](#User-suggestions)
1. [Future Testing](#Future-Testing)
1. [Solved issues or bugs](#Solved-issues-or-bugs)
1. [Back to Readme.md](../README.md)

### **W3C Validation**
  The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- [W3C Markup Validator](project_files/validation/Html-Checker.PNG)
- [W3C CSS Validator](project_files/validation/W3C-CSS.PNG)

# [&#8686;](#Testing)
[Back to Readme.md](../README.md)
### **User Stories Testing**
1. Information presented to understand the game rules is clear and easy to understand.
1. The game controls are clear and easy to use..
1. The game design is visually appealing and is user friendly.
1. To be able to select different levels depending on player skill level is great.
1. That the Game is available on mobile devices and or  pc's  is essential.
1. Bug report form is easy to understand and easy to use.

- **User suggestions**
The following is added user suggested features after user testing

The user suggested having the game running faster on mobile devices as it was too slow but fast enough for larger screens.
- `I have Added touchscreen detection, for mobile devices starting speed is faster than pointing enabled devices.`

Another user suggested adding an extra target for mobile devices to make the gameplay faster
- `I also have added an extra starting target for mobile devices`

The user suggested having obstacles in the game that would make the game more challenging
- `And to make the game more exciting, I have added a black object to play that If a player misses the target,  one life will be deducted and a black object will spawn instead, if clicked, ends the game altogether. Black object will resset if 100 point streak reached.`

The user suggested reducing display size as for extra-large screens, the game area is too large
- `To solve this, I have added CSS property max-width for the game window`

The user suggested adding an automatic reply to a bug report.
`I have Enabled emailJS auto-reply to automatically send a reply to the user who submitted the email request.`

# [&#8686;](#Testing)
[Back to Readme.md](../README.md)
### **Future Testing**
I have tested the game on a variety of browsers such as  Chrome, Opera, Microsoft Edge, and Firefox desktop version browsers and Huawei p30 Pro chrome and android browser.

I have used Chrome DevTools to Test a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhone X for responsive design.

Friends and family members helped point out any bugs or issues.

# [&#8686;](#Testing)
[Back to Readme.md](../README.md)
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
//Progress multiplier
// adds a target if set points are reached
 function gameProgress() {
    if (progressPoints == score.innerText && objectCount <= 12) {
        progressPoints = progressPoints + speedScore;
        speed = speed - 200;// Substract 200ms of current speed
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

  `Added added reset color for three lives to the stop the game function.`
```javascript
    lives[0].style.backgroundColor = 'oldlace';
    lives[1].style.backgroundColor = 'oldlace';
    lives[2].style.backgroundColor = 'oldlace';
```

***
5.  Scorestreak counter was a delay in resetting indicator after missed target'

  `Added added Scorestreak counter reset innet text to the deductLife function.`
```javascript
    scoreStreak.innerText = 0;
```
***
6. Screen width  was extending infinetly for large monitors.

  `To solve this I have dded max-width for the game window.`
```css
.gameWindow {
    max-width: 1920px;
}
```
***
7. Users unable to detect if missed any target.

  `I have added miss target Flash efect for user to better detect unsuccessful click attempts`
  
```javascript
function missedEffect() {
    gameWindowElement.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    setTimeout(resetEffect, 20);
    function resetEffect(){
            gameWindowElement.style.backgroundColor = 'oldlace';
    }  
}
```
# [&#8686;](#Testing)
[Back to Readme.md](../README.md)