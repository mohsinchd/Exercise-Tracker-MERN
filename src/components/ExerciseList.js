import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => setExercises(response.data));
  }, [exercises]);

  const deleteExercise = async (id) => {
    const response = await fetch(`http://localhost:5000/exercises/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
      },
    });

    const result = await response.json();
    console.log(result);
    // axios
    //   .delete(`http://localhost:5000/${id}`)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>Exercise List</h3>

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => {
            return (
              <tr key={exercise._id}>
                <td>{exercise.username}</td>
                <td>{exercise.description}</td>
                <td>{exercise.duration}</td>
                <td>{exercise.date.substring(0, 10)}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => deleteExercise(exercise._id)}
                  >
                    Delete Exercise
                  </button>

                  <Link
                    to={`/edit/${exercise._id}`}
                    className="btn btn-success btn-sm"
                  >
                    Edit Exercise
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {exercises.length === 0 && (
        <h4 className="text-center">No Exercise has been added yet!</h4>
      )}
    </div>
  );
};

export default ExerciseList;
