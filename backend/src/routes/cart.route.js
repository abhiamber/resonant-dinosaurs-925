require("dotenv").config();
const express = require("express");

const app = express.Router();
const jwt = require("jsonwebtoken");

let CartModel = require("../models/cart.model");

// fetching cart items*********************

app.get("/fetchcartItem", async (req, res) => {
  let { token } = req.headers;
  if (token == "Pushpendra Singh") {
    return res.send({ "msg": "Not logged in" })
  };

  token = jwt.verify(token, process.env.token_password);
  let userId = token.id;
  let cartItem = await CartModel.find({ userId, active: true }).populate({
    path: "products",
    populate: { path: "productId" },
  });
  try {
    if (cartItem.length > 0) {
      console.log(cartItem);
      return res.send(cartItem);
    } else {
      return res.send("there is no item inside the cart");
    }
  } catch (e) {
    return res.send(e.message);
  }
});

// **************add to cart*********************
app.post("/", async (req, res) => {
  let { token } = req.headers;
  let { productId, qty } = req.body;
  if (!token) {
    return res.status(501).send("Not logged in")
  }
  token = jwt.decode(token, process.env.token_password);
  let userId = token.id;
  let cart = await CartModel.findOne({ userId });
  try {
    if (!cart) {
      let newCartItem = new CartModel({ userId, products: [{ productId }] });
      await newCartItem.save();
      console.log(newCartItem);

      return res.status(200).send(newCartItem);
    } else {
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);

      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        productItem.quantity = productItem.quantity + qty;
        cart.products[itemIndex] = productItem;
      } else {
        cart.products.push({ productId });
      }

      await cart.save();
      return res.status(201).send(cart);
    }
  } catch (e) {
    return res.send(e.message);
  }
});

app.post("/changecartactive", async (req, res) => {
  let { token } = req.headers;
  let { cartId } = req.body;
  if (!token) {
    return res.status(501).send({ "msg": "Not logged in" })
  }
  token = jwt.decode(token, process.env.token_password);
  let userId = token.id;
  let cart = await CartModel.findOne({ userId });
  try {
    if (!cart) {
      return res.send({ "msg": "Cart not exsit" })
    } else {
      await CartModel.updateOne({ userId, cartId, active: false });
      return res.send({"msg": "Cart updated successfully"});
    }
  } catch (e) {
    return res.send( {"msg": e.message});
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id
  try {
    let itsms = await CartModel.findByIdAndDelete({ "_id": id })
    console.log("These are the items", itsms)
    res.send("Your Order has been placed successfully")
  }
  catch (err) {
    console.log(err)
    console.log("Error occured while removing product")
  }
})


// ****************Remove from Cart******************
app.post("/delete", async (req, res) => {
  let { token } = req.headers;
  let { productId, _id } = req.body;
  console.log(req.body)
  console.log("This is token", token, productId, _id)
  if (!token) {
    return res.status(501).send("Not logged in")
  }
  token = jwt.decode(token, process.env.token_password);
  let userId = token.id;
  let cart = await CartModel.findOne({ userId, _id });
  // let itemIndex = cart.products.findIndex((p) => p.productId == productId);
  // console.log(cart);
  // return;
  try {
    if (!cart) {
      return res
        .status(401)
        .send("There is no no any cart to remove the product");
    } else {
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);
      if (cart.products.length === 1) {
        await CartModel.findByIdAndDelete({ _id });
      } else {
        cart.products.splice(itemIndex, 1);
      }
      await cart.save();
      console.log("This is ", cart);
      return res.status(201).send(cart);
    }
  } catch (e) {
    return res.send(e.message);
  }
});
module.exports = app;