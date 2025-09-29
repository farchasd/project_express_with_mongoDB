const express = require("express");
const app = express.Router();
const user = require("../model/product");
const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
  res.render("login", { title: "login", layout: "layouts/mainLayout.ejs" });
});

app.post("/", async (req, res, next) => {
  const { userName, passWord } = req.body;

  if (!userName || !passWord) {
    res.redirect("/login");
  }
  const findData = await user.findOne({ userName });
  const comparePassword = await bcrypt.compare(passWord, findData.passWord);
  console.log(findData);
  if (!findData) {
    res.redirect("/");
  } else {
    if (!comparePassword) {
      res.redirect("/");
    } else {
      if (findData.role === "user") {
        res.redirect("/dashboard");
      } else if (findData.role === "admin") {
        res.redirect("/admin");
      }
    }
  }
});

module.exports = app;
