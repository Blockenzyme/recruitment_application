import express from 'express';
import { signin, register } from '../controllers/authRecruiter.js';

const router = express.Router({ mergeParams: true });

router.route('/recruiter-register')
  .get((req, res) => {
    res.send('Recruiter Register Page');
  })
  .post(register);

router.route('/recruiter-login')
  .get((req, res) => {
    res.send('Recruiter Login Page');
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
