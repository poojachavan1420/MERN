const mongoose = require("mongoose"); // External Module
const Schema = mongoose.Schema;

const homeSchema = new mongoose.Schema({
  houseName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

homeSchema.pre('findByIdAndDelete', (next) => {
  console.log(this.getQuery());
  const homeId = this.getQuery()["_id"];
  console.log(homeId);
 Favourite.findOneAndDelete({homeId});
 console.log("Favourite deleted");
  next();
}).catch((error) => {
  console.log("Error while remove from favourites ", error);
  res.redirect("/favourites");
});

module.exports = mongoose.model("Home", homeSchema);

// module.exports = class Home {
//   constructor(houseName, price, location, rating, photoUrl, description, _id) {
//     this.houseName = houseName;
//     this.price = price;
//     this.location = location;
//     this.rating = rating;
//     this.photoUrl = photoUrl;
//     this.description = description;
//     if (_id) {
//       this._id = new ObjectId(String(_id));
//     }
//   } 
// };

