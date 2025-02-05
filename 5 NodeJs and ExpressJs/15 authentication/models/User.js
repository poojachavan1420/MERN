const mongoose = require('mongoose');


const homeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userType: {type: String, required: true , enum: ['host','guest']},
    
    favouriteHomes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Home',
        required: true,
        unique: true,
      }]
});



module.exports = mongoose.model("User", homeSchema);