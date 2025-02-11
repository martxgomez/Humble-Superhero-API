/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function SuperheroesPage({ superheroes }) {
  return (
    <div className="superheroes-page-main">
      <Link to="/add-superhero" className="form-btn">
        Add a superhero 🦸🏻
      </Link>

      {/* Here there is a problem when you create a new Superhero.
      After creating a new Superhero, you are redirected to this page. 
      However it has not been renderized for any reason. I need more time to solve it. 
      Nevertheless, this new superhero is being saved into the array, therefore that indicates is not a backend problem*/}
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
