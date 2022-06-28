const dotenv = require('dotenv');
import path from 'path';
const env = dotenv.config().parsed;

const config = {
    ENV: env,
    DEBUG: env.DEBUG || true,
    HOME_PATH: path.join(__dirname, '../'),
    WHITELISTED_DOMAINS: [
        'http://localhost:4200'
    ],
    PORT: env.PORT || 3000,
    HOST: 'localhost',
    MONGODB_HOST: env.MONGODB_HOST || '127.0.0.1',
    MONGODB_PORT: env.MONGODB_PORT || 27017,
    MONGODB_DB_NAME: env.MONGODB_DB_NAME || 'sample',
    MONGODB_USERNAME: env.MONGODB_USERNAME || 'NULL',
    MONGODB_PASSWORD: env.MONGODB_PASSWORD || 'NULL',
    MONGODB_DEBUGGING: env.MONGODB_DEBUGGING || false
};


module.exports = config;