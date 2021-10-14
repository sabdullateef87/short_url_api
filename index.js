require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4500;
const connectDB = require("./src/db");
const urlrouter = require("./src/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDB();

app.use(urlrouter);
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
