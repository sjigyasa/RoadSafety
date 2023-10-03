const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ImgUrl: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Price:{
        type : Number ,
        required  :true
    }
})


const Product = mongoose.model('Product', productSchema);
module.exports = Product;