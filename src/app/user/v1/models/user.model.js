import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * User schema
 */
const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

export const User = mongoose.model('user', UserSchema);