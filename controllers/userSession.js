import passport from 'passport';
import UserSession from '../models/userSession.js';

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
  const existingUser = await UserSession.find({ username: req.body.username });
  if (existingUser.length !== 0) {
    res.send({ msg: 'duplicate' });
    return;
  }
  const newUser = new UserSession({
    username: req.body.username,
    email: req.body.email,
  });
  UserSession.register(newUser, req.body.password, (err, user) => { // eslint-disable-line no-unused-vars
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

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.sendStatus(401);
};

export { signin, register, ensureAuthenticated };
