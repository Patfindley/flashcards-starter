class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    console.log(this.guess);
    return this.guess;
  }
};


module.exports = Turn;
