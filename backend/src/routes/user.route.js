const express = require("express");

const app = express.Router();
const UserModel = require("../models/user.model");

// ****************list of user*************
app.get("/", async (req, res) => {
    try {
        const user = await UserModel.find();
        return res.status(200).send({ message: "OK", user });
    } catch (e) {
        return res.send(e.message);
    }
});

// ************Remove the user from list****************

app.delete("/deleteproduct/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await UserModel.findByIdAndDelete({ _id: id });
        return res.status(200).send({ Message: "OK" });
    } catch (e) {
        return res.send(e.message);
    }
    console.log("hello");
    return;
});
module.exports = app;