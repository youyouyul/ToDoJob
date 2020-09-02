const express = require('express');
const router = express.Router();

const { Card } = require('../models/Card');

// card list 조회
router.post('/getCards', (req, res) => {
    Card.find({ "userName" : req.body.userName, "state" : req.body.state }, (err, cards) => {
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
// router.put('/update', (req, res) => {

// })

module.exports = router;