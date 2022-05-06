import React, { useState } from "react";
import axios from "axios";
const CreateUser = () => {
  const [userName, setUserName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: userName,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Enter Username: </label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" value={userName} className="btn btn-primary mt-2">
          Create New User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
