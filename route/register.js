const express = require("express");
const bcrypt = require("bcrypt");
const app = express.Router();
const user = require("../model/product");

// import user

app.get("/", (req, res) => {
  res.render("register", { title: "register user", layout: "layouts/mainLayout.ejs" });
});

app.post("/", async (req, res) => {
  const { userName, passWord } = req.body;

  if (!userName || !passWord) {
    return res.redirect("/register");
  }
  const dataExist = await user.findOne({ userName });
  const hashPassword = await bcrypt.hash(passWord, 10);

  if (dataExist) {
    return res.redirect("/register");
  } else {
    const User = new user({
      userName: userName,
      passWord: hashPassword,
      role: "user",
    });
    await User.save();
    res.redirect("/login");
  }
});
module.exports = app;
