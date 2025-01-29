const Favourite = require("../models/Favourite");
const Home = require("../models/Home");

exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/index", {
      homes: registeredHomes,
      pageTitle: "Tumahara airbnb",
    });
  }).catch(err => {
    console.log("Error while fetching homes", err);
    res.redirect('/');
  });
};

exports.getHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/homes", {
      homes: registeredHomes,
      pageTitle: "Tumahara airbnb",
    });
  }).catch(err => {
    console.log("Error while fetching homes", err);
    res.redirect('/');
  });
};

exports.getFavourites = (req, res, next) => {
  Favourite.find().populate("homeId").then((favIdHomes) => {
    const favouriteHomes = favIdHomes.map((favIdHome) => favIdHome.homeId);
    res.render("store/favourites", {
      homes: favouriteHomes,
      pageTitle: "Favourites",
    });
  }).catch(err => {
    console.log("Error while fetching favourites", err);
    res.redirect('/');
  });
};

exports.postAddFavourites = (req, res, next) => {
  const homeId = req.body.id;
  const fav = new Favourite({ homeId });
  fav.save().then(() => {
    res.redirect("/favourites");
  }).catch(err => {
    console.log("Error while adding to favourites", err);
    res.redirect("/favourites");
  });
};

exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({ homeId }).then(() => {
    res.redirect("/favourites");
  }).catch(err => {
    console.log("Error while removing from favourites", err);
    res.redirect("/favourites");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeIdentity;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found");
      return res.redirect("/homes");
    }
    res.render("store/home-detail", { home: home, pageTitle: "Home Detail" });
  }).catch(err => {
    console.log("Error while fetching home details", err);
    res.redirect('/homes');
  });
};