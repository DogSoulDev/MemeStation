const express = require("express");
const app = express();
require("dotenv/config");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(cors({ origin: true }));
app.use(express.json());

const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

const memeRoute = require("./routes/meme");
app.use("/api/meme/", memeRoute);

const gifRoute = require("./routes/gif");
app.use("/api/gif/", gifRoute);

mongoose.connect(process.env.DB, (err, req) => {
	try {
		if (err) {
			throw err;
		} else {
			console.log("MemeStation DB is Connected!");
		}
	} catch (error) {
		console.log("Error connecting to MemeStation DB!");
	}
});

app.listen(process.env.PORT, (req, res) => {
	console.log("Server is Working!");
});
