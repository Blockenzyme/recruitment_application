import JobApplicant from '../models/JobApplicant.js';
import asyncWrapper from '../middlewares/async.js';

export const getAllJobApplicants = asyncWrapper(async (req, res) => {
  const jobApplicants = await JobApplicant.find({});
  res.status(200).json({ jobApplicants });
});

export const createJobApplicant = asyncWrapper(async (req, res) => {
  const jobApplicant = await JobApplicant.create(req.body);

  res.status(201).json({ jobApplicant });
});

export const getJobApplicant = asyncWrapper(async (req, res) => {
  const { id: jobApplicantID } = req.params;
  const jobApplicant = await JobApplicant.findOne({ _id: jobApplicantID });
  if (!jobApplicant) {
    return res.status(404).json({ msg: `No jobApplicant with id : ${jobApplicantID}` });
  }

  return res.status(200).json({ jobApplicant });
});

export const updateJobApplicant = asyncWrapper(async (req, res) => {
  const { id: jobApplicantID } = req.params;

  const jobApplicant = await JobApplicant.findOneAndUpdate({ _id: jobApplicantID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!jobApplicant) {
    return res.status(404).json({ msg: `No jobApplicant with id : ${jobApplicantID}` });
  }

  return res.status(200).json({ jobApplicant });
});
