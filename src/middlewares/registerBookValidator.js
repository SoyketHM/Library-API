const { check }    = require('express-validator');

module.exports.registerBookValidator = [
	check('books').isArray().withMessage('Book Id must be an array')
];