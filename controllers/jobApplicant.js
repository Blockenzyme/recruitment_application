import JobApplicant from '../models/JobApplicant.js';
import asyncWrapper from '../middlewares/async.js';
import User from '../models/User.js';

export const getAllJobApplicants = asyncWrapper(async (req, res) => {
  const jobApplicants = await JobApplicant.find({}).populate('applicantId');
  res.status(200).json({ jobApplicants });
});

export const createJobApplicant = asyncWrapper(async (req, res) => {
  const jobApplicant = await JobApplicant.create({ applicantId: req.user.id,
    ...req.body });

  res.status(201).json({ jobApplicant });
});

export const getJobApplicant = asyncWrapper(async (req, res) => {
  const { id: jobApplicantID } = req.params;
  const jobApplicant = await JobApplicant.findOne({ _id: jobApplicantID }).populate('applicantId');
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

export const isAuthenticated = async (req, res) => {
  if (req.isAuthenticated()) {
    const reqUsername = req.user.username;
    User.findOne({ username: reqUsername }, (err, docs) => {
      if (!err) {
        if (docs && docs.userType === 'applicant') {
          res.send(true);
        } else {
          res.send(false);
        }
      }
    });
  } else {
    res.send(false);
  }
};
