const mongoose 		= require('mongoose');
const { Schema } 	= mongoose;
const objectID      = Schema.ObjectId;
mongoose.Promise 	= global.Promise;

const registerBookSchema = new Schema({
	studentId: {
		type: objectID,
		ref: 'User'
	},
	books: [{
		type: objectID,
		ref: 'Book'
	}]
}, { timestamps: true });

module.exports = mongoose.model('RegisterBook', registerBookSchema);


