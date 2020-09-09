const express = require('express');
const router = express.Router();

const { Resume } = require('../models/Resume');

// resume 조회
router.get('/:userName/:companyId', (req, res) => {
    Resume.find({ "userName" : req.params.userName, "companyId": req.params.companyId },
        (err, resumeList) => {
            if(err)
                return res.status(400).send(err);
            
            return res.status(200).json({ success: true, resumeList });
    })
})

// resume 등록

// resume 수정

// resume 삭제