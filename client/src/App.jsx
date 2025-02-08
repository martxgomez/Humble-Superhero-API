//REACT
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'

//ROUTES



//STYLE
import './App.css'

function App() {

  return (
   <>
  <Routes>
  <Route
            path="/add-superhero"
            element={<Form superheroes={superheroes} setSuperheroes={setSuperheroes}/>}
          />
  </Routes>
   </>
  )
}

export default App
