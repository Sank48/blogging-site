const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        maxlength: [30, "Name length cannot be greater than 30"],
        required: [true, 'Please enter name'],
        trim: true
    },
    username: {
        type: String,
        required: [true, "Please enter username"],
        minlength: [5, "Username length must be 5 characters atleast"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address'],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minlength: [6, "Password length must be 6 characters atleast"],
        trim: true,
        select: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

module.exports = mongoose.model("User", userSchema);