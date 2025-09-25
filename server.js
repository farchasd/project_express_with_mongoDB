const express = require("express");
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const expressLayout = require("express-ejs-layouts");
const app = express();
const port = process.env.port;
const mongoDb = process.env.MONGODB_URL;

// model import

const user = require("./model/product.js");

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

// API with MongoDB

app.get("/", () => {
  app.send();
});

app.listen(port, () => {
  console.log(`port now connected on ${port}`);
});
