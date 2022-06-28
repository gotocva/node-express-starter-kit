import express from 'express';

const userV1Router = express.Router();


userV1Router.get('/test', (req, res) => res.successResponse({}, 'User v1 api working'));



module.exports = userV1Router;