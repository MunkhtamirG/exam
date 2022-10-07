const express = require("express");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const MONGO_SERVER = process.env.MONGO_SERVER;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const routes = require("./routes/v1");
app.use("/v1", routes);

mongoose.connect(MONGO_SERVER).then(() => {
  console.log("Connected to the MongoDB");
  app.listen(PORT, () => {
    console.log("Running at " + PORT);
  });
});
