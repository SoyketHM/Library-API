const mongoose 		= require('mongoose');
const { Schema } 	= mongoose;
mongoose.Promise 	= global.Promise;

const userSchema = new Schema({
	name: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true,
		lowercase: true,
		required: true
	},
	password: {
		type: String,
		trim: true,
		required: true
	},
	type: {
		type: String,
		default: 'student'
	},
	status: {
		type: String,
		default: 'active'
	}
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);


