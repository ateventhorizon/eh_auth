const mongoose = global.db;

module.exports = mongoose.model('users', new mongoose.Schema({
  name: {type: String, unique: true},
  email: {type: String, unique: true},
},{ timestamps: true, "strict": false }));
