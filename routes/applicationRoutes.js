import express from 'express';
import { getAllApplications,
  createApplication,
  getApplication,
  updateApplication,
  deleteApplication } from '../controllers/application.js';
import { ensureRecruiter } from '../controllers/authRecruiter.js';
import { ensureAuthenticated } from '../controllers/authUser.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(ensureAuthenticated, getAllApplications).post(ensureRecruiter, createApplication);
router.route('/:id').get(ensureAuthenticated, getApplication).patch(ensureRecruiter, updateApplication).delete(ensureRecruiter, deleteApplication);

export default router;
