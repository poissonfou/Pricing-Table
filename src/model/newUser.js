const { Schema, model } = require('mongoose');

const newUser = new Schema({
    email: String,
    password: String,
});

module.exports = model('User', newUser);