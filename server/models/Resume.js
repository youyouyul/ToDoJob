const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    companyId: {
        type: Schema.ObjectId,
        ref: 'Card',
        require: true
    },
    title: {
        type: String,
        maxlength: 100,
        require: true
    },
    context: {
        type: String
    },
    limit: {
        type: Number,
        require: true
    }
})

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = { Resume };