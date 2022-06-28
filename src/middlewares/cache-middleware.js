import cache from '../utils/cache';

/**
 * cache api requests to serve faster
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const cacheRequestMiddleware = (req, res, next) => {
    if (req.method == 'GET' && cache.get(req.originalUrl)) {
        return res.successResponse(cache.get(req.originalUrl));
    } else {
        next();
    }
}