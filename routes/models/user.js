const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type:String,
        maxlength: [30, "Name length cannot be greater than 30"],
        required: [true, 'Please enter name'],
        trim: true
    },
    username: {
        type: String,
        required: [true, "Please enter username"],
        minlength: [5, "Username length must be 5 characters atleast"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        trim: true
    },
    passwords: {
        type: String,
        required: [true, "Please enter password"],
        minlength: [6, "Password length must be 6 characters atleast"],
        trim: true
    },
    Cpasswords:{
        type: String,
        required: [true, "Please enter confirm password"],
        minlength: [6, "Password length must be 6 characters atleast"],
        trim: true
    }
})

module.exports = mongoose.model("User", userSchema);