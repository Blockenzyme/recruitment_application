import express from 'express';
import { getAllApplications,
  createApplication,
  getApplication,
  updateApplication,
  deleteApplication } from '../controllers/application.js';
import { ensureAuthenticated, ensureUser } from '../controllers/authController.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(ensureAuthenticated, getAllApplications).post(ensureUser, createApplication);
router.route('/:id').get(ensureAuthenticated, getApplication).patch(ensureUser, updateApplication).delete(ensureUser, deleteApplication);

export default router;
