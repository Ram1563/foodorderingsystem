const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const restaurantRoutes = require("./routes/restaurantRoutes");
const app = express();
const port = 3010;

const MONGODB_URI =
  "mongodb+srv://ram937gm:YJCGZLMEfIFN5HAy@cluster0.82qfdfo.mongodb.net/";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json());

app.use("/", restaurantRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
