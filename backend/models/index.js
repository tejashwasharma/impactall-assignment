const mongoose = require('mongoose');
require('dotenv').config();
const { MONGODB_URI } = require('../config')[process.env.ENV || 'dev'];

mongoose.connect(MONGODB_URI);
mongoose.set('debug', process.env.ENV === 'dev' ? true : false);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('./user.model'),
    mongoose: mongoose
};