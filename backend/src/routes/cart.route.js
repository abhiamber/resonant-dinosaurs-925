const express = require("express")
const { authuser } = require('../middleware/cart.middleware');
const { CartModel } = require("../models/cart.model")
const cartRouter = express.Router()

cartRouter.use(authuser);
cartRouter.get("/", async (req, res) => {
    try {
        const data = await CartModel.find()
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
        await CartModel.findByIDAndDelete({ "_id": id })
        res.send("Product has been removed successfully")
    }
    catch (err) {
        console.log(err)
        console.log("Error occured while removing product")
    }
})

module.exports = { cartRouter }