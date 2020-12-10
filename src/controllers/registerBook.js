const registerCrud          = require('../services/registerBookCrud');
const _p       				= require('../helpers/simpleasync');
const { createResponse }    = require('../utils/responseGenerate');

/**
 * @swagger
 *
 * definitions:
 *   RegisterBook:
 *     type: object
 *     properties:
 *       studentId:
 *         type: string
 *         example: 5fd2720f5cabea283cd3cfe2
 *       books:
 *         type: array
 *         example: [5fd2720f5cabea283cd3cfe2]
 */

/**
 * @swagger
 *
 * /api/register-books:
 *   post:
 *     tags: [register-books]
 *     description: Create a new register book
 *     produces:
 *       - application/json
 *     parameters: 
 *     - name: token
 *       description: User token
 *       in:  header
 *     - in:  body
 *       name: Register Book Data
 *       schema:
 *         $ref: '#/definitions/RegisterBook'
 *     responses:
 *       200:
 *         description: OK
 *         schema: 
 *           $ref: '#/definitions/RegisterBook'
 *         examples: 
 *           application/json: 
 *             { 
 *               "error": false,
 *               "data": {
 *				 "books": [
 *					"5fcfc5a92a90f93cac013892"
 *					],
 *					"_id": "5fcfe72b784d8643e4fae212",
 *					"studentId": "5fcfa2f4666c5931606d5fce",
 *					"createdAt": "2020-12-08T20:50:51.970Z",
 *					"updatedAt": "2020-12-08T20:51:20.208Z",
 *					"__v": 0
 *				},
 *               "message": "register created successfully"
 *             } 
 *         
 */
module.exports.createRegister = async (req, res, next) => {
	const [error,register] = await _p(registerCrud.createRegister(req.body));

	if (error) {
		console.log(error);
		return next(new Error('register creation failed' ));
	}
	return res.status(200).json(createResponse(register, 'register created successfully'));
};

/**
 * @swagger
 *
 * /api/register-books:
 *   get:
 *     tags: [register-books]
 *     description: Get all register book
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
 *           $ref: '#/definitions/RegisterBook'
 *         examples: 
 *           application/json: 
 *             { 
 *               "error": false,
 *               "data": [{
 *					"books": [
 *					"5fcfc5a92a90f93cac013892"
 *					],
 *					"_id": "5fcfe72b784d8643e4fae212",
 *					"studentId": "5fcfa2f4666c5931606d5fce",
 *					"createdAt": "2020-12-08T20:50:51.970Z",
 *					"updatedAt": "2020-12-08T20:51:20.208Z",
 *					"__v": 0
 *				},
 * 				{
 *					"books": [
 *					"5fcfc5a92a90f93cac013892"
 *					],
 *					"_id": "5fcfe72b784d8643e4fae212",
 *					"studentId": "5fcfa2f4666c5931606d5fce",
 *					"createdAt": "2020-12-08T20:50:51.970Z",
 *					"updatedAt": "2020-12-08T20:51:20.208Z",
 *					"__v": 0
 *				}],
 *               "message": null
 *             } 
 *         
 */
module.exports.getRegisters = async (req, res,next) => {
	const [error,categories] = await _p(registerCrud.getRegisters(req.query));

	if(error) {
		console.log(error);
		return next(new Error('register fetch error'));
	}
	return res.status(200).json(createResponse(categories));
};

/**
 * @swagger
 *
 * /api/register-books/{id}:
 *   get:
 *     tags: [register-books]
 *     description: Update register book id
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: token
 *         description: User token
 *         in:  header
 *       - name: id
 *         description: Register book id
 *         in:  path
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema: 
 *           $ref: '#/definitions/RegisterBook'
 *         examples: 
 *           application/json: 
 *             { 
 *               "error": false,
 *               "data": {
 *					"books": [
 *					"5fcfc5a92a90f93cac013892"
 *					],
 *					"_id": "5fcfe72b784d8643e4fae212",
 *					"studentId": "5fcfa2f4666c5931606d5fce",
 *					"createdAt": "2020-12-08T20:50:51.970Z",
 *					"updatedAt": "2020-12-08T20:51:20.208Z",
 *					"__v": 0
 *				},
 *               "message": null
 *             } 
 *         
 */
module.exports.getRegisterById = async (req, res,next) => {
	const [error,register] = await _p(registerCrud.getRegisterById(req.params.id));

	if(error) {
		console.log(error);
		return next(new Error('register fetch error'));
	}

	if(!register) {
		return res.status(200).json(createResponse(null, 'register not found'));
	}
	return res.status(200).json(createResponse(register));
};

/**
 * @swagger
 *
 * /api/register-books/{id}:
 *   put:
 *     tags: [register-books]
 *     description: Update register book id
 *     produces:
 *       - application/json
 *     parameters: 
 *     - name: token
 *       description: User token
 *       in:  header
 *     - name: id
 *       description: Register book id
 *       in:  path
 *       type: string
 *     - in:  body
 *       name: Register Book Data
 *       schema:
 *         $ref: '#/definitions/RegisterBook'
 *     responses:
 *       200:
 *         description: OK
 *         schema: 
 *           $ref: '#/definitions/RegisterBook'
 *         examples: 
 *           application/json: 
 *             { 
 *               "error": false,
 *               "data": {
 *					"books": [
 *					"5fcfc5a92a90f93cac013892"
 *					],
 *					"_id": "5fcfe72b784d8643e4fae212",
 *					"studentId": "5fcfa2f4666c5931606d5fce",
 *					"createdAt": "2020-12-08T20:50:51.970Z",
 *					"updatedAt": "2020-12-08T20:51:20.208Z",
 *					"__v": 0
 *				},
 *               "message": "register updated successfully"
 *             } 
 *         
 */
module.exports.updateRegisterById = async (req, res,next) => {
	if (req.body.studentId) delete req.body.studentId;
	let [error,register] = await _p(registerCrud.updateRegisterById(req.params.id, req.body));

	if(error) {
		console.log(error);
		return next(new Error('register access error'));
	}
	if(!register) {
		return res.status(200).json(createResponse(null, 'register not found'));
	}
	return res.status(200).json(createResponse(register, 'register updated successfully'));
};

/**
 * @swagger
 *
 * /api/register-books/{id}:
 *   delete:
 *     tags: [register-books]
 *     description: Delete register book id
 *     produces:
 *       - application/json
 *     parameters: 
 *     - name: token
 *       description: User token
 *       in:  header
 *     - name: id
 *       description: Register book id
 *       in:  path
 *       type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema: 
 *           $ref: '#/definitions/RegisterBook'
 *         examples: 
 *           application/json: 
 *             { 
 *               "error": false,
 *               "data": null,
 *               "message": "register deleted successfully"
 *             } 
 *         
 */
module.exports.deleteRegisterById = async (req, res,next) => {
	let [error,register] = await _p(registerCrud.deleteRegisterById(req.params.id));

	if(error) {
		console.log(error);
		return next(new Error('register access error'));
	}
	if(!register) {
		return res.status(200).json(createResponse(null, 'register not found'));
	}
	return res.status(200).json(createResponse(null, 'register deleted successfully'));
};
