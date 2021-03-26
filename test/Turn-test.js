const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function!', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with two arguments', function() {
    const card = new Card(4, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const turn = new Turn('guess', card);

    expect(turn).to.have.property('guess');
  });

  it('returnGuess method should return players guess', function() {
    const card = new Card(4, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const turn = new Turn('forEach', card);

    expect(turn.returnGuess()).to.equal('forEach');
  });

  it('returnCard method should return card', function() {
    const card = new Card(4, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const turn = new Turn('forEach', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('evaluateGuess should return true if guess matches correct answer', function() {
    const card = new Card(4, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const turn1 = new Turn('forEach', card);
    const turn2 = new Turn('febtober', card);

    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('giveFeedback should returns "Correct!" if guess matches correct answer, and "Incorrect" if not', function() {
    const card = new Card(4, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const turn1 = new Turn('forEach', card);
    const turn2 = new Turn('febtober', card);

    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

})
