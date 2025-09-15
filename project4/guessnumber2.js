'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const submit = document.querySelector('#subt');
  const userInput = document.querySelector('#guess-number');
  const guessesSpan = document.querySelector('.guesses');
  const remainingSpan = document.querySelector('.lastresult');
  const lower = document.querySelector('.lower');
  const startover = document.querySelector('.result-paras');

  if (!submit || !userInput || !guessesSpan || !remainingSpan || !lower || !startover) {
    console.error('Missing DOM elements:', { submit, userInput, guessesSpan, remainingSpan, lower, startover });
    return;
  }

  const MAX = 10;
  let random = Math.floor(Math.random() * 100) + 1; // 1..100
  let numGuess = 0;
  let prevGuess = [];
  let play = true;

  // initialize UI
  remainingSpan.textContent = String(MAX);
  console.log('Game ready. random =', random);

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (!play) return;
    handleGuess(userInput.value);
  });

  function handleGuess(value) {
    const raw = String(value).trim();
    const guess = parseInt(raw, 10);
    console.log('handleGuess -> raw:', raw, 'parsed:', guess);

    if (raw === '') {
      setMessage('Please enter a number');
      return;
    }
    if (Number.isNaN(guess)) {
      setMessage('Please enter a valid number');
      return;
    }
    if (guess < 1 || guess > 100) {
      setMessage('Please enter a number between 1 and 100');
      return;
    }

    // store guess and update counts
    prevGuess.push(guess);
    numGuess++;
    updateGuesses();

    // check result
    checkGuess(guess);
  }

  function updateGuesses() {
    guessesSpan.textContent = prevGuess.join(' ');
    remainingSpan.textContent = String(MAX - numGuess);
    userInput.value = '';
  }

  function setMessage(msg) {
    lower.textContent = msg;
  }

  function checkGuess(guess) {
    console.log('checkGuess:', guess, 'random:', random, 'numGuess:', numGuess);
    if (guess === random) {
      setMessage('You guessed it right!');
      endGame(true);
      return;
    }

    if (numGuess >= MAX) {
      setMessage(`Game over — number was ${random}`);
      endGame(false);
      return;
    }

    setMessage(guess > random ? 'Number is too high' : 'Number is too low');
  }

  function endGame(won) {
    play = false;
    userInput.setAttribute('disabled', 'true');

    // create new game button if not present
    if (!document.querySelector('#newgame')) {
      const btn = document.createElement('button');
      btn.id = 'newgame';
      btn.className = 'button';
      btn.textContent = 'Start New Game';
      startover.appendChild(btn);
      btn.addEventListener('click', resetGame);
    }
  }

  function resetGame() {
    random = Math.floor(Math.random() * 100) + 1;
    numGuess = 0;
    prevGuess = [];
    play = true;
    guessesSpan.textContent = '';
    remainingSpan.textContent = String(MAX);
    lower.textContent = '';
    userInput.removeAttribute('disabled');
    userInput.value = '';
    const btn = document.querySelector('#newgame');
    if (btn) btn.remove();
    userInput.focus();
    console.log('Game reset. new random =', random);
  }
});