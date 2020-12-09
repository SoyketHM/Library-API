const bookCrud   		    = require('../services/bookCrud');
const _p       				= require('../helpers/simpleasync');
const { createResponse }    = require('../utils/responseGenerate');

/**
 * @swagger
 *
 * definitions:
 *   Book:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *       author:
 *         type: string
 *       genre:
 *         type: string
 *       image:
 *         type: string
 *       releaseDate:
 *         type: date
 *       status:
 *         type: string
 */

/**
 * @swagger
 *
 * /books:
 *   post:
 *     tags: [books]
 *     description: Create a new book
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: User token
 *         in:  header
 *       - name: name
 *         description: Book name
 *         in:  formData
 *         type: string
 *       - name: author
 *         description: Book author
 *         in:  formData
 *         type: string
 *       - name: genre
 *         description: Book genre
 *         in:  formData
 *         type: string
 *       - name: image
 *         description: Book image
 *         in:  formData
 *         type: file
 *       - name: releaseDate
 *         description: Book releaseDate
 *         in:  formData
 *         type: date
 *       - name: status
 *         description: Book status
 *         in:  formData
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: '#/definitions/Book'
 *         examples: 
 *           application/json: 
 *             { 
 *               "error": false,
 *               "data": {
 *					"status": "active",
 *					"_id": "5fd101f7f5b9e63d207296a3",
 *					"name": "The Knight One",
 *					"author": "Jone",
 *					"genre": "Travel",
 *					"image": "https://i.picsum.photos/id/20/640/360.jpg?hmac=hBfB4FaXdVe7dY4Lz_Kdc5poly17AruXGhRXFIXwRck",
 *					"releaseDate": "2020-12-08T18:24:55.000Z",
 *					"createdAt": "2020-12-09T16:57:27.684Z",
 *					"updatedAt": "2020-12-09T16:57:27.684Z",
 *					"__v": 0
 *				},
 *               "message": "book created successfully"
 *             } 
 *         
 */
module.exports.createBook = async (req, res,next) => {
    console.log(req.body);
	const [error,book] = await _p(bookCrud.createBook(req.body));

	if (error) {
		console.log(error);
		return next(new Error('book creation failed' ));
	}
	return res.status(200).json(createResponse(book, 'book created successfully'));
};


/**
 * @swagger
 *
 * /books:
 *   get:
 *     tags: [books]
 *     description: Get all books
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: User token
 *         in:  header
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: '#/definitions/Book'
 *         examples: 
 *           application/json: 
 *             { 
 *               "error": false,
 *               "data": [{
 *					"status": "active",
 *					"_id": "5fd101f7f5b9e63d207296a3",
 *					"name": "The Knight One",
 *					"author": "Jon Deo",
 *					"genre": "Travel",
 *					"image": "https://i.picsum.photos/id/20/640/360.jpg?hmac=hBfB4FaXdVe7dY4Lz_Kdc5poly17AruXGhRXFIXwRck",
 *					"releaseDate": "2020-12-08T18:24:55.000Z",
 *					"createdAt": "2020-12-09T16:57:27.684Z",
 *					"updatedAt": "2020-12-09T16:57:27.684Z",
 *					"__v": 0
 *				},
 * 				{
 *					"status": "active",
 *					"_id": "5fd101f7f5b9e63d207296a3",
 *					"name": "The Knight",
 *					"author": "David",
 *					"genre": "Fantasy",
 *					"image": "https://i.picsum.photos/id/20/640/360.jpg?hmac=hBfB4FaXdVe7dY4Lz_Kdc5poly17AruXGhRXFIXwRck",
 *					"releaseDate": "2020-12-08T18:24:55.000Z",
 *					"createdAt": "2020-12-09T16:57:27.684Z",
 *					"updatedAt": "2020-12-09T16:57:27.684Z",
 *					"__v": 0
 *				}],
 *               "message": null
 *             } 
 *         
 */
module.exports.getBooks = async (req, res,next) => {
	const [error,categories] = await _p(bookCrud.getBooks(req.query));

	if(error) {
		console.log(error);
		return next(new Error('book fetch error'));
	}
	return res.status(200).json(createResponse(categories));
};

/**
 * @swagger
 *
 * /books/:id:
 *   get:
 *     tags: [books]
 *     description: Get book by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: User token
 *         in:  header
 *       - name: id
 *         description: Book id
 *         in:  formData
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: '#/definitions/Book'
 *         examples: 
 *           application/json: 
 *             { 
 *               "error": false,
 *               "data": {
 *					"status": "active",
 *					"_id": "5fd101f7f5b9e63d207296a3",
 *					"name": "The Knight One",
 *					"author": "David",
 *					"genre": "Fantasy",
 *					"image": "https://i.picsum.photos/id/20/640/360.jpg?hmac=hBfB4FaXdVe7dY4Lz_Kdc5poly17AruXGhRXFIXwRck",
 *					"releaseDate": "2020-12-08T18:24:55.000Z",
 *					"createdAt": "2020-12-09T16:57:27.684Z",
 *					"updatedAt": "2020-12-09T16:57:27.684Z",
 *					"__v": 0
 *				},
 *               "message": null
 *             } 
 *         
 */
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

/**
 * @swagger
 *
 * /books/:id:
 *   put:
 *     tags: [books]
 *     description: Update book by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: User token
 *         in:  header
 *       - name: name
 *         description: Book name
 *         in:  formData
 *         type: string
 *       - name: author
 *         description: Book author
 *         in:  formData
 *         type: string
 *       - name: genre
 *         description: Book genre
 *         in:  formData
 *         type: string
 *       - name: image
 *         description: Book image
 *         in:  formData
 *         type: file
 *       - name: releaseDate
 *         description: Book releaseDate
 *         in:  formData
 *         type: date
 *       - name: status
 *         description: Book status
 *         in:  formData
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: '#/definitions/Book'
 *         examples: 
 *           application/json: 
 *             { 
 *               "error": false,
 *               "data": {
 *					"status": "active",
 *					"_id": "5fd101f7f5b9e63d207296a3",
 *					"name": "The Knight One",
 *					"author": "David",
 *					"genre": "Fantasy",
 *					"image": "https://i.picsum.photos/id/20/640/360.jpg?hmac=hBfB4FaXdVe7dY4Lz_Kdc5poly17AruXGhRXFIXwRck",
 *					"releaseDate": "2020-12-08T18:24:55.000Z",
 *					"createdAt": "2020-12-09T16:57:27.684Z",
 *					"updatedAt": "2020-12-09T16:57:27.684Z",
 *					"__v": 0
 *				},
 *               "message": "book updated successfully"
 *             } 
 *         
 */
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


/**
 * @swagger
 *
 * /books/:id:
 *   put:
 *     tags: [books]
 *     description: Delete book by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: User token
 *         in:  header
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: '#/definitions/Book'
 *         examples: 
 *           application/json: 
 *             { 
 *               "error": false,
 *               "data": null,
 *               "message": "book deleted successfully"
 *             } 
 *         
 */
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
