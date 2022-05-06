const express = require("express");
const Exercises = require("../Models/exercise.model");

const router = express.Router();

// Get All the exercises

router.get("/", (req, res) => {
  Exercises.find()
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(400).json(err));
});

// Post a exercise

router.post("/add", (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const exercise = new Exercises({
    username,
    description,
    duration,
    date,
  });
  exercise
    .save()
    .then(() => res.status(200).json("Exercise is Added Successfully"))
    .catch((err) => res.status(400).json(err));
});

// Get Single Exercise

router.get("/:id", (req, res) => {
  Exercises.findById(req.params.id)
    .then((exercise) => res.status(200).json(exercise))
    .catch((err) => res.status(400).json(err));
});

// Delete Exercise

router.delete("/:id", (req, res) => {
  Exercises.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Exercise Deleted Successfully"))
    .catch((err) => res.status(400).json(err));
});

// Update the exercise

router.post("/update/:id", (req, res) => {
  Exercises.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.date = Date.parse(req.body.date);
      exercise.duration = Number(req.body.duration);

      exercise
        .save()
        .then(() => res.status(200).json("Exercise Updated Successfully"))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
