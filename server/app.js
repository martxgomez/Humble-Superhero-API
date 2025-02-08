//IMPORTS
const express = require("express");
const Superhero = require("./Superhero)");

const app = express();

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
    new Superhero("Thor", "Thunder Power", 8)
  ];

  

