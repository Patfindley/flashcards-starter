const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
  }



  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`);
  }


  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cards = [];
    prototypeQuestions.forEach(cardObject => {
      let card = new Card(cardObject.id, cardObject.question, cardObject.answers, cardObject.correctAnswer);
      cards.push(card);
    })

    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

}

module.exports = Game;
