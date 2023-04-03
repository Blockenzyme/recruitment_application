import passport from 'passport';
import User from '../models/User.js';

const signin = async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  req.login(user, (err) => {
    if (err) {
      /* eslint-disable no-console */
      res.status(401).send(err.message);
      /* eslint-enable no-console */
    } else {
      passport.authenticate('userlocal')(req, res, () => {
        res.status(200).send({ done: true });
      });
    }
  });
};

const register = async (req, res) => {
  const existingUser = await User.find({ username: req.body.username });
  if (existingUser.length !== 0) {
    res.send({ msg: 'duplicate' });
    return;
  }
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    userType: 'applicant',
  });
  User.register(newUser, req.body.password, (err, user) => { // eslint-disable-line no-unused-vars
    if (err) {
      /* eslint-disable no-console */
      res.status(500).send(err.message);
      /* eslint-enable no-console */
    } else {
      passport.authenticate('userlocal')(req, res, () => {
        res.status(200).send({ done: true });
      });
    }
  });
};

const ensureUser = (req, res, next) => {
  // ensure authenticated user exists with admin role,
  // otherwise send 401 response status
  if (req.user) {
    User.findOne({ username: req.user.username }, (err, docs) => {
      if (!err) {
        if (docs && docs.userType === 'applicant') {
          return next();
        }
        return res.sendStatus(404);
      }
      return res.sendStatus(500);
    });
  } else {
    return res.sendStatus(401);
  }
  return null;
};

const ensureRecruiter = (req, res, next) => {
  // ensure authenticated user exists with admin role,
  // otherwise send 401 response status
  if (req.user) {
    User.findOne({ username: req.user.username }, (err, docs) => {
      if (!err) {
        if (docs && docs.userType === 'recruiter') {
          return next();
        }
        return res.sendStatus(404);
      }
      return res.sendStatus(500);
    });
  } else {
    return res.sendStatus(401);
  }
  return null;
};

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.send(401);
};

export { signin, register, ensureUser, ensureAuthenticated, ensureRecruiter };
