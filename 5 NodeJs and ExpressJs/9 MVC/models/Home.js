const fs = require('fs');
const path = require('path');
const rootDir = require('./../util/path-util');

const HomeFilePath = path.join(rootDir, 'data', 'homes.json');

const registeredHomes = [];

module.exports = class Home {
    constructor(houseName, price, location,rating,photoUrl) {
      this.houseName = houseName;
      this.price = price;
      this.location = location;
      this .rating = rating;
      this.photoUrl = photoUrl;
    }
  
    save() {
      registeredHomes.push(this);
      fs.writeFile(HomeFilePath, JSON.stringify(registeredHomes), (err) => {
        console.log('Error in writing file', err);
      });
    }
  
    static fetchAll(callback) {
     fs.readFile(HomeFilePath, (err, data) => {
        if (err) {
          callback ([]);
        }else
       callback (JSON.parse(data));
      });
      return registeredHomes;
    }
  };
  
 