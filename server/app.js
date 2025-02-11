//IMPORTS
const express = require("express");
const cors = require("cors");
const Superhero = require("./Superhero.js");
const PORT = 3000;
const errorHandler = require("./error-handling/index.js");

const app = express();
app.use(express.json());
app.use(cors());

//ARRAY OF SUPERHEROES
const superheroesDB = [
  new Superhero("Superman", "Flight", 9, 1),
  new Superhero("Batman", "Martial Arts", 8, 2),
  new Superhero("Wonder Woman", "Super Strength", 10, 3),
  new Superhero("Spiderman", "Wall-crawling", 7, 4),
  new Superhero("Ironman", "Genius", 6, 5),
  new Superhero("Hulk", "Super Strength", 10, 6),
  new Superhero("Flash", "Speed", 8, 7),
  new Superhero("Aquaman", "Aquatic Abilities", 7, 8),
  new Superhero("Black Panther", "Enhanced Senses", 9, 9),
  new Superhero("Thor", "Thunder Power", 8, 10),
];

//ROUTES
app.get("/superheroes", (req, res) => {
  //Sort by humility score in descending order
  const sortedSuperheroes = superheroesDB.slice().sort(
    (a, b) => b.humilityScore - a.humilityScore
  );
  res.json(sortedSuperheroes);
});

app.post("/superheroes", (req, res) => {
  const { name, superpower, humilityScore } = req.body;

  //Condition if name, superpower or humility score fields do not exist
  if (!name || !superpower || !humilityScore) {
    res.status(400).json({ error: "Failed to create the Superhero" });
  } else {
    const newSuperhero = new Superhero(
      name,
      superpower,
      humilityScore,
      superheroesDB.length+1
    );

    superheroesDB.push(newSuperhero);
    res.status(201).json({
      message: "Superhero created sucessfully",
      superhero: newSuperhero,
    });
  }
});
app.get("/error", (req, res, next) => {
  next(new Error("Este es un error forzado"));
});

errorHandler(app);

//START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
