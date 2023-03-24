import express from 'express';
import { signin, register } from '../controllers/authUser.js';

const router = express.Router({ mergeParams: true });

router.route('/user-register')
  .get((req, res) => {
    res.send('User Register Page');
  })
  .post(register);

router.route('/user-login')
  .get((req, res) => {
    res.send('User Login Page');
  })
  .post(signin);

router.route('/logout').get((req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
    return null;
  });
});

export default router;
