const { check }    = require('express-validator');

module.exports.registerBookValidator = [
	check('studentId')
		.optional().exists({ checkNull: true, checkFalsy: true }).withMessage('StudentId can\'t be empty').bail().isString().withMessage('Student Id must be a string'),
  check('books').isArray().withMessage('Book Id must be an array')
];