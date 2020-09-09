const mongoose = require('mongoose');

const todoListSchema = mongoose.Schema({
    userName: {
        type: String
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