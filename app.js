const check = document.querySelector('#check');
const inputValue = document.querySelector('#input');
const message = document.querySelector('.message');
const reload = document.querySelector('#reload');
const myScore = document.querySelector('.score');
const highScore = document.querySelector('.high-score');

let randNum = Math.trunc(Math.random() * 100) + 1;
let score = 6;
let newScore = 0;

check.addEventListener('click', function () {
  const guess = Number(inputValue.value);

  // when guess is not a number
  if (!guess) {
    displayMessage('Not a Number');

    // when guess is correct
  } else if (guess === randNum) {
    displayMessage('🎉Correct Guess!!');
    message.classList.add('correct');
    // highScore
    if (score > newScore) {
      newScore = score;
      highScore.textContent = newScore;
    }

    // when guess is wrong
  } else if (guess !== randNum) {
    if (score > 1) {
      displayMessage(guess > randNum ? 'Guess to High' : 'Guess to low');
      score--;
      myScore.textContent = score;
    } else {
      displayMessage(`you've lost try again`);
      myScore.textContent = 0;
      message.classList.add('wrong');
    }
  }
  // else if (guess > randNum) {
  //   if (score > 1) {
  //     displayMessage('Guess to High');
  //     score--;
  //     myScore.textContent = score;
  //   } else {
  //     displayMessage(`you've lost try again`);
  //     myScore.textContent = 0;
  //     message.classList.add('wrong');
  //   }
  // } else if (guess < randNum) {
  //   if (score > 1) {
  //     displayMessage('Guess to low');
  //     score--;
  //     myScore.textContent = score;
  //   } else {
  //     displayMessage(`you've lost try again`);
  //     myScore.textContent = 0;
  //     message.classList.add('wrong');
  //   }
  // }
});

// reset game
reload.addEventListener('click', () => {
  displayMessage('Guess Now');
  inputValue.value = '';
  score = 6;
  myScore.textContent = score;
  randNum = Math.trunc(Math.random() * 100) + 1;
});

const displayMessage = (inputMessage) => {
  message.textContent = inputMessage;
};
