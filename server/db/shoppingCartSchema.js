const mongoose = require('mongoose');
const shoppingCartSchema = new mongoose.Schema({
    user_string: { type: String },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
})
module.exports = mongoose.model('shoppingCart', shoppingCartSchema);