import express from 'express';
import { getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob } from '../controllers/job.js';
import { ensureAuthenticated, ensureRecruiter } from '../controllers/authController.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(ensureAuthenticated, getAllJobs).post(ensureRecruiter, createJob);
router.route('/:id').get(ensureAuthenticated, getJob).patch(ensureRecruiter, updateJob).delete(ensureRecruiter, deleteJob);

export default router;
