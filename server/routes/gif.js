const gif = require("../models/gif");
const router = require("express").Router();


router.get("/getAll", async (req, res) => {
	const options = {
		sort: { createdAt: 1 },
	};
	const cursor = await gif.find(options);
	if (cursor) {
		res.status(200).send({ success: true, data: cursor });
	} else {
		res.status(200).send({ success: true, msg: "No Data Found!" });
	}
});

router.get("/getOne/:getOne", async (req, res) => {
	const filter = { _id: req.params.getOne };
	const cursor = await gif.findOne(filter);
	console.log(cursor);
	if (cursor) {
		res.status(200).send({ success: true, data: cursor });
	} else {
		res.status(200).send({ success: true, msg: "No Data Found!" });
	}
});

router.post("/save", async (req, res) => {
	const newgif = gif({
		name: req.body.name,
		imageURL: req.body.imageURL,
	});
	try {
		const savedgif = await newgif.save();
		res.status(200).send({ gif: savedgif });
	} catch (error) {
		res.status(400).send({ success: false, msg: error });
	}
});

router.put("/update/:updateId", async (req, res) => {
	const filter = { _id: req.params.updateId };
	const options = {
		upsert: true,
		new: true,
	};
	try {
		const result = await gif.findOneAndUpdate(
			filter,
			{
				name: req.body.name,
				imageURL: req.body.imageURL,
			},
			options,
		);
		res.status(200).send({ gif: result });
	} catch (error) {
		res.status(400).send({ success: false, msg: error });
	}
});

router.delete("/delete/:deleteId", async (req, res) => {
	const filter = { _id: req.params.deleteId };
	const result = await gif.deleteOne(filter);
	if (result.deletedCount === 1) {
		res.status(200).send({ success: true, msg: "Data Deleted" });
	} else {
		res.status(200).send({ success: false, msg: "Data Not Found" });
	}
});

module.exports = router;