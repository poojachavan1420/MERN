const Home  = require("../models/Home");

exports.getAddHome =(req, res, next) => {
    res.render("host/add-home", {pageTitle: 'Host Your Home'});
  }

  
    exports.postAddHome = (req, res, next) => {
   const {houseName ,price,location,rating,photoUrl} = req.body;
   const newHOme = new Home(houseName, price, location, rating, photoUrl);   
    newHOme.save(error => {
     if(error)  {
      res.redirect('/');
     }else{
      res.render("host/home-added", {pageTitle: 'Home Hosted'});
     }
   
    });
  }

  

  