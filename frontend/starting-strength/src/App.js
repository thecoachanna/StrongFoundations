import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import "./index.css";

// pages + components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TrainingTips from "./pages/TrainingTips";

function App() {
  const [ exercises, setExercises  ] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4000/workouts/')
    .then( res => res.json())
    .then( exercise => setExercises(exercise))
  }, [])
  
  console.log(exercises)

  return (
    <div className="App">
      
        <Navbar />
            <Routes>
              <Route path='/workouts' element={<Home exercises={exercises} />} />
              <Route path='/workouts/trainingtips' element={ <TrainingTips />} />
            </Routes>
      
    </div>
  );
}

export default App;
