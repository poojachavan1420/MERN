const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://chavanpooja92241:pooja@airbnb.ic94j.mongodb.net/airbnb?retryWrites=true&w=majority";

const connectToDatabase = (callback) => {
  MongoClient.connect(url)
    .then(client => {
      console.log("Connected to MongoDB");
      callback(client);
    })
    .catch(error => {
      console.log("Error while connecting to MongoDB", error);
    });
};

module.exports = connectToDatabase;