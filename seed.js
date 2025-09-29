const mongoose = require("mongoose");
require("dotenv").config();
const mongoDb = process.env.MONGODB_URL;
mongoose
  .connect(mongoDb)
  .then((result) => {
    console.log(`mongo DB now connected `);
  })
  .catch((err) => {
    console.log(err);
  });

const user = require("./model/product");

const UserSeed = [
  {
    userName: "adminKU",
    passWord: "A085882118881",
    role: "admin",
  },
  {
    userName: "adminMu",
    passWord: "Aasadillah123",
    role: "admin",
  },
];

user
  .insertMany(UserSeed)
  .then((result) => {})
  .catch((err) => {
    console.log(err);
  });
