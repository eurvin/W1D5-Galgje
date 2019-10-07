document.addEventListener('DOMContentLoaded', function(event) {

  // word & letters
  const words = ['programmeren', 'javascript', 'slack', 'tutorials', 'github',
    'samenwerken', 'studeren', 'browser', 'terminal'
  ];

  // create a new array of letters with a random word from words array
  const wordArray = Array.from(words[Math.random() * words.length | 0]);

  // array to store incorrectly guessed letters
  let lettersArray = [];

  // set total lives & get element to display
  let lives = 5;
  let liveElement = document.getElementById("lives");

  // array to play game with starting with underscores
  const tryArray = wordArray.map(letter => letter = '_');

  // Display tryArray in 2nd <h4> element
  const letterDisplay = function(tryArray) {
    document.querySelector('.answer h4:nth-child(2)').innerHTML = `${tryArray.join(' ')}`;
  };

  //invoke letterDisplay at start
  letterDisplay(tryArray);

  // Update liveElement
  const updateLives = (lives) => {
    if (lives <= 0) {
      liveElement.innerHTML = `Game over! You have no lives remaining.
      The right word was ${wordArray.join('')}!
      Press the restart button to play again!`;
    } else if (lives == 'win') {
      liveElement.innerHTML = `You have won the game! Good job!
      Press the restart button to play again!`;
      alert('We have a winner!');
    } else if (lives == 'input') {
      liveElement.innerHTML = `You have ${lives} lives remaining.
      You have tried <b>${lettersArray.join(' ')}</b>`;
      alert('Alleen letters a.u.b.!');
    } else {
      liveElement.innerHTML = `You have ${lives} lives remaining.
      You have tried <b>${lettersArray.join(' ')}</b>`;
    }
  };

  // Invoke lives text at start
  updateLives(lives);

  // Restart the Game
  const restartButton = document.getElementById("restart").addEventListener('click', function() {
    location.reload();
  });

  // Get letter from input
  const guessButton = document.getElementById("guess").addEventListener('click', function() {
    let letter = document.getElementById("try").value;
    livesLeft(letter);
  });

  // Check lives
  const livesLeft = function(letter) {
    if (lives > 0) {
      checkInput(letter);
    } else {
      updateLives(lives);
    }
  };

  // check if given input is a letter or not
  const checkInput = function(letter) {
    let regex = /[a-zA-Z]/;
    regex.test(letter);
    if (regex.test(letter) == true) {
      checkLetter(letter);
    } else {
      lives--;
      updateLives('input');
      updateLives(lives);
    };
  };

  // check if letter is correct
  const checkLetter = function(letter) {
    if (wordArray.includes(letter) == false) {

      // subtract 1 lives + update letters on screen
      lives--;
      if (lettersArray.includes(letter) == false) {

        lettersArray.push(letter);
        updateLives(lives);
      };
    } else {

      // change letter in tryArray if found in wordArray
      let i = 0;
      tryArray.map(function(x) {
        if (wordArray[i] == letter) {
          tryArray[i] = letter;
          i++;
        } else {
          i++;
        }
      })
      letterDisplay(tryArray);
      checkWin(tryArray);
    };
  };

  // check if game is won and display message + alert
  const checkWin = function(tryArray) {
    if (wordArray.join('') == tryArray.join('')) {
      updateLives('win');
    };
  };

});
