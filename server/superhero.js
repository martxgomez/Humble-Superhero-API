class Superhero {
    constructor(name, superpower, humilityScore) {
      this.name = name;
      this.superpower = superpower;
      this.humilityScore = humilityScore;
    }
    get humilityScore() {
      return this._humilityScore;
    }
  
    set humilityScore(score) {
      if (score < 1) {
        throw new Error("Error: Humility score cannot be less than 1");
      } else if (score > 10) {
        throw new Error("Error: Humility score cannot be greater than 10");
      } else {
        this._humilityScore = score;
      }
    }
  }
  
  module.exports = Superhero;
  