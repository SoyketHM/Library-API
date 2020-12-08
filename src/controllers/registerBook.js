const registerCrud          = require('../services/registerBookCrud');
const _p       				= require('../helpers/simpleasync');
const { createResponse }    = require('../utils/responseGenerate');

//create register
module.exports.createRegister = async (req, res,next) => {
    console.log(req.body);
	const [error,register] = await _p(registerCrud.createRegister(req.body));

	if (error) {
		console.log(error);
		return next(new Error('register creation failed' ));
	}
	return res.status(200).json(createResponse(register, 'register created successfully'));
};

//get all Registers || can use query string
module.exports.getRegisters = async (req, res,next) => {
	const [error,categories] = await _p(registerCrud.getRegisters(req.query));

	if(error) {
		console.log(error);
		return next(new Error('register fetch error'));
	}
	return res.status(200).json(createResponse(categories));
};

//get register by register id
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

//update register by register id
module.exports.updateRegisterById = async (req, res,next) => {
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

//delete register by register id
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
