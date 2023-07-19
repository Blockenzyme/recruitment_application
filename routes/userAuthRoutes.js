import express from 'express';
import User from '../models/User.js';
import { signin, register, multipleRegister, googleoauth, facebookoauth, googleoauthcallback, facebookoauthcallback, linkedinoauth, linkedinoauthcallback } from '../controllers/authController.js';

const router = express.Router({ mergeParams: true });

router.route('/register')
  .post(register);

router.route('/register/all')
  .post(multipleRegister);

router.route('/login')
  .get((req, res) => {
    res.send('Login Page');
  })
  .post(signin);

router.route('/auth/google')
  .get(googleoauth);

router.route('/auth/facebook')
  .get(facebookoauth);

router.route('/auth/linkedin')
  .get(linkedinoauth);

router.route('/auth/google/callback')
  .get(googleoauthcallback, (req, res) => {
    res.send({ done: true });
  });

router.route('/auth/facebook/callback')
  .get(facebookoauthcallback, (req, res) => {
    res.send({ done: true });
  });

router.route('/auth/linkedin/callback')
  .get(linkedinoauthcallback, (req, res) => {
    res.send({ done: true });
  });

router.route('/logout').get((req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).send({ done: true });
    return null;
  });
});

router.route('/type/:type')
  .patch((req, res) => {
    const userType = req.params.type;
    // eslint-disable-next-line no-underscore-dangle
    User.findOneAndUpdate({ _id: req.user.id }, { userType }, (err) => {
      if (err) {
        res.status(500).end(err.message);
      } else {
        res.status(200).send({ type: userType });
      }
    });
  });

export default router;
