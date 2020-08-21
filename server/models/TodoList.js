const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoListSchema = mongoose.Schema({
    userName: {
        type: String,
        ref: 'User'
    },
    context: {
        type: String,
        maxlength: 20
    },
    todoType: {
        type: String
    },
    checkFlag: {
        type: Boolean
    }
});

const ToDoList = mongoose.model('ToDoList', todoListSchema);

module.exports = { ToDoList };