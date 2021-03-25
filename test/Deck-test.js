const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  let card1, card2, card3, cards, deck, round;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');
    cards = [card1, card2, card3]
    deck = new Deck(cards);
  });

  it('should be a function', function() {

    expect(Deck).to.be.a('function');
  });

  it('should be instantiated with an array of card objects', function() {

    expect(deck.cards).to.be.an('array');
  })

  it('should know how many cards are in the deck', function() {

    expect(deck.cardsLength).to.equal(3);
  })

})
