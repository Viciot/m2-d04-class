const mongoose = require('mongoose');
const Schema = mongoose.Schema

const clientSchema = new Schema({
	name: { type: String, required: true, unique: true },
	age: { type: Number, min: 0, max: 99 },
	accountActive: { type: Boolean, default: true },
	balance: { type: Number, default: 0 },
	role: { type: String, enum: ['client', 'worker', 'director'] },
	payments: Array
});

const Client = mongoose.model('Client', clientSchema)

module.exports = Client