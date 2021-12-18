const mongoose = require("mongoose");

const ExpressionSchema = new mongoose.Schema({
	expression: {
		type: String,
	},
	example_1: {
		type: String,
	},
	example_2: {
		type: String,
	},
	translation_1: {
		type: String,
	},
	translation_2: {
		type: String,
	},
});

module.exports = mongoose.model("expressions", ExpressionSchema);
