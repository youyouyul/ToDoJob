const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    userName: {
        type: String
    },
    companyName: {
        type: String,
        maxLength: 20
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    infoDate: {
        type: Date
    },
    companyUrl: {
        type: String,
        maxLength: 50
    },
    jobPosition: {
        type: String,
        maxLength: 100
    },
    infoState: {
        type: String
    },
    memo: {
        type: String
    },
    cardState: {
        type: String
    }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = { Card };