//IMPORTS
const express = require("express");
const Superhero = require("./Superhero.js");
const PORT = 3000;

const app = express();
app.use(express.json());

//ARRAY OF SUPERHEROES
const superheroesDB = [
  new Superhero("Superman", "Flight", 9),
  new Superhero("Batman", "Martial Arts", 8),
  new Superhero("Wonder Woman", "Super Strength", 10),
  new Superhero("Spiderman", "Wall-crawling", 7),
  new Superhero("Ironman", "Genius", 6),
  new Superhero("Hulk", "Super Strength", 10),
  new Superhero("Flash", "Speed", 8),
  new Superhero("Aquaman", "Aquatic Abilities", 7),
  new Superhero("Black Panther", "Enhanced Senses", 9),
  new Superhero("Thor", "Thunder Power", 8),
];

//ROUTES
app.get("/superheroes", (req, res) => {
  //Sort by humility score in descending order
  const sortedSuperheroes = superheroesDB.sort(
    (a, b) => b.humilityScore - a.humilityScore
  );
  res.json(sortedSuperheroes);
});

app.post("/superheroes", (req, res) => {
  const { name, superpower, humilityScore } = req.body;

  //Condition if name, superpower or humility score fields do not exist
  if (!name || !superpower || !humilityScore) {
    res.status(500).json({ error: "Failed to create the Superhero" });
  } else {
    const newSuperhero = new Superhero(name, superpower, humilityScore);
    superheroesDB.push(newSuperhero);
    res.status(201).json({
      message: "Superhero created sucessfully",
      superhero: newSuperhero,
    });
  }
});

//START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
