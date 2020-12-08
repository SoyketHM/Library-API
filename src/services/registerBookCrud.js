const RegisterBook 	= require('../models/RegisterBook');
const _p    = require('../helpers/simpleasync');

//create register
module.exports.createRegister = async RegisterInfo => {
	return new Promise(async (resolve, reject) => {
		const [error, saveRegisterInfo] = await _p(RegisterBook.create(RegisterInfo));

		if (!error) {
			return resolve(saveRegisterInfo);
		} else {
			return reject(error.message);
		}
	});
};

//get all registers || can use query string
module.exports.getRegisters = async query => {
	return new Promise(async (resolve, reject) => {
		const pageNum = query.page ? query.page : 1;
		const Limit = 10;
		const skip = Limit * (pageNum - 1);

		if(query.page) delete query.page;

		const [error, registers] = await _p(RegisterBook.find( query )
			.limit(Limit)
			.skip(skip)
			.sort({createdAt: 'desc'}));

		if(!error) {
			return resolve(registers);
		} else {
			return reject(error.message);
		}
	});
};

//get register by register id
module.exports.getRegisterById = async id => {
	return new Promise(async (resolve, reject) => {
		const [error, register] = await _p(RegisterBook.findOne({ _id: id }));

		if(!error) {
			return resolve(register);
		} else {
			return reject(error.message);
		}
	});
};

//update register by register id
module.exports.updateRegisterById = async (id, bookInfo) => {
	return new Promise(async (resolve, reject) => {
		const [error, updateRegisterInfo] = await _p(RegisterBook.findOneAndUpdate({ _id: id }, bookInfo, { new: true	}));

		if (!error) {
			return resolve(updateRegisterInfo);
		} else {
			return reject(error.message);
		}
	});
};

//delete register by register id
module.exports.deleteRegisterById = async (id, bookInfo) => {
	return new Promise(async (resolve, reject) => {
		const [error, deleteRegisterInfo] = await _p(RegisterBook.findOneAndDelete({ _id: id }));

		if (!error) {
			return resolve(deleteRegisterInfo);
		} else {
			return reject(error.message);
		}
	});
};
