import express from 'express';
import { getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob } from '../controllers/jobs.js';
import { ensureRecruiter } from '../controllers/authRecruiter.js';
import { ensureAuthenticated } from '../controllers/authUser.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(ensureAuthenticated, getAllJobs).post(ensureRecruiter, createJob);
router.route('/:id').get(ensureAuthenticated, getJob).patch(ensureRecruiter, updateJob).delete(ensureRecruiter, deleteJob);

export default router;
