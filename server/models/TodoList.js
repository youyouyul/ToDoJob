const mongoose = require('mongoose');

const todoListSchema = mongoose.Schema({
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

module.exports = { ToDoList };