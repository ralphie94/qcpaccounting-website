const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
    res.json({ message: "Hello" });
});

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});