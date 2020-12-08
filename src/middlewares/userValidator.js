const { check }    = require('express-validator');

module.exports.userValidator = [
	check('name')
		.optional().exists({ checkNull: true, checkFalsy: true }).withMessage('Name can\'t be empty').bail().isString().withMessage('Name must be a string'),
    check('email')
        .exists({ checkNull: true, checkFalsy: true }).bail().isString().withMessage('Email must be a string'),
    check('password')
        .exists({ checkNull: true, checkFalsy: true }).bail().isString().withMessage('Password must be a string'),
	check('type')
		.optional().exists({ checkNull: true, checkFalsy: true }).bail().isString().withMessage('Status must be a string'),
	check('status')
		.optional().exists({ checkNull: true, checkFalsy: true }).bail().isString().withMessage('Status must be a string'),
];

module.exports.loginValidator = [
	check('email')
        .exists({ checkNull: true, checkFalsy: true }).bail().isString().withMessage('Email must be a string'),
    check('password')
        .exists({ checkNull: true, checkFalsy: true }).bail().isString().withMessage('Password must be a string'),
];

