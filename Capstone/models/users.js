const mongoose = require('mongoose'), Schema = mongoose.Schema;

const UsersSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', UsersSchema);