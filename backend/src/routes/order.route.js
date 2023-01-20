const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const OrderModel = require("../models/order.model");

const app = express.Router();

// Get all the order  list  of delivered item *************

app.get("/getdeliveredorder", async (req, res) => {
    let { token } = req.headers;

    // token = jwt.verify(token, process.env.token_password);

    try {
        let delivered = await OrderModel.find({ OrderDelivered: true }).populate({
            path: "cartId",
            populate: { path: "products", populate: "productId" },
        });

        return res.status(201).send({ delivered, Message: "OK" });
    } catch (e) {
        return res.send("Some thing went wrong");
    }
});

// Get list of Order Which is Not delivered

app.get("/getnotdelivered", async (req, res) => {
    let { token } = req.headers;

    // token = jwt.verify(token, process.env.token_password);

    try {
        let notDelivered = await OrderModel.find({
            OrderDelivered: false,
        }).populate({
            path: "cartId",
            populate: { path: "products", populate: "productId" },
        });

        return res.status(201).send({ notDelivered, Message: "OK" });
    } catch (e) {
        return res.send("Some thing went wrong");
    }
});

// Get Order details of particluar user with particular order Id

app.get("/getnotdeliveredofuser/:id", async (req, res) => {
    let { token } = req.headers;
    let { id } = req.params;
    // console.log(id);

    token = jwt.verify(token, process.env.token_password);
    let userId = token.id;

    try {
        let notDelivered = await OrderModel.find({
            OrderDelivered: false,
            userId,
            _id: id,
        }).populate({
            path: "cartId",
            populate: { path: "products", populate: "productId" },
        });

        return res.status(201).send({ notDelivered, Message: "OK" });
    } catch (e) {
        return res.send("Some thing went wrong");
    }
});

//  orderconfirmed*********************

app.post("/", async (req, res) => {
    let { token } = req.headers;
    const { priceTotal, paymentMethod, DeliveryAdress, cartId } = req.body;

    token = jwt.verify(token, process.env.token_password);

    let userId = token.id;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    let DeliveryDate =
        mm + "/" + (Number(dd) + Math.floor(Math.random() * 3 + 2)) + "/" + yyyy;

    try {
        let neworder = new OrderModel({
            userId,
            cartId,
            status: ["orderconfirmed"],
            currentStatus: "orderconfirmed",
            priceTotal,
            paymentMethod,
            DeliveryAdress,
            DeliveryDate,
        });

        await neworder.save();
        return res.status(200).send({ Message: "OK", neworder });
    } catch (e) {
        return res.send(e.message);
    }
});

//     change the status of the item

app.post("/changestatus", async (req, res) => {
    const { status, orderId } = req.body;

    try {
        if (status === "Delivered") {
            const order = await OrderModel.updateOne(
                { _id: orderId },
                { $set: { currentStatus: status, OrderDelivered: true } }
            );
            return res.status(200).send("Order Delivered");
        }

        const order = await OrderModel.findByIdAndUpdate(
            { _id: orderId },
            { $set: { currentStatus: status } }
        );

        return status(201).send("Status of oredr has been changed", status);
    } catch (e) {
        return res.send(e.message);
    }
});

// ***************************Pending order and items  /cancel/process*******************

app.get("/pendingorder", async (req, res) => {
    try {
        let totalPendingOrder = await OrderModel.find({ status: "pending" });
        totalPendingOrder = totalPendingOrder.length;
        let totalCancel = await OrderModel.find({ status: "cancel" });
        totalCancel = totalCancel.length;

        let totalProcessOrder = await OrderModel.find({ status: "cancel" });
        totalProcessOrder = totalProcessOrder.length;
        let pendingItems = await OrderModel.find({ status: "pending" }).populate(
            {
                path: "cartId",
            },
            {
                path: "userId",
            }
        );

        return res.send({
            totalPendingOrder,
            pendingItems,
            totalProcessOrder,
            totalCancel,
        });
    } catch (e) {
        return res.send(e.message);
    }
});

// *******************Total Income****************

app.get("/totalincome", async (req, res) => {
    let totalOrderOfTheDay = await OrderModel.find({
        createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    });
    let total = 0;

    for (let i = 0; i < totalOrderOfTheDay.length; i++) {
        total += totalOrderOfTheDay[i].priceTotal;
    }
    return res.send({ total });
});

module.exports = app;