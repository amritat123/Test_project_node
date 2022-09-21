const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'), SALT_WROK_FACTOR = 10;
const config = require('../config');

const modelSchema = new Schema({
    username: {
        type: String,
        unique: true
    },

}, { timestamps: true });

modelSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }

    //generate Salt for my password which need to encrypted
    bcrypt.genSalt(SALT_WROK_FACTOR, function (err, salt) {
        if (err) {
            return next(err);
        }
        // bcrypt hashing function allows us to build a password security platform.
        bcrypt.hash(user.password, salt, function (err, hash)
        {
            if (err)
                return next(err);
            user.password = hash;
            next();

        });
    });

});
// password validation. 
modelSchema .methods.validateToken = async function(token , cb) {

}

