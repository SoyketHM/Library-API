const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const app = express();
const db = require('./db/db');
const logger = require('morgan');
const helmet = require("helmet");
const routes = require('./routes');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errors');
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/api', auth.jwt);
app.use(errorHandler);
app.use(logger('dev'));
app.use(helmet());
app.use(routes);

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const options = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version: '1.0.0',
            description: 'Simple api for library task'
        },
        basePath: "/api",
        tags: [
            {
                "name": "login"
            },
            {
                "name": "signup",
            },
            {
                "name": "users",
                "description": "Everything about users",
            },
            {
                "name": "books",
                "description": "Everything about books"
            },
            {
                "name": "register-books",
                "description": "Everything about register books"
            }
        ],
    },
    apis: ['./src/controllers/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}...`);
});

