'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const Player0El = document.querySelector('.player--0');
const Player1El = document.querySelector('.player--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore;
let activePlayer;
let IsGamePlaying;
let scores;

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  IsGamePlaying = true;
  scores = [0, 0];

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  Player0El.classList.add('player--active');
  Player1El.classList.remove('player--active');
  Player0El.classList.remove('player--winner');
  Player1El.classList.remove('player--winner');
};

const SwithPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  Player0El.classList.toggle('player--active');
  Player1El.classList.toggle('player--active');
};

init();

btnRoll.addEventListener('click', function () {
  if (IsGamePlaying) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      SwithPlayer();
    }
  }

  console.log(current0El);
});

btnHold.addEventListener('click', function () {
  if (IsGamePlaying) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      IsGamePlaying = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      SwithPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
