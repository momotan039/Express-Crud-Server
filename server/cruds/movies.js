const express = require("express");
const router = express.Router();

const movies = [
  {
    type: "Ps1",
    price: 35,
    title: "Air Hockey (Hooockey!!)",
    year: 2003,
    backGround:
      "https://romsfun.com/wp-content/uploads/2019/08/Air-Hockey-0-300x300.jpg",
    id: "5",
  },
  {
    type: "Ps3",
    price: 35,
    title: "Honoo no Ryourinin – Cooking Fighter Hao",
    year: 1998,
    backGround: "https://romsfun.com/wp-content/uploads/2019/09/SLPS-01382.jpg",
    id: "6",
  },
];

router.get("/", (req, res) => {
  res.send(movies);
});

module.exports = router;
