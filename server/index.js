const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://thanika:thanika@cluster0.m3c3s.mongodb.net/med-c?retryWrites=true&w=majority');


app.listen(5000, () => {
	console.log("Server is running successfully");
})