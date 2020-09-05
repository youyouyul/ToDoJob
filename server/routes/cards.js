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
router.put('/update', (req, res) => {
    Card.findOneAndUpdate({ _id: req.body._id }, { $set : {
        startDate: req.body.startDate,
        endDate : req.body.endDate,
        infoDate : req.body.infoDate,
        companyUrl: req.body.companyUrl,
        jobPosition : req.body.jobPosition,
        infoState : req.body.infoState,
        memo : req.body.memo
    }}, (err, card) => {
        if(err)
            return res.status(400).json({ success: false });
        
        return res.status(200).json({ success: true, card });
    })
})

router.delete('/delete', (req, res) => {
    Card.remove({ _id: re1.body._id }, (err) => {
        if(err)
            return res.status(400).json({ success: false });

        return res.status(200).json({ success: true });
    })
})

module.exports = router;