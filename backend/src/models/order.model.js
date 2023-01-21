const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    name: String,
    brand: String,
    description: String,
    image_link: String,
    price: Number,
    price_sign: String,
    product_type: String,
    quantity: Number,
    rating: Number,
    review: Number,
    category: String,
    email: String,
    userID: { type: String, required: true }
}, { versionKey: false, timestamps: true });

const OrderModel = mongoose.model("order", orderSchema)

module.exports = { OrderModel }
