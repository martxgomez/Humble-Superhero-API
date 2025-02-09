/* eslint-disable react/prop-types */
import "./SuperheroesPage.css";

function SuperheroesPage({ superheroes }) {
  return (
    <div className="superheroes-page-main">
      {superheroes.map((superhero,index) => {
        return (
          <div className="superhero-card" key={index}>
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
