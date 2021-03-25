
class Deck {
  constructor(cards) {
    this.cards = cards;
    this.cardsLength = cards.length;
  }

  countCards() {
    return this.cards.length;
  }

}

module.exports = Deck;
