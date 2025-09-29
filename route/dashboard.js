const express = require("express");
const app = express.Router();
const user = require("../model/product");

app.get("/", async (req, res) => {
  const User = await user.find();
  res.render("index", {
    title: "memberikan data user",
    layout: "layouts/mainLayout.ejs",
    data: User,
  });
});

app.get("/:id", async (req, res) => {
  const userId = await user.findById(req.params.id);

  res.render("detail", {
    title: "detail person",
    layout: "layouts/mainLayout.ejs",
    data: userId,
  });
});
module.exports = app;
