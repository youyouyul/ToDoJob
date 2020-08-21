const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 10,
        unique: 1
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 8
    },
    comment: {
        type: String,
        maxlength: 50
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function(next) {
    let user = this;

    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err);

                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err);

        cb(null, isMatch);
    });
}

userSchema.methods.generateToken = function(cb) {
    let user = this;

    let token = jwt.sign(user._id.toHexString(), 'secretToken');

    user.token = token;

    user.save(function(err, user) {
        if(err) return cb(err);

        cb(null, user);
    })
}

userSchema.statics.findByToken = function(token, cb) {
    let user = this;

    jwt.verify(token, 'scretToken', function(err, decoded) {
        user.findOne({ "_id" : decoded, "token": token }, function(err, user) {
            if(err) cb(err);

            cb(null, user);
        });
    });
}

const User = mongoose.model('User', userSchema);

module.exports = { User };