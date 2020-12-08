const router				=	require('express').Router();
const health				=	require('./controllers/health');
const userController	    =	require('./controllers/user');

const userValidator		    =	require('./middlewares/userValidator');
const { checkInvalid }		=	require('./middlewares/validationReject');

// System Routes
router.get('/', health.loopback);
router.get('/health', health.check);

// User Routes
router.post('/signup', userValidator.userValidator, checkInvalid, userController.createUser);
router.post('/login', userValidator.loginValidator, checkInvalid, userController.loginUser);
router.get('/api/user', userController.getUsers);
router.get('/api/user/:id', userController.getUserById);
router.put('/api/user/:id', userController.updateUserById);


module.exports = router;