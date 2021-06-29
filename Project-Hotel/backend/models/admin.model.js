const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: { type: String, required: true, trim: true},
    password: { type: String, required: true, min:6}
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;