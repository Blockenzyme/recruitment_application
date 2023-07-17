import express from 'express';
import { createSession,
  getSession,
  updateSession,
  deleteSession } from '../controllers/session.js';

const router = express.Router({ mergeParams: true });

router.route('/').post(createSession);
router.route('/multiple').post(createSession);
router.route('/:id').get(getSession).patch(updateSession).delete(deleteSession);

export default router;
