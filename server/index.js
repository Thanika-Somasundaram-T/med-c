const express = require("express");
const app = express();
const mongoose = require("mongoose");
const HospitalModel = require("./models/hospitals");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
	'mongodb+srv://thanika:thanika@cluster0.m3c3s.mongodb.net/med-c?retryWrites=true&w=majority'
);

app.get("/getHospitals", (req, res) => {
	HospitalModel.find()
		.then(hospital => res.json(hospital))
		.catch(err => res.json("Error: " + err));
});

app.post("/addHospital", async (req, res) => {
	const hospital = req.body;
	const newHospital = new HospitalModel(hospital);
	await newHospital.save()
		.then(() => res.json("hospital added"))
		.catch(err => res.status(400).json(err));
});

app.listen(5000, () => {
	console.log("Server is running successfully");
})