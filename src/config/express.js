import express from 'express';
import cors from 'cors';
import path from 'path';

import { config } from '../config/index';
import { RequestLogger } from '../logger/log-all-requests';
import { RequestLogs } from '../logger/logger.model';
import cache from '../utils/cache';

const env = config.env;
export const router = express.Router();
export const app = express();

app.use(RequestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

/**
 * cors middleware options
 * @param {*} req 
 * @param {*} callback 
 */
let corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    if (config.WHITELISTED_DOMAINS.includes(req.header('Origin'))) {
        corsOptions = {
            credentials: true,
            origin: true
        };
    } else {
        corsOptions = {
            origin: false
        };
    }
    callback(null, corsOptions);
};
// cors middleware binding into express application
app.use(cors(corsOptionsDelegate));

app.use((req, res, next) => {
    res.successResponse = (data, message = '', code = 200) => {
        return res.status(code).json({
            status: true,
            statusCode: code,
            message: message,
            data: data
        });
    }
    res.errorResponse = (data, message = '', code = 500) => {
        return res.status(code).json({
            status: false,
            statusCode: code,
            message: message,
            data: data
        });
    }
    res.cache = cache;
    next();
});