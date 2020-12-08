const mongoose 		= require('mongoose');
const { Schema } 	= mongoose;
mongoose.Promise 	= global.Promise;

const bookSchema = new Schema({
	name: {
		type: String,
		trim: true
	},
	author: {
		type: String,
		trim: true,
	},
	genre: {
		type: String,
		trim: true,
	},
	image: {
		type: String,
		trim: true,
	},
	releaseDate: {
		type: Date,
	},
	status: {
		type: String,
		default: 'active'
	}
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);


