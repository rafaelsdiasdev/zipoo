const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  document: String,
  email: String,
  phone: String
}, 
{
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;