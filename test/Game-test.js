const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  it('should keep track of the current round', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');

    const cards = [card1, card2, card3]
    const deck = new Deck(cards);

    const round = new Round(deck);

    const game = new Game(round);

    expect(game.round).to.be.a('function');
  })
})
