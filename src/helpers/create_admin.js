const User = require('../models/User');
const _p = require('../helpers/simpleasync');

//create user
module.exports.createAdmin = async () => {
    const [error, admin] = await _p(User.findOne({ email: "admin@gmail.com" }));
    if (!admin) {
        const userInfo = {
            name: "Admin",
            email: "admin@gmail.com",
            password: "admin",
            type: "admin",
            status: "active"
        }
        const [error, saveUserInfo] = await _p(User.create(userInfo));

        if (!error) {
            console.log('admin user created');
            return;
        } else {
            console.log(error.message);
            return;
        }
    }
    if (error) console.log(error.message);

    console.log('admin already exists');
    return;
};