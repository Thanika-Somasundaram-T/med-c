const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
	hospitalName: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	ratings: Number,
	treatment: [{
		treatmentName: String,
		appointmentFee: Number,
	}],
	doctors: [{
		doctorName: String,
		qualification: [],
		treatmentOffered: [],
	}]
});

const HospitalModel = mongoose.model("hospitals", UserSchema);

module.exports = HospitalModel;
