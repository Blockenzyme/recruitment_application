import express from 'express';
import { getAllJobApplicants,
  createJobApplicant,
  getJobApplicant,
  updateJobApplicant } from '../controllers/jobApplicant.js';

import { ensureRecruiter } from '../controllers/authRecruiter.js';
import { ensureUser } from '../controllers/authUser.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(ensureRecruiter, getAllJobApplicants).post(ensureUser, createJobApplicant);
router.route('/:id').get(ensureRecruiter, getJobApplicant).patch(ensureUser, updateJobApplicant);

export default router;
