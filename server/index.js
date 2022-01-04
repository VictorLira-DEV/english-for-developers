const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const VerbsModel = require("./models/Verbs");
const ExpressionModel = require("./models/Expressions");
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(
	"mongodb+srv://victor-lira:parafernalha@english-for-devs-cluste.df1lx.mongodb.net/english-for-devs-db-name?retryWrites=true&w=majority",
	{ useNewUrlParser: true }
);

app.get("/read", (req, res) => {
	VerbsModel.find({}, (error, result) => {
		if (error) {
			res.send(error);
		} else {
			res.send(result);
		}
	});
});

app.get("/expressions", (req, res) => {
	ExpressionModel.find({}, (error, result) => {
		if (error) {
			res.send(error);
		} else {
			res.send(result);
		}
	});
});

app.listen(process.env.PORT || 3001, () => {
	return console.log("server is running");
});
