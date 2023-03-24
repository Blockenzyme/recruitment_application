import passport from 'passport';
import User from '../models/User.js';
import JobApplicant from '../models/JobApplicant.js';

const signin = async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  req.login(user, (err) => {
    if (err) {
      /* eslint-disable no-console */
      console.log(err);
      /* eslint-enable no-console */
      res.redirect('/user-login');
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
    userType: 'applicant',
  });
  User.register(newUser, req.body.password, (err, user) => { // eslint-disable-line no-unused-vars
    if (err) {
      /* eslint-disable no-console */
      console.log(err);
      /* eslint-enable no-console */
      res.redirect('/user-register');
    } else {
      passport.authenticate('userlocal')(req, res, () => {
        const newJobApplicant = new JobApplicant({
          /* eslint no-underscore-dangle: 0 */
          userId: req.user._id,
          name: req.body.name,
          education: req.body.education,
          skills: req.body.skills,
        });
        newJobApplicant.save();
        res.send('Successfully registered!');
      });
    }
  });
};

export { signin, register };
