document.addEventListener('DOMContentLoaded', function (event) {

  // word & letters
  const words = ['programmeren', 'javascript', 'slack', 'tutorials', 'github',
  'samenwerken', 'studeren', 'browser', 'terminal'];

  // lives
  let lives = 5;
  let liveElement = document.getElementById("lives");

  // empty letters array
  let lettersArray = [];

  // select a word from words and create an array
  const wordArray = Array.from(words[Math.random() * words.length | 0]);

  // array to play game with
  const tryArray = wordArray.map(x => x = '_ ');

  // Insert letters/underscores via span elements
  const underScoreElements = function(x) {
    let underScore = document.querySelector('.answer h4:nth-child(2)');

    // remove letters/span element if present
    while (underScore.firstChild) {
      underScore.removeChild(underScore.firstChild);
    }

    // Add span element with content of array items
    tryArray.map(function(x) {
      let span = document.createElement("SPAN");
      span.innerHTML = `${x} `;
      underScore.appendChild(span);
    })
  };

  //invoke underscores at start
  underScoreElements(tryArray);

  // Update lives element
  const updateLives = (lives) => {
    if(lives <= 0) {
      liveElement.innerHTML = `Game over! You have no lives remaining.
      The right word was ${wordArray.join('')}!
      Press restart to play again!`;
    } else if(lives == 'win') {
      liveElement.innerHTML = `You have won the game! Good job!
      Press restart to play again!`;
    } else {
      liveElement.innerHTML = `You have ${lives} lives remaining.
      You have tried ${lettersArray.join(' ')}.`;
    }
  };

  // Invoke lives at start
  updateLives(lives);

  // Restart the Game
  const restartButton = document.getElementById("restart").addEventListener('click', function(){
    location.reload();
  });

  // Get letter from input
  const guessButton = document.getElementById("guess").addEventListener('click', function () {
    let letter = document.getElementById("try").value;
    livesLeft(letter)
  });


  // Check lives
  const livesLeft = function(letter) {
    if (lives > 0) {
      guessCheck(letter);
    } else {
      updateLives(lives)
    }
  };

  // check if letter is correct
  const guessCheck = function(letter) {
    if(wordArray.includes(letter) == false) {
      lives--;
      lettersArray.push(letter);
      updateLives(lives);
    } else {
      checkLetter(letter);
    }
  };

  // map letter against array items
  const checkLetter = function(letter) {
    let i=0;
    tryArray.map(function(x) {
      if(wordArray[i] == letter) {
        tryArray[i] = letter;
        underScoreElements(tryArray[i]);
        i++;
        checkWin(tryArray);
      } else {
        i++;
        underScoreElements(x);
      }
    })
  }

  // alert player if game is won
  const checkWin = function(tryArray) {
      if (wordArray.toString() == tryArray.toString()) {
        updateLives('win');
        alert('We have a winner!');
    }
  }

});
