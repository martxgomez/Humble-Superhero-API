import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SuperheroesForm.css";

function SuperheroesForm({ superheroes, setSuperheroes }) {
  //Variables creation
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState(0);

  //Hook creation to navigate
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault(); //to prevent form behavior from reloading the page

    const newSuperhero = {
      name,
      superpower,
      humilityScore,
    };

    setSuperheroes([...superheroes, newSuperhero]);

    //Redirect to main page
    navigate("/superheroes");
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

        <input
          id="humility-score"
          onChange={(e) => setHumilityScore(e.target.value)}
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
