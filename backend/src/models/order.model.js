const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        cartId: {
            type: Schema.Types.ObjectId,
            ref: "cart",
            required: true,
        },
        status: Array,
        currentStatus: String,
        priceTotal: Number,
        paymentMethod: String,
        DeliveryAdress: String,
        OrderDelivered: { type: Boolean, default: false },
        DeliveryDate: String,
    },
    { versionKey: false, timestamps: true }
);

const OrderModel = model("order", OrderSchema);

module.exports = OrderModel;