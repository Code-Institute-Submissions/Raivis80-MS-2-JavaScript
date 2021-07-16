//-------------------------------CONTACT PAGE-------------------------------------|
const contactWindow = document.getElementById('contact_window');
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
        document.getElementById('submit').style.backgroundColor = 'green';
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
                document.getElementById('submit_alert').innerHTML = `<p>${contactForm.name.value}. 
                Your message has been sent successfully. <span style="color: #555">"${contactForm.gameBugReport.value}"</span> Thank You! </p>`;
                //Change submit lolout for user to see if this was sent
                document.getElementById('submit').style.backgroundColor = 'rgb(153, 153, 17)';
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