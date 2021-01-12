const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = Schema({
    fullname: { type: String },
    auth: { type: String },
    username: { type: String },
    password: { type: String },
});

const Users = mongoose.model('Users', UsersSchema);
module.exports = Users;
