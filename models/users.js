const mongoose = require('mongoose')
const config = require('../config/database')

UserSchema = mongoose.Schema({
  name: {
    type: String, required: false
  },
  email: {
    type: String, required: false
  },
  hash: {
    type: String, required: false
  },
  username: {
    type: String, required: false
  }
})

const User = module.exports = mongoose.model('Users', UserSchema)

module.exports.addEmail = function(newUser, callback){
   newUser.save(callback)
}
