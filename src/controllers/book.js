const bookCrud   		    = require('../services/bookCrud');
const _p       				= require('../helpers/simpleasync');
const { createResponse }    = require('../utils/responseGenerate');

//create book
module.exports.createBook = async (req, res,next) => {
    console.log(req.body);
	const [error,book] = await _p(bookCrud.createBook(req.body));

	if (error) {
		console.log(error);
		return next(new Error('book creation failed' ));
	}
	return res.status(200).json(createResponse(book, 'book created successfully'));
};

//get all Books || can use query string
module.exports.getBooks = async (req, res,next) => {
	const [error,categories] = await _p(bookCrud.getBooks(req.query));

	if(error) {
		console.log(error);
		return next(new Error('book fetch error'));
	}
	return res.status(200).json(createResponse(categories));
};

//get book by book id
module.exports.getBookById = async (req, res,next) => {
	const [error,book] = await _p(bookCrud.getBookById(req.params.id));

	if(error) {
		console.log(error);
		return next(new Error('book fetch error'));
	}

	if(!book) {
		return res.status(200).json(createResponse(null, 'book not found'));
	}
	return res.status(200).json(createResponse(book));
};

//update book by book id
module.exports.updateBookById = async (req, res,next) => {
	let [error,book] = await _p(bookCrud.updateBookById(req.params.id, req.body));

	if(error) {
		console.log(error);
		return next(new Error('book access error'));
	}
	if(!book) {
		return res.status(200).json(createResponse(null, 'book not found'));
	}
	return res.status(200).json(createResponse(book, 'book updated successfully'));
};

//delete book by book id
module.exports.deleteBookById = async (req, res,next) => {
	let [error,book] = await _p(bookCrud.deleteBookById(req.params.id));

	if(error) {
		console.log(error);
		return next(new Error('book access error'));
	}
	if(!book) {
		return res.status(200).json(createResponse(null, 'book not found'));
	}
	return res.status(200).json(createResponse(null, 'book deleted successfully'));
};
