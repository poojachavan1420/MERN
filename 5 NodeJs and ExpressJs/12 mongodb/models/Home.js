const { ObjectId } = require("mongodb");
const { getDb } = require("../util/database-util");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, _id) {
   
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    if (_id) {
      this._id = new ObjectId(String(_id));
    }
  }

  save() {
    const db = getDb();
    if (this._id) { // update
      console.log('Updating home', this);
      return db.collection("homes").updateOne({_id: this._id}, {$set: this})
      .then(home => {
        console.log(home);
        return home;
      })
      .catch(error => {
        console.log('Error while updating home', error);
      });
    } else { // insert
      console.log('Inserting home', this);
      return db.collection("homes").insertOne(this)
      .then(home => {
        console.log(home);
        return home;
      })
      .catch(error => {
        console.log('Error while inserting home', error);
      });
    }
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('homes').find().toArray();
  }

  static findById(homeId) {
    const db = getDb();
    return db.collection('homes').find({_id: new ObjectId(String(homeId))}).next()
    .then(home => {
      console.log(home);
      return home;
    })
    .catch(error => {
      console.log('Error while fetching home by id', error);
    });
  }

  static deleteById(homeId) {
    const db = getDb();
    return db.collection('homes').deleteOne({_id: new ObjectId(String(homeId))});
  }
};