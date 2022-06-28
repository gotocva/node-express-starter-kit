import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DevLogsSchema = new Schema({


}, { versionKey: false });
export const DevLogs = mongoose.model('developer_logs', DevLogsSchema);

/**
 * Log schema
 */
const RequestLogsSchema = new Schema({
    request_host: String,
    request_user_agent: String,
    request_accept: String,
    request_sec_ch_ua: String,
    request_sec_ch_ua_mobile: String,
    request_sec_ch_ua_platform: String,
    requested_at: String,
    request_method: String,
    request_url: String,
    status_code: String,
    status_message: String,
    content_length: String,
    request_processed_time: String,
    log: String,
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

export const RequestLogs = mongoose.model('request_logs', RequestLogsSchema);