const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://chavanpooja92241:pooja@airbnb.ic94j.mongodb.net/airbnb?retryWrites=true&w=majority";

let _db;

const connectToDatabase = (callback) => {
  MongoClient.connect(url)
    .then(client => {
      console.log("Connected to MongoDB");
      _db = client.db('airbnb');
      callback();
    })
    .catch(error => {
      console.log("Error while connecting to MongoDB", error);
      throw error;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

module.exports = {
  connectToDatabase,
  getDb
};

exports.connectToDatabase = connectToDatabase;
exports.getDb = getDb;