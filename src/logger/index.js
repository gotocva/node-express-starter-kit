import express from 'express';
import { RequestLogs } from "./logger.model";

const logRouter = express.Router();

logRouter.get('/api/logs', async(req, res) => {

    const perPage = req.query.per_page || 10;
    const currentPage = req.query.currentPage || 0;

    const filter = {};

    if (req.query.date) filter['requested_at'] = req.query.date;

    const recordsCount = await RequestLogs.count(filter).exec();

    const totalPages = (recordsCount > perPage) ? Math.round(recordsCount / perPage) : 1;

    const logs = await RequestLogs.find(filter)
        .limit(perPage)
        .skip(perPage * currentPage)
        .sort({
            created_at: 'desc'
        })
        .exec();

    const response = {
        logs: logs,
        current_page: currentPage,
        total_pages: totalPages,
        total_records: recordsCount
    }
    res.successResponse(response);
});


module.exports = logRouter;