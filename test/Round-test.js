const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round()

    expect(Round).to.be.a('function');
  })

  it('should have a method to return current card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards);

    const round = new Round(deck)

    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should have a method to update turns count', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');

    const cards = [card1, card2, card3];
    const deck = new Deck(cards);

    const round = new Round(deck)
    expect(round.turns).to.equal(0);
    round.takeTurn("3");
    expect(round.turns).to.equal(1);
  })

  it('takeTurn should move card.id to incorrect guesses array when incorrect', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');

    const cards = [card1, card2, card3];
    const deck = new Deck(cards);

    const round = new Round(deck);


    round.takeTurn('array');
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('takeTurn should return correct or incorrect properly', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');

    const cards = [card1, card2, card3];
    const deck = new Deck(cards);

    const round = new Round(deck);

    expect(round.takeTurn('function')).to.equal('Your answer of function is Incorrect!');
  });

  it('takeTurn should use the next card in deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(12, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const card3 = new Card(33, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');

    const cards = [card1, card2, card3];
    const deck = new Deck(cards);

    const round = new Round(deck);

    round.takeTurn('function');

    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);

    round.takeTurn('function');

    expect(round.returnCurrentCard()).to.equal(card3);
    expect(round.turns).to.equal(2);
  });

  it('calculatePercentCorrect should return percentage of correct answers', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');

    const cards = [card1, card2, card3];
    const deck = new Deck(cards);

    const round = new Round(deck);


    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.equal('%100');
    round.takeTurn('filter');
    expect(round.calculatePercentCorrect()).to.equal('%50');
    round.takeTurn('for loop');
    expect(round.calculatePercentCorrect()).to.equal('%33');

  });

  it('endRound method should return percentage of questions answered correctly', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');

    const cards = [card1, card2, card3];
    const deck = new Deck(cards);

    const round = new Round(deck);


    round.takeTurn('object');
    round.takeTurn('filter');
    round.takeTurn('for loop');
    expect(round.endRound()).to.equal('%33');

  });

})
