const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    roomNo: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });
   
  module.exports = new mongoose.model('users', UserSchema);  

/*   const RoomBooked = mongoose.model('users', UserSchema);
  RoomBooked.createIndexes(); */