import LocalStrategy from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import { generateFromEmail } from 'unique-username-generator';
import User from '../models/User.js';

export default (passport) => {
  // Local Strategy for User
  passport.use('userlocal', new LocalStrategy(User.authenticate()));

  passport.serializeUser((user, cb) => {
    process.nextTick(() => {
      return cb(null, {
        id: user.id,
        username: user.username,
        picture: user.picture,
      });
    });
  });

  passport.deserializeUser((user, cb) => {
    process.nextTick(() => { return cb(null, user); });
  });

  // From passport-google-oauth20 documentation. Code at this place only
  passport.use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/google/callback',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },
    ((accessToken, refreshToken, profile, cb) => {
    // console.log(profile);
      User.findOrCreate({ googleId: profile.id }, { username: generateFromEmail(profile.emails[0].value, 4), email: profile.emails[0].value, userType: 'applicant' }, (err, user) => {
        return cb(err, user);
      });
    }),
  ));

  // From passport-facebook documentation
  passport.use(new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/facebook/callback',
      profileFields: ['id', 'emails', 'name'],
    },
    ((accessToken, refreshToken, profile, cb) => {
      User.findOrCreate({ facebookId: profile.id }, { username: generateFromEmail(profile.emails[0].value, 4), email: profile.emails[0].value, userType: 'applicant' }, (err, user) => {
        return cb(err, user);
      });
    }),
  ));

  passport.use(new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_KEY,
      clientSecret: process.env.LINKEDIN_SECRET,
      callbackURL: 'http://127.0.0.1:5000/auth/linkedin/callback',
      scope: ['r_emailaddress', 'r_liteprofile'],
      state: true,
    },
    ((accessToken, refreshToken, profile, cb) => {
      User.findOrCreate({ linkedinId: profile.id }, { username: generateFromEmail(profile.emails[0].value, 4), email: profile.emails[0].value, userType: 'applicant' }, (err, user) => {
        return cb(err, user);
      });
    }),
  ));
};
