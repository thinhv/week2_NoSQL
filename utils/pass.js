'use strict';
const passport = require('passport')
const passportJWT = require("passport-jwt")
const LocalStrategy = require('passport-local').Strategy
const JWTStrategy   = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

const userModel = require('../models/userModel')

// local strategy for username password login
passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const [user] = await userModel.getUserByEmail(username);
            console.log('Local strategy', user); // result is binary row
            if (user === undefined) {
                return done(null, false, { message: 'Incorrect email.' });
            }
            if (user.password !== password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, { ...user }, { message: 'Logged In Successfully' }); // use spread syntax to create shallow copy to get rid of binary row type
        } catch (err) {
            return done(err);
        }
    }))

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'super_secret'
}, async (payload, done) => {
    try {
        const user = await userModel.getUserById(payload.id)
        return done(null, user)
    } catch (err) {
        return done(err)
    }
}))

module.exports = passport;