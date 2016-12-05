const mongoose = require('mongoose');

const PositionSchema = new mongoose.Schema({
	startDate: Date,
	companyName: String,
	role: String,
	jobDescription: String,
	appliedThrough: String,
	contactName: String,
	contactPhone: String,
	contactEmail: String,
	contactType: String,
	dateApplied: Date,
	dateOfLastContact: Date,
	replyReceived: Boolean,
	scheduled
})