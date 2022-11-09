const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const port = process.env.PORT || 8080;

//!Databse Connection
const connection = require("./config/database");

app.use(cors());
app.get("/",(req, res) => {
	res.json({msg:'Welcome'})
	
})
const storage = multer.diskStorage({
	destination: path.join(__dirname, "../public_html/", "uploads"),
	filename: function (req, file, cb) {
		//? Null as first argument means no error
		cb(null, Date.now() + "-" + file.originalname);
	},
});

app.post("/imageupload", async (req, res) => {
	try {
		const upload = multer({ storage: storage }).single("meme");
		upload(req, res, function (err) {
			//? req.file contains information of uploaded file
			//? req.body contains information of text fields
			if (!req.file) {
				return res.send("Please select an Meme to upload!");
			} else if (err instanceof multer.MulterError) {
				return res.send(err);
			} else if (err) {
				return res.send(err);
			}
			const classifiedsadd = {
				image: req.file.filename,
			};
			const sql = "INSERT INTO users SET ?";
			connection.query(sql, classifiedsadd, (err, results) => {
				if (err) throw err;
				res.json({ success: 1 });
			});
		});
	} catch (err) {
		console.log(err);
	}
});

app.listen(port, () =>
	console.log(`Uploader On! http://localhost:${port}`),
);
