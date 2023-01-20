const http = require("http");
const express = require("express");
const app = express();
const httpServer = http.createServer(app);
const mongoose = require("mongoose");
const connect = require("./src/config/db");
const UserRoutes = require("./src/routes/user.route");
const LoginRoute = require("./src/routes/login.route");
const SignupRotue = require("./src/routes/signup.route");
const { cartRouter } = require("./src/routes/cart.route")
const { validate } = require("./src/middleware/validate.middleware");
const { authuser } = require("./src/middleware/cart.middleware")
require("dotenv").config();
const PORT = process.env.PORT || 8080;
mongoose.set("strictQuery", false);
const cors = require("cors");
const { urlencoded } = require("express");
app.use(urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    res.send("yahoo!!!");
});

app.use("/signup", SignupRotue);
app.use("/login", LoginRoute);
app.use("/user", UserRoutes);
app.use("/cart", cartRouter);

httpServer.listen(PORT, async () => {
    try {
        await connect();
        console.log("connected to DB");
    } catch (e) {
        console.log({ message: e.message });
    }
    console.log(`Server is running at port ${PORT}`)
});