import { app } from "../config/express";
import logRouter from '../logger/index';
import userV1Router from '../app/user/v1/routes';
import { cacheRequestMiddleware } from '../middlewares/cache-middleware';

// global middlewares applicable for every requests
const globalMiddlewares = [cacheRequestMiddleware];

/**
 * Bind all application routes below
 * 
 */

// bind logs api to retrieve logs data from database
app.use('/', [...globalMiddlewares], logRouter);

// User module routes binding
app.use('/api/v1/user', [...globalMiddlewares], userV1Router);

/**
 * 404 not found exception handler
 */
app.use((req, res, next) => {
    return res.errorResponse({}, 'Requested route not found', 404);
});

module.exports = app;