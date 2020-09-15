const express = require('express');
const router = express.Router();

const { Card } = require('../models/Card');

// card list 조회
router.get('/:userName', (req, res) => {
    Card.find({ "userName" : req.params.userName }, (err, cards) => {
        if(err)
            return res.status(400).json({ success: false });
        
        return res.status(200).json({ success: true, cards });
    });
})

// card 등록
router.post('/insert', (req, res) => {
    const card = new Card(req.body);

    card.save((err) => {
        if(err)
            return res.status(400).json({ success: false });

        return res.status(200).json({ success: true, card});
    });
})

// card 수정
router.patch('/update/:_id', (req, res) => {
    Card.findByIdAndUpdate({ _id: req.params._id }, { $set : {
        companyUrl: req.body.companyUrl,
        jobPosition : req.body.jobPosition,
        startDate: req.body.startDate,
        endDate : req.body.endDate,
        infoDate : req.body.infoDate
    }}, (err, card) => {
        if(err)
            return res.status(400).json({ success: false });
        
        return res.status(200).json({ success: true, card });
    })
})

// card state 수정
router.patch('/update/state/:_id', (req, res) => {
    Card.findByIdAndUpdate({ _id: req.params._id }, { $set : {
        endDate : req.body.endDate,
        infoDate : req.body.infoDate,
        process : req.body.process,
        result: req.body.result
    }}, (err, card) => {
        if(err)
            return res.status(400).json({ success: false });
        
        return res.status(200).json({ success: true, card });
    })
})

// card 삭제
router.delete('/delete/:_id', (req, res) => {
    Card.findByIdAndDelete({ _id: req.params._id }, (err) => {
        if(err)
            return res.status(400).json({ success: false });

        return res.status(200).json({ success: true });
    })
})

module.exports = router;