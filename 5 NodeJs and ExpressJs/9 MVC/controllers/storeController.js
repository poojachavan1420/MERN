const Home = require("../models/Home");

exports.getHome = (req, res, next) => {
  const homes = Home.fetchAll();
  res.render("index", { homes: homes, pageTitle: "Tumahara airbnb" });
};