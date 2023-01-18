const express = require("express");
const app = express.Router();
const UserModel = require("../models/user.model");

// ****************list of all users*************
app.get("/", async (req, res) => {
    try {
        const user = await UserModel.find();
        // console.log(user);
        return res.status(200).send({ message: "OK", user });
    } catch (e) {
        return res.send(e.message);
    }
});

// ************Update the user from list****************
app.patch("/update/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        await UserModel.findByIdAndUpdate({ _id: id }, data);
        res.status(200).send({ "msg": `Updated Successfully User` });
    } catch (err) {
        res.status(404).send({ "Error": err.message });
    }
});

// ************Remove the user from list****************

app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await UserModel.findByIdAndDelete({ _id: id });
        return res.status(200).send({ "msg": "Delete Successfully User" });
    } catch (e) {
        res.status(404).send({ "Error": err.message });
    }
});

module.exports = app;