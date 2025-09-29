const express = require("express");
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const expressLayout = require("express-ejs-layouts");
const { urlencoded } = require("body-parser");
const app = express();
const port = process.env.port;
const mongoDb = process.env.MONGODB_URL;

// MongoDB Connection
mongoose
  .connect(mongoDb)
  .then((result) => {
    console.log(`mongo DB now connected `);
  })
  .catch((err) => {
    console.log(err);
  });

// configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayout);
app.use(express.urlencoded({ extended: true }));

// API with MongoDB
app.use("/register", require("./route/register"));
app.use("/login", require("./route/login"));
app.use("/dashboard", require("./route/dashboard"));

//
app.use((req, res) => {
  res.status(404).send("not found");
});
``;
app.listen(port, () => {
  console.log(`port now connected on ${port}`);
});
