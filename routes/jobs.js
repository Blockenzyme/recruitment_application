import express from 'express';
import { getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob } from '../controllers/jobs.js';
import { ensureRecruiter } from '../controllers/authRecruiter.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(ensureRecruiter, getAllJobs).post(ensureRecruiter, createJob);
router.route('/:id').get(ensureRecruiter, getJob).patch(ensureRecruiter, updateJob).delete(ensureRecruiter, deleteJob);

export default router;
