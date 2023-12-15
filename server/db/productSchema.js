const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    'Handle': { type: String },
    'Title': { type: String },
    'Body': { type: String },
    'Vendor': { type: String },
    'Type': { type: String },
    'Tags': { type: String },
    'Option1 Name': { type: String },
    'Option1 Value': { type: String },
    'Option2 Name': { type: String },
    'Option2 Value': { type: String },
    'Option3 Name': { type: String },
    'Option3 Value': { type: String },
    'Variant SKU': { type: String },
    'Variant Grams': { type: Number },
    'Variant Inventory Tracker': { type: String },
    'Variant Inventory Qty': { type: Number },
    'Variant Inventory Policy': { type: String },
    'Variant Fulfillment Service': { type: String },
    'Variant Price': { type: Number },
    'Variant Compare At Price': { type: String },
    'Image Src': { type: String }
})
module.exports = mongoose.model('product', productSchema);