import express from 'express';
import User from '../models/User.js';

const router = express.Router({ mergeParams: true });

router.route('/user/is-authenticated')
  .get((req, res) => {
    if (req.isAuthenticated()) {
      const reqUsername = req.user.username;
      User.findOne({ username: reqUsername }, (err, docs) => {
        if (!err) {
          if (docs && docs.userType === 'applicant') {
            res.send(true);
          } else {
            res.send(false);
          }
        }
      });
    } else {
      res.send(false);
    }
  });

export default router;

/*
  <Route path="/search" component={Search} onEnter={requireAuth} />
  requireAuth = async (nextState, replace, next) => {
    const isAuthenticated = await axios.get(`some-url/user/is-authenticated`);
    if (!isAuthenticated) {
      replace({
        pathname: "/user-login",
        state: {nextPathname: nextState.location.pathname}
      });
    }
    next();
  }

*/
