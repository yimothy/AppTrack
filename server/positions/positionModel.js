const mongoose = require('mongoose');

const PositionSchema = new mongoose.Schema({
	startDate: String,
	companyName: String,
	role: String,
	jobDescription: String,
	appliedThrough: String,
	contactName: String,
	contactPhone: Number,
	contactEmail: String,
	contactType: String,
	dateApplied: String,
	dateOfLastContact: String,
	replyReceived: Boolean,
	stages: Array,
	contractTime: Number,
	initialComp: Number,
	negotiated: Boolean,
	finalComp: Number,
	acceptReject: Boolean
})

module.exports = mongoose.model('Position', PositionSchema);