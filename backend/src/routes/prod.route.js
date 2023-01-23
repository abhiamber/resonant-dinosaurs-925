const express = require("express");
const app = express.Router();

const ProdModel = require("../models/product.model");

app.get("/", async (req, res) => {
  const { query } = req.query;
  //   console.log(query, "t");

  try {
    if (query) {
      let data = await ProdModel.find({
        product_type: { $regex: query, $options: "i" },
      });
      if (data.length > 0) {
        // console.log(query, "t", data);

        return res.send({ messg: data, state: "OK" });
      } else {
        let data = await ProdModel.find({
          category: { $regex: query, $options: "i" },
        });
        // console.log(query, "z", data);

        return res.send({ messg: data, state: "OK" });
      }
    }
    const data = await ProdModel.find();
    return res.send({ messg: data, state: "OK" });
  } catch (e) {
    return res.send({ messg: e.message, state: "NOT" });
    // console.log(err);
  }
});

app.get("/search", async (req, res) => {
  const { query } = req.query;
  // console.log(query, "t");

  try {
    let data = await ProdModel.find({
      name: { $regex: query, $options: "si" },
    });
    return res.send({ messg: data, state: "OK" });
  } catch (e) {
    return res.send({ messg: e.message, state: "NOT" });
    // console.log(err);
  }
});

// particluar product

app.get("/productId/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(query, "t");

  try {
    let data = await ProdModel.findOne({ _id: id });
    return res.send({ messg: data, state: "OK" });
  } catch (e) {
    return res.send({ messg: e.message, state: "NOT" });
    // console.log(err);
  }
});
module.exports = app;
