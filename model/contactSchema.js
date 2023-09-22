const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("This email is not valid!");
            }
        }
    },
    Message: {
        type: String,
        required: true
    }
})


const ContactUser = mongoose.model('ContactUs', contactSchema);
module.exports = ContactUser;