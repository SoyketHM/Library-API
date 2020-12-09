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
router.get('/api/users', userController.getUsers);
router.get('/api/users/:id', userController.getUserById);
router.put('/api/users/:id', userValidator.userValidator, checkInvalid, userController.updateUserById);

// Book Routes
router.post('/api/books', bookValidator.bookValidator, checkInvalid, bookController.createBook);
router.get('/api/books', bookController.getBooks);
router.get('/api/books/:id', bookController.getBookById);
router.put('/api/books/:id', bookValidator.bookValidator, checkInvalid, bookController.updateBookById);
router.delete('/api/books/:id', bookController.deleteBookById);

// Register Book Routes
router.post('/api/register-books', registerBookValidator.registerBookValidator, checkInvalid, regBookController.createRegister);
router.get('/api/register-books', regBookController.getRegisters);
router.get('/api/register-books/:id', regBookController.getRegisterById);
router.put('/api/register-books/:id', registerBookValidator.registerBookValidator, checkInvalid, regBookController.updateRegisterById);
router.delete('/api/register-books/:id', regBookController.deleteRegisterById);

module.exports = router;