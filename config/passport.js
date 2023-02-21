import LocalStrategy from "passport-local";
import User from "../models/User.js";

export default function(passport) {
    //Local Strategy for User
    passport.use('userlocal', new LocalStrategy(User.authenticate()));

    passport.serializeUser(function(user, cb) {
        process.nextTick(function() {
            return cb(null, {
            id: user.id,
            username: user.username,
            picture: user.picture
            });
        });
    });

    passport.deserializeUser(function(user, cb) {
        process.nextTick(function() {
            return cb(null, user);
        });
    });
}