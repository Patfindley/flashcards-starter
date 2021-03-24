const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards);

    expect(Deck).to.be.a('function');
  });

  it('should be instantiated with an array of card objects', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards);

    expect(deck.cards).to.be.an('array');
  })

  it('should know how many cards are in the deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards);
    console.log(deck.cardsLength)
    expect(deck.cardsLength).to.equal(3);
  })

})
