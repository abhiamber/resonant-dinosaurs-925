const express = require("express")
const { authuser } = require('../middleware/cart.middleware');
const { CartModel } = require("../models/cart.model");
const UserModel = require("../models/user.model")
const cartRouter = express.Router()
cartRouter.get("/cartuser", async (req, res) => {
    const email = req.headers.email;
    try {
        const userID = await UserModel.findOne({ "email": email })
        res.send(userID)
    }
    catch (err) {
        console.log(err)
    }
})
cartRouter.use(authuser);

cartRouter.get("/", async (req, res) => {
    const userid = req.headers.user;
    console.log(userid)
    try {
        const data = await CartModel.find({ "userID": userid })
        res.send(data)
    }
    catch (err) {
        console.log("err")
        console.log(err)
    }
})

cartRouter.post("/additemtocart", async (req, res) => {
    const product = req.body;
    try {
        const products = new CartModel(product)
        await products.save()
        res.send(products)
    }
    catch (err) {
        console.log(err)
        console.log("Error while adding data to cart")
    }
})
cartRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    try {
        await CartModel.findByIdAndDelete({ "_id": id })
        res.send("Product has been removed successfully")
    }
    catch (err) {
        console.log(err)
        console.log("Error occured while removing product")
    }
})

module.exports = { cartRouter }