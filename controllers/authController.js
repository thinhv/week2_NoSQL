'use strict';
const jwt = require('jsonwebtoken');
const passport = require('passport');

const login = (req, res, next) => {
    passport.authenticate('local', { session: false }, (error, user, info) => {
        if (error || !user) {
            console.log(error)
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user
            })
        }
        
        const token = jwt.sign(user, 'super_secret')
        return res.json({ user, token })

    })(req, res)
};

module.exports = {
  login,
};
