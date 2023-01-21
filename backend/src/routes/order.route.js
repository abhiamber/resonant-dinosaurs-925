const { Router } = require("express");
const OrderRouter = Router();
const { OrderModel } = require("../models/order.model");
const { validate } = require('../middleware/validate.middleware');



OrderRouter.post("/post", async (req, res) => {
    let { email } = req.headers;
    let { _id, name, brand } = req.body;
    try {
        const order = new OrderModel({
            userID: _id,
            name,
            brand,
            email
        });
        await order.save();
        res.send({ "msg": "Order saved successfully" })
    } catch (err) {
        console.log(err);
        res.send({ "msg": "Order not saved successfully" })
    }
});




OrderRouter.use(validate);
OrderRouter.get("/get", async (req, res) => {
    try {
        let order = await OrderModel.find();
        return res.status(201).send(order);
    } catch (e) {
        return res.send("Some thing went wrong");
    }
});



module.exports = { OrderRouter };