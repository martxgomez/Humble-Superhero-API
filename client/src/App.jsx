//HOOKS
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";


//ROUTES
import SuperheroesForm from "./pages/SuperheroesForm";
import SuperheroesPage from "./pages/SuperheroesPage";

//DATA
const API_URL = "http://localhost:3000/superheroes";

//STYLE
import "./App.css";

function App() {
  const [superheroes, setSuperheroes] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(API_URL);
      setSuperheroes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <Router>
    <h1>Humble Superhero API</h1>
      <Routes>
        <Route
          path="/"
          element={
            <SuperheroesPage
              superheroes={superheroes}
              setSuperheroes={setSuperheroes}
            />
          }
        />
        <Route
          path="/add-superhero"
          element={
            <SuperheroesForm
              superheroes={superheroes}
              setSuperheroes={setSuperheroes}
            />
          }
        />
      </Routes>
      </Router>
    </>
  );
}

export default App;
