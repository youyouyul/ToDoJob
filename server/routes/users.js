const express = require('express');
const router = express.Router();

const { User } = require('../models/User');
const { auth } = require('../middleware/auth');

//인증 처리
router.get('/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        email: req.user.email,
        name: req.user.name,
        isAuth: true
    });
})

// Register
router.post('/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err});

        return res.status(200).json({ success: true});
    })
})

// Login
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "해당 정보의 사용자가 존재하지 않습니다."
            });
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) {
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호가 틀렸습니다."
                });
            }

            user.generateToken((err, user) => {
                if(err) return status(400).send(err);

                res.cookie("x_auth", user.token)
                    .status(200)
                    .json({ loginSuccess: true, name: user.name });
            });
        });
    });
})

// Logout
router.get('/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { $set : { token: "" }}, (err, user) => {
        if(err) return res.json({ success: false, err });

        return res.status(200).send({
            success: true
        });
    });
})

module.exports = router;