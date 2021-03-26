const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  let card1, card2, card3, cards, deck, round;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');
    cards = [card1, card2, card3]
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', function() {
    const round = new Round()

    expect(Round).to.be.a('function');
  })

  it('should have a method to return current card', function() {

    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should have a method to update turns count', function() {

    expect(round.turns).to.equal(0);
    round.takeTurn("3");
    expect(round.turns).to.equal(1);
  })

  it('takeTurn should move card.id to incorrect guesses array when incorrect', function() {

    round.takeTurn('array');
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('takeTurn should return correct or incorrect properly', function() {

    expect(round.takeTurn('function')).to.equal('Your answer of function is Incorrect!');
  });

  it('takeTurn should use the next card in deck', function() {

    round.takeTurn('function');

    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);

    round.takeTurn('function');

    expect(round.returnCurrentCard()).to.equal(card3);
    expect(round.turns).to.equal(2);
  });

  it('calculatePercentCorrect should return percentage of correct answers', function() {

    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.equal('You got 100% correct!');
    round.takeTurn('filter');
    expect(round.calculatePercentCorrect()).to.equal('You got 50% correct!');
    round.takeTurn('for loop');
    expect(round.calculatePercentCorrect()).to.equal('You got 33% correct!');

  });

  it('endRound method should return percentage of questions answered correctly', function() {

    round.takeTurn('object');
    round.takeTurn('filter');
    round.takeTurn('for loop');
    expect(round.endRound()).to.equal('You got 33% correct!');

  });

})
