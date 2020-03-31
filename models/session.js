const mongoose = global.db;

module.exports = mongoose.model("sessions", new mongoose.Schema({}, { strict: false }));
