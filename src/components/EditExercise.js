import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const EditExercise = () => {
  const { id } = useParams();
  const [exerciseData, setExerciseData] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  });

  //   const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/exercises/").then((response) => {
      if (response.data.length > 0) {
        setExerciseData((previousState) => {
          return {
            ...previousState,
            users: response.data.map((user) => user.username),
            username: response.data[0].username,
          };
        });
      }
    });

    axios.get(`http://localhost:5000/exercises/${id}`).then((response) => {
      setExerciseData((previousState) => {
        return {
          ...previousState,
          username: response.data.username,
          duration: response.data.duration,
          description: response.data.description,
          date: response.data.date,
        };
      });
    });
  }, []);

  const onChangeExerciseData = (e) => {
    const { value, name } = e.target;
    setExerciseData((previousState) => {
      return {
        ...previousState,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: exerciseData.username,
      description: exerciseData.description,
      duration: exerciseData.duration,
      date: exerciseData.date,
    };

    console.log(exercise);

    axios
      .post(`http://localhost:5000/exercises/update/${id}`, exercise)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location = "/";
  };

  return (
    <div>
      <h3>Update Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <select
            name="username"
            className="form-control"
            onChange={onChangeExerciseData}
            value={exerciseData.username}
            required
          >
            {exerciseData.users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            required
            onChange={onChangeExerciseData}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Duration (in minutes): </label>
          <input
            type="text"
            name="duration"
            required
            onChange={onChangeExerciseData}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Date: </label>
          <div>
            <input
              type="date"
              selected={exerciseData.date}
              onChange={onChangeExerciseData}
              className="form-control"
              name="date"
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Update Exercise Log"
            className="btn btn-primary mt-2"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
