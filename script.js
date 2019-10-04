document.addEventListener('DOMContentLoaded', function (event) {
        const words = ['programmeren', 'javascript', 'slack', 'tutorials', 'github', 'samenwerken',
        'studeren', 'browser', 'terminal'];

    const word = words[Math.random() * words.length | 0];

    console.log(word);

    let lives = 5;
    console.log(lives);
    let liveElement = document.getElementById("lives");
    console.log(liveElement);
    liveElement.innerHTML = "you have " + lives + " lives remaining";
    console.log(liveElement);

    const guess= document.getElementsByClassName("guess")
    guess.addEventListener('click', function () {
        if (/*letter zit niet in woord*/) {
            lives--;
        } else if (lives === 0) {
            alert("Game Over!");
        } else {
            //letter verschijnt op scherm
        };
    });





});