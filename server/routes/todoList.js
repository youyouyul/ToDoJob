const express = require('express');
const router = express.Router();

const { ToDoList } = require('../models/TodoList');

// Job 리스트 조회
router.get('/todoJob', (req, res) => {
    ToDoList.find({"todoType" : "JOB"}).exec((err, todoJob) => {
        if(err) 
            return res.status(400).senc(err);

        return res.status(200).json({ success: true, todoJob });
    });
})

// Today 리스트 조회
router.get('/todoToday', (req, res) => {
    ToDoList.find({"todoType" : "TODAY"}).exec((err, todoToday) => {
        if(err) 
            return res.status(400).senc(err);

        return res.status(200).json({ success: true, todoToday });
    });
})

module.exports = router;