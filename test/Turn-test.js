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
  })

  it('should have method to return guess', function() {
    const card = new Card(4, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const turn = new Turn('guess', card)

    expect(turn.returnGuess).to.be.a('function');
  })

  it('returnGuess method should return players guess', function() {
    const card = new Card(4, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    const turn = new Turn('forEach', card);

    expect(turn.returnGuess()).to.equal('forEach');
  })
})
