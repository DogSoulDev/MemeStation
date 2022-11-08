const mongoose = require("mongoose");

const gifSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		imageURL: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);
module.exports = mongoose.model("gif", gifSchema);
