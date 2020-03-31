const mongoose = global.db;

module.exports = mongoose.model('routes_authorizations', new mongoose.Schema({},{ "strict": false }));
