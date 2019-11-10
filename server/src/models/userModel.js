const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String, 
    room_no: String, 
    uid: { type: Number, default: 0 }
});

const User = mongoose.model('user', userSchema);
module.exports = User;
