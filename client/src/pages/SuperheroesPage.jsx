/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function SuperheroesPage({ superheroes }) {
  return (
    <div className="superheroes-page-main">
      <Link to="/add-superhero" className="form-btn">
        Add a superhero 🦸🏻
      </Link>
      {superheroes.map((superhero) => {
        return (
          <div className="superhero-card" key={superhero.id}>
            <h3>Name: {superhero.name}</h3>
            <h4>Superpower: {superhero.superpower}</h4>
            <h4>Humility Score: {superhero._humilityScore}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default SuperheroesPage;
