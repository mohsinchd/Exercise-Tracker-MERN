import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="container">
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<ExerciseList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
