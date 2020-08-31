'use strict';

//* challenge
// todo: _ _ _ <- guess letter
// todo: limit guesses = 0 ? gameover
// todo: create constuct func for game
// todo: setup two attributes - word + guesses allowed based on word
// todo: create two instances of it, print both to console

// * challenge pt 2
// todo: 1. set up word inst of prop as array of lower case chars
// todo: 2. set up inst of prop to store guessed letters < need to track letters guessed by user.
// todo: 3. create method where it returns the word puzzle back. < output guessed / current

// todo: no guesses -> ***
// todo: Guessed 'c', 'b' and 't' ? => c*t

//* challenge pt 3
// todo: accept char for guess
// todo: add unique guesses to list of guesses
// todo: decrement guesses left if char in word didn't match

//* challenge pt 4
// todo: Display output to browser
// todo: Display guesses remaining in browser
// todo: Seperate hangman def, move other code to app.js

//* challenge pt 5
// todo: set prop status - play/fin/failed
// todo: create method for calculating status
// todo: call method after guess
// todo: output the status
//! test -> make 2 incorrect = failed, test 2 -> 3 correct = finished

//* challenge pt 6
// todo: Disable new guesses unless 'playing';
// todo: new method to output a status message

// todo: playing -> show guesses remaining
// todo: failed -> 'Nice try -> it was this word
// todo: finished -> great job!
const Hangman = function (word, guessesLeft) {
  this.word = word.toLowerCase().split('');
  this.guessedChars = [];
  this.guessesLeft = guessesLeft; 
  this.gameStatus = 'playing'; // 'finished' 'failed'
}

Hangman.prototype.getPuzzle = function () {
  return this.word.map(char => {
    //! char === loop through this.guessChars and join as str so: 'c' === ['c'].join('') => 'c' === 'c'
    if (this.guessedChars.includes(char) || char.includes(' ')) {
      return char;
    } else {
      return '*';
    }
  }).join('');
}

Hangman.prototype.calculateStatus = function () {
  this.word.forEach(char => {
    if (this.guessedChars.includes(char)) {
      this.gameStatus = 'finished';
    } else if (this.guessesLeft > 0) {
      this.gameStatus = 'playing';
    } else {
      this.gameStatus = 'failed';
    }
  });
  console.log(this.gameStatus);
}

Hangman.prototype.makeGuess = function (char) {
  let guess = char.toLowerCase();
  let isGuessUnique = !this.guessedChars.includes(guess);
  let isPlaying = this.gameStatus == 'playing';
    // if char exists in guessArr then ignore
    if (isGuessUnique && this.guessesLeft > 0) {
      // add if char matches otherwise add incorrect guess and subtract by 1
      if (this.word.includes(guess)) {
        this.guessedChars.push(guess);
        // only make guesses if the game is in progress
      } else if (!this.word.includes(guess) && isPlaying) {
        this.guessedChars.push(guess);
        this.guessesLeft--;
      }
    }
    this.calculateStatus();
}

Hangman.prototype.gameProgress = function () {
  const isFinished = this.gameStatus === 'finished';
  const isPlaying = this.gameStatus === 'playing';
  const isGameover = this.gameStatus === 'failed';
  let output = '';
  
  if (isPlaying) {
    output = `Remaining guess${this.guessesLeft < 1 ? '' : 'es'}: ${this.guessesLeft}`;
  } else if (isFinished) {
    output = 'Well done!';
  } else {
    output = `Nice try, the word was ${this.word.join('')}`;
  }
  return output;
}








// let newGame = '';
// document.querySelector('button').addEventListener('click', (e) => {
//   let input = prompt('Enter new word to guess');
//   let guesses = parseInt(prompt('Enter num of guesses'));
//   if (input && guesses) {
//     newGame = new Hangman(input, guesses);
//   }
// })













// do {
  //   // prompt each time while guessesLeft > 0
  //   let myGuess = prompt("Guess char");
  //   // Check if guesses array does not contain the character already
  //   if (!this.guessedChars.includes(myGuess)) {
  //     // if myGuess contains character in the word - add else add and subtract by 1
  //     if (this.word.includes(myGuess)) {
  //       this.guessedChars.push(myGuess);
  //     } else  {
  //       this.guessedChars.push(myGuess);
  //       this.guessesLeft--;
  //       console.log('Remaining guesses ' + this.guessesLeft);
  //     }
  //   }
  // } while (this.guessesLeft > 0);