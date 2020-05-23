const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        default: '',
        // required: true
    },
    lastName: {
        type: String,
        trim: true,
        default: '',
        // required: true
    },
    password: {
        type: String,
        trim: true,
        // required: true
    },
    userName: {
        type: String,
        trim: true,
        default: '',
        // required: true,
        unique: true
    },


})

const User = mongoose.model('User', UserSchema)

module.exports = User
