const mongoose = require('mongoose');

const Product = mongoose.model('Product',{
   // _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    productImage: { type: String }
});
module.exports={Product}