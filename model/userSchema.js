const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    },
    Contact: {
        type: Number,
        required: true,
    },
    DOB: {
        type: Date,
        required: true
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