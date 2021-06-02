'use strict';

/*
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

const SecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const ModifyCss = function (reset) {
  !reset
    ? (document.querySelector('body').style.backgroundColor = '#222')
    : (document.querySelector('body').style.backgroundColor = '#60b347');

  !reset
    ? (document.querySelector('.number').style.width = '15rem')
    : (document.querySelector('.number').style.width = '30rem');
};

const displayMsg = function (idclass, message) {
  idclass === '.guess'
    ? (document.querySelector(idclass).value = message)
    : (document.querySelector(idclass).textContent = message);
};

let secretnum = SecretNumber();
let highscore = 0;
let score = 20;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnum = SecretNumber();
  ModifyCss(false);
  displayMsg('.message', 'Start guessing...');
  displayMsg('.guess', '');
  displayMsg('.score', score);
  displayMsg('.number', '?');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  //no input
  if (!guess) {
    displayMsg('.message', '⛔ No Number!');
  }
  //when player wins
  else if (Number(guess) === secretnum) {
    displayMsg('.message', '✅ Correct Number!');
    displayMsg('.number', secretnum);
    ModifyCss(true);

    if (score > highscore) {
      highscore = score;
      displayMsg('.highscore', highscore);
    }
  }
  //when guess is wrong
  else if (Number(guess) !== secretnum) {
    if (score > 1) {
      score--;
      displayMsg('.message', guess > secretnum ? '⚠ Too high!' : '⚠ Too low!');
      displayMsg('.score', score);
    } else {
      score = 0;
      displayMsg('.message', '❌ You lost the game!');
      displayMsg('.score', score);
    }
  }
});
