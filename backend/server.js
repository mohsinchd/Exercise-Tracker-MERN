const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const exerciseRoutes = require("./Routes/exerciseRoutes");
const userRoutes = require("./Routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/exercises", exerciseRoutes);
app.use("/users", userRoutes);

// Connecting to the Database

const URI = process.env.ATLAS_URI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to the Database"))
  .catch((err) => console.log(err.message));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is Listening on the PORT ${port}`);
});
