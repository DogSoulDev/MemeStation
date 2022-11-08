const mongoose = require("mongoose");

const memeSchema = mongoose.Schema(
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
module.exports = mongoose.model("meme", memeSchema);
