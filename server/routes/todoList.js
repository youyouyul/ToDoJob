const express = require('express');
const router = express.Router();

const { ToDoList } = require('../models/TodoList');

// 리스트 등록
router.post('/insert', (req, res) => {
    const todo = new ToDoList(req.body);

    todo.save(function(err){
        if(err){
            console.log(err);
            return res.status(400).json({ success: false });
        }

        return res.status(200).json({ success: true });
    });
});

// ToDo 리스트 조회
router.get('/getTodoList', (req, res) => {
    ToDoList.find().exec((err, todoList) => {
        if(err) 
            return res.status(400).senc(err);

        return res.status(200).json({ success: true, todoList });
    });
})

module.exports = router;