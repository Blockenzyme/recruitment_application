import express from 'express';
import { isAuthenticated } from '../controllers/recruiter.js';

const router = express.Router({ mergeParams: true });

router.route('/is-authenticated').get(isAuthenticated);

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
