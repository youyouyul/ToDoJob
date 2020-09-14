const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true,
        maxLength: 20
    },
    startDate: {
        type: Date,
        require: true
    },
    endDate: {
        type: Date,
        require: true
    },
    infoDate: {
        type: Date
    },
    companyUrl: {
        type: String,
        require: true,
        maxLength: 50
    },
    jobPosition: {
        type: String,
        require: true,
        maxLength: 50
    },
    process: {
        type: Number,
        default: 0
    },
    state: {
        type: Number,
        default: 0
    },
    result: {
        type: Number,
        default: 0
    }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = { Card };