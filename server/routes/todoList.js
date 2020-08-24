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

        return res.status(200).json({ success: true , todo});
    });
});

// ToDo 리스트 조회
router.get('/getTodoList', (req, res) => {
    ToDoList.find({ userName: req.body.userName }).exec((err, todoList) => {
        if(err) 
            return res.status(400).send(err);

        return res.status(200).json({ success: true, todoList });
    });
})

// 리스트 수정
router.post('/update', (req, res) => {
    ToDoList.findOneAndUpdate({ _id: req.body._id }, { checkFlag: !req.body.checkFlag }, (err, todoList) => {
        if(err)
            return res.json({ success: false, err});

        return res.status(200).json({ success: true, todoList });
    });
})

// 리스트 삭제
router.post('/delete', (req, res) => {
    ToDoList.findOneAndRemove({ _id: req.body._id }, (err, todoList) => {
        if(err)
            return res.json({ success: false, err});

        return res.status(200).json({ success: true, todoList });
    });
})

module.exports = router;