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

const user = require("./model/product.js");

const UserSeed = [
  {
    name: "Kemeja Flanel",
    brand: "Hollister",
    price: 750000,
    color: "biru muda",
    size: "L",
  },
  {
    name: "Celana Chino",
    brand: "Levi's",
    price: 900000,
    color: "krem",
    size: "S",
  },
  {
    name: "Sweater",
    brand: "Gap",
    price: 650000,
    color: "merah muda",
    size: "S",
  },
];

user
  .insertMany(UserSeed)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
