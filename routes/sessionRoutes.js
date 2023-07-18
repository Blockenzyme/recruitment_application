import express from 'express';
import { createSession,
  createSessions,
  getSession,
  updateSession,
  deleteSession } from '../controllers/session.js';

const router = express.Router({ mergeParams: true });

router.route('/').post(createSession);
router.route('/multiple').post(createSessions);
router.route('/:id').get(getSession).patch(updateSession).delete(deleteSession);

export default router;
