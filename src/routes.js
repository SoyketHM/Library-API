const router				    =	require('express').Router();
const health				    =	require('./controllers/health');
const userController	        =	require('./controllers/user');
const bookController	        =	require('./controllers/book');
const regBookController	        =	require('./controllers/registerBook');

const userValidator		        =	require('./middlewares/userValidator');
const bookValidator		        =	require('./middlewares/bookValidator');
const registerBookValidator		=	require('./middlewares/registerBookValidator');
const { checkInvalid }		    =	require('./middlewares/validationReject');

// System Routes
router.get('/', health.loopback);
router.get('/health', health.check);

// User Routes
router.post('/login', userValidator.loginValidator, checkInvalid, userController.loginUser);
router.post('/api/signup', userValidator.userValidator, checkInvalid, userController.createUser);
router.get('/api/user', userController.getUsers);
router.get('/api/user/:id', userController.getUserById);
router.put('/api/user/:id', userValidator.userValidator, checkInvalid, userController.updateUserById);

// Book Routes
router.post('/api/book', bookValidator.bookValidator, checkInvalid, bookController.createBook);
router.get('/api/book', bookController.getBooks);
router.get('/api/book/:id', bookController.getBookById);
router.put('/api/book/:id', bookValidator.bookValidator, checkInvalid, bookController.updateBookById);
router.delete('/api/book/:id', bookController.deleteBookById);

// Register Book Routes
router.post('/api/register-book', registerBookValidator.registerBookValidator, checkInvalid, regBookController.createRegister);
router.get('/api/register-book', regBookController.getRegisters);
router.get('/api/register-book/:id', regBookController.getRegisterById);
router.put('/api/register-book/:id', registerBookValidator.registerBookValidator, checkInvalid, regBookController.updateRegisterById);
router.delete('/api/register-book/:id', regBookController.deleteRegisterById);

module.exports = router;