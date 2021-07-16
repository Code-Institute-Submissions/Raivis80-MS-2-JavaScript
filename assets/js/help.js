//--------------------------HELP--INFO-POP-Up------------------------------------|
const helpElement = document.getElementById('help');
helpElement.style.display = 'none'

// info popup 
function infoPopout() {

    const gameHelp = document.getElementById('game_help');
    document.getElementById('info').style.display = 'none';
    helpElement.style.display = 'flex';
    gameHelp.style.display = 'block';
    //Info popup transition
    setTimeout(function () {
        helpElement.style.transition = 'margin-top 1s cubic-bezier(.36,1.27,1,.49)';
        helpElement.style.marginTop = '290px';
        gameHelp.style.transition = 'bottom 1s cubic-bezier(.36,1.27,1,.49)';
        gameHelp.style.bottom = '8%';
    }, 100);

    //set timeout for closing info popout
    setTimeout(() => {
        //add click listener for closing popup
        document.getElementById('start_game').addEventListener('click', removeI = () => {

            document.getElementById('info').style.display = 'block';
            helpElement.style.marginTop = '0px';
            gameHelp.style.bottom = '-100%';

            //set Interval function for removing listener
            setTimeout(function () {
                helpElement.style.display = 'none';
                gameHelp.style.display = 'none';
                document.getElementById('start_game').removeEventListener('click', removeI)
            }, 500);
        });
    }, 100);

}