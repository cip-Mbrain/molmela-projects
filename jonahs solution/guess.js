let secretNum = Math.floor(Math.random() * 20) + 1;

let score = 5;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = parseInt(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('Not a Number');

    // when player wins
  } else if (guess === secretNum) {
    displayMessage('🎉 Correct Guess');
    document.querySelector('body').style.background = '#60b347';
    displayNumber(secretNum);
    // highScore
    if (score > highScore) {
      highScore = score * 10;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when the guess is wrong
  } else if (guess !== secretNum) {
    if (score > 1) {
      score--;
      displayScore(score);

      displayMessage(guess > secretNum ? 'Guess to High' : 'Guess to Low');
    } else {
      displayMessage(`U've Lost`);
      displayScore(0);
    }
  }
});

// game reset
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.background = '#fff';
  displayNumber('?');
  document.querySelector('.guess').value = '';
  displayMessage('start guessing....');
  score = 5;
  secretNum = Math.floor(Math.random() * 20) + 1;
  displayScore(score);
});
