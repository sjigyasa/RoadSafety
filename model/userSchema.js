const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: [true, "This email already exists!"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("This email is not valid!");
            }
        }
    },
    Contact: {
        type: Number,
        required: true,
    },
    Password: {
        type: String,
        required: true
    },
    cPassword: {
        type: String,
        required: true
    }
})


const User = mongoose.model('User', userSchema);
module.exports = User;