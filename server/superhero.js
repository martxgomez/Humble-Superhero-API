
//EXPLANATION
//I usually work with Mongoose Models, so I thought the best idea to optimise it was to create a class for Superhero. 


class Superhero {
  constructor(name, superpower, humilityScore, id) {
    this.name = name;
    this.superpower = superpower;
    this.humilityScore = humilityScore;
    this.id = id;
  }

  //Getter to return the limited variable
  get humilityScore() {
    return this._humilityScore;
  }

  //Setter to limite the score between 1 and 10.
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
