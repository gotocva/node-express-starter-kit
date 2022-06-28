const dotenv = require('dotenv');
const env = dotenv.config().parsed;
export const config = require(`../environments/${env.ENVIRONMENT}` || '../environments/development');