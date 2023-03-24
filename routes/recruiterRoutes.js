import express from 'express';
import User from '../models/User.js';

const router = express.Router({ mergeParams: true });

router.route('/recruiter/is-authenticated')
  .get((req, res) => {
    if (req.isAuthenticated()) {
      const reqUsername = req.user.username;
      User.findOne({ username: reqUsername }, (err, docs) => {
        if (!err) {
          if (docs && docs.userType === 'recruiter') {
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
    const isAuthenticated = await axios.get(`some-url/recruiter/is-authenticated`);
    if (!isAuthenticated) {
      replace({
        pathname: "/recruiter-login",
        state: {nextPathname: nextState.location.pathname}
      });
    }
    next();
  }

*/
