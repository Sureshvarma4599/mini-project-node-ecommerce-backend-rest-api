const mongoose = require('mongoose')

const order = mongoose.model('order',{
    //_id: mongoose.Schema.Types.ObjectId,
    product: { type: String, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
});
module.exports={order}