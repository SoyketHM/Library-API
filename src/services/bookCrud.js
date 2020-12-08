const Book 	= require('../models/Book');
const _p    = require('../helpers/simpleasync');

//create book
module.exports.createBook = async bookInfo => { 
	return new Promise(async (resolve, reject) => {
		const [error, saveBookInfo] = await _p(Book.create(bookInfo));

		if (!error) {
			return resolve(saveBookInfo);
		} else {
			return reject(error.message);
		}
	});
};

//get all books || can use query string
module.exports.getBooks = async query => {
	return new Promise(async (resolve, reject) => {
		const pageNum = query.page ? query.page : 1;
		const Limit = 10;
		const skip = Limit * (pageNum - 1);

		if(query.page) delete query.page;

		const [error, books] = await _p(Book.find( query )
			.limit(Limit)
			.skip(skip)
			.sort({createdAt: 'desc'}));

		if(!error) {
			return resolve(books);
		} else {
			return reject(error.message);
		}
	});
};

//get book by book id
module.exports.getBookById = async id => {
	return new Promise(async (resolve, reject) => {
		const [error, book] = await _p(Book.findOne({ _id: id }));

		if(!error) {
			return resolve(book);
		} else {
			return reject(error.message);
		}
	});
};

//update book by book id
module.exports.updateBookById = async (id, bookInfo) => {
	return new Promise(async (resolve, reject) => {
		const [error, updateBookInfo] = await _p(Book.findOneAndUpdate({ _id: id }, bookInfo, { new: true	}));

		if (!error) {
			return resolve(updateBookInfo);
		} else {
			return reject(error.message);
		}
	});
};

//delete book by book id
module.exports.deleteBookById = async (id, bookInfo) => {
	return new Promise(async (resolve, reject) => {
		const [error, deleteBookInfo] = await _p(Book.findOneAndDelete({ _id: id }));

		if (!error) {
			return resolve(deleteBookInfo);
		} else {
			return reject(error.message);
		}
	});
};
