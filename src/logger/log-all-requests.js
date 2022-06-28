import { RequestLogs } from './logger.model';
import { config } from '../config/index';
import { io } from '../config/server';
import { emitToRoom } from '../utils/socket.io-helper';

const timer = () => {
    const start = new Date();
    return {
        stop: function() {
            const end = new Date();
            return end.getTime() - start.getTime();
        }
    }
};

/**
 * Logger middleware to log all request on debug mode
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const RequestLogger = (req, res, next) => {
    let logTimer = timer();
    res.on('finish', () => {
        const logData = {
            request_host: req.headers['origin'] || req.headers.host,
            request_user_agent: req.headers['user-agent'],
            request_accept: req.headers['accept'],
            request_sec_ch_ua: req.headers['sec-ch-ua'],
            request_sec_ch_ua_mobile: req.headers['sec-ch-ua-mobile'],
            request_sec_ch_ua_platform: req.headers['sec-ch-ua-platform'],
            requested_at: new Date().toISOString().split('T')[0],
            request_method: req.method,
            request_url: req.originalUrl,
            status_code: res.statusCode,
            status_message: res.statusMessage,
            content_length: ` ${res.get('Content-Length') || 0 } bytes `,
            request_processed_time: ` ${logTimer.stop()} ms `
        }
        storeLog(logData);
        emitToRoom('request:logs', 'request_log_message', logData);
        // io.to('request:logs').emit('request_log_message', logData);
        // io.emit('request_log_message', logData);
        if (config.DEBUG == true) console.dir(logData);
    });

    next();
}


const storeLog = async(logData) => {
    const requestLogs = new RequestLogs(logData);
    requestLogs.save((r, e) => {});
}