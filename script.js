document.addEventListener('DOMContentLoaded', function (event) {
    const words = ['programmeren', 'javascript', 'slack', 'tutorials', 'github', 'samenwerken',
        'studeren', 'browser', 'terminal'
    ];

    const word = words[Math.random() * words.length | 0];
    console.log(word);

    const letters = Array.from(word);
    console.log(letters);
    console.log(letters.length);
    // let letter = document.querySelector('.answer h4:nth-child(2)');
    //
    // letters.forEach(function(letter) {
    //
    //   letter.innerHTML = "<span>1</span>";
    //   console.log(letter);
    // });


    let lives = 5;
    console.log(lives);
    let liveElement = document.getElementById("lives");
    console.log(liveElement);
    liveElement.innerHTML = "you have " + lives + " lives remaining";
    console.log(liveElement);


const restartButton= document.getElementById("restart")
restartButton.addEventListener('click', function(){location.reload();
});


    const guessButton = document.getElementById("guess")
    guessButton.addEventListener('click', function () {
        if (true) { //letter zit niet in het woord
            lives--;
            console.log();
        } else if (lives === 0) {
            alert("Game Over!");
        } else {
            //letter verschijnt op scherm
        };
    });





});
