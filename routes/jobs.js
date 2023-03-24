import express from 'express';
import { getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob } from '../controllers/jobs.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

export default router;
