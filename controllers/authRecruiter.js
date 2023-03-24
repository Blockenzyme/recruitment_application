import passport from 'passport';
import Recruiter from '../models/Recruiter.js';
import User from '../models/User.js';

const signin = async (req, res) => {
  const recruiter = {
    username: req.body.username,
    password: req.body.password,
  };
  req.login(recruiter, (err) => {
    if (err) {
      /* eslint-disable no-console */
      console.log(err);
      /* eslint-enable no-console */
      res.redirect('/recruiter-login');
    } else {
      passport.authenticate('userlocal')(req, res, () => {
        res.send('Successfully logged in!');
      });
    }
  });
};

const register = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    userType: 'recruiter',
  });
  User.register(newUser, req.body.password, (err, user) => { // eslint-disable-line no-unused-vars
    if (err) {
      /* eslint-disable no-console */
      console.log(err);
      /* eslint-enable no-console */
      res.redirect('/recruiter-register');
    } else {
      passport.authenticate('userlocal')(req, res, () => {
        const newRecruiter = new Recruiter({
          /* eslint no-underscore-dangle: 0 */
          userId: req.user._id,
          name: req.body.name,
          username: req.body.username,
          contactEmail: req.body.email,
          bio: req.body.bio,
          ats: req.body.ats,
          roles: req.body.roles,
          fund: req.body.fund,
        });
        newRecruiter.save();
        res.send('Successfully registered!');
      });
    }
  });
};

export { signin, register };
