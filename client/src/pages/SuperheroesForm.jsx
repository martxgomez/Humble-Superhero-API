/* eslint-disable react/prop-types */

//HOOKS
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//STYLE
// import "./SuperheroesForm.css";

function SuperheroesForm({ superheroes, setSuperheroes }) {
  //Variables creation
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState(0);

  //Hook creation to navigate
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault(); //to prevent form behavior from reloading the page

    const newSuperhero = {
      name,
      superpower,
      humilityScore,
    };

    try {
      await axios.post("http://localhost:3000/superheroes", newSuperhero);
      const response = await axios.get("http://localhost:3000/superheroes");

      setSuperheroes([...superheroes, response.data.superhero]);

      //Redirect to main page
      navigate("/");
    } catch (error) {
      console.error("Error creating superhero:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Create a new Superhero</h2>

        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          id="name"
          type="text"
        />

        <label htmlFor="superpower">Superpower:</label>
        <input
          onChange={(e) => {
            setSuperpower(e.target.value);
          }}
          value={superpower}
          id="superpower"
          type="text"
        />
        <label htmlFor="humilityScore">Humility Score:</label>
        <input
          id="humility-score"
          onChange={(e) => setHumilityScore(Number(e.target.value))}
          value={humilityScore}
          type="number"
          min="1"
          max="10"
        />

        <button className="submit-btn" type="submit">
          Add Superhero
        </button>
      </div>
    </form>
  );
}
export default SuperheroesForm;
