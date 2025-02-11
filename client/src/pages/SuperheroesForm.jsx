/* eslint-disable react/prop-types */

//HOOKS
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function SuperheroesForm({ setSuperheroes }) {
  //Variables creation
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState(0);

  //Hook to navigate
  const navigate = useNavigate();

  async function handleSubmit(event) {
    //To prevent form behavior from reloading the page
    event.preventDefault(); 

    const newSuperhero = {
      name,
      superpower,
      humilityScore,
    };

    try {
      await axios.post("http://localhost:3000/superheroes", newSuperhero);
      const response = await axios.get("http://localhost:3000/superheroes");
      console.log(newSuperhero)

      setSuperheroes((prev)=>[...prev, response.data.superhero]);
      console.log(response.data)

      //Redirect to main page
      navigate("/superheroes");
    } catch (error) {
      console.error("Error creating superhero:", error);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <h2>Create a new Superhero</h2>

        <section className="inputs">
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
        </section>
      </div>
    </form>
  );
}
export default SuperheroesForm;
