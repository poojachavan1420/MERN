const { ObjectId } = require("mongodb");
const { getDb } = require("../util/database-util");

module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = new ObjectId(homeId);
  }

  save() {
    const db = getDb();
    return db.collection("favourites").insertOne(this);
  }

  static fetchAll() {
    const db = getDb();
    return db.collection("favourites").find().toArray();
  }

  static deleteById(homeId) {
    const db = getDb();
    return db.collection("favourites").deleteOne({ homeId: new ObjectId(homeId) });
  }
};