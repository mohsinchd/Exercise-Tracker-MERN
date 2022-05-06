const express = require("express");
const Users = require("../Models/users.model");

const router = express.Router();

router.get("/", (req, res) => {
  Users.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json(err));
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  console.log(req.body);
  const newUser = new Users({ username });

  newUser
    .save()
    .then(() => res.json("User Successfully Added!"))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
