import asyncWrapper from '../middlewares/async.js';
import Recruiter from '../models/Recruiter.js';
import User from '../models/User.js';

export const createRecruiter = asyncWrapper(async (req, res) => {
  const { email } = await User.findOne({ _id: req.user.id });
  const recruiter = await Recruiter.create({ recruiterId: req.user.id,
    contactEmail: email,
    username: req.user.username,
    ...req.body });

  res.status(201).json({ recruiter });
});

export const getRecruiter = asyncWrapper(async (req, res) => {
  const { id: recruiterId } = req.params;
  const recruiter = await Recruiter.findOne({ _id: recruiterId }).populate('recruiterId');
  if (!recruiter) {
    return res.status(404).json({ msg: `No Recruiter with id : ${recruiterId}` });
  }

  return res.status(200).json({ recruiter });
});

export const getAllRecruiters = asyncWrapper(async (req, res) => {
  const recruiters = await Recruiter.find({}).populate('recruiterId');
  res.status(200).json({ recruiters });
});

export const updateRecruiter = asyncWrapper(async (req, res) => {
  const { id: recruiterId } = req.params;

  const recruiter = await Recruiter.findOneAndUpdate({ _id: recruiterId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!recruiter) {
    return res.status(404).json({ msg: `No recruiter with id : ${recruiterId}` });
  }

  return res.status(200).json({ recruiter });
});

export const isAuthenticated = async (req, res) => {
  if (req.isAuthenticated()) {
    const reqUsername = req.user.username;
    User.findOne({ username: reqUsername }, (err, docs) => {
      if (!err) {
        if (docs && docs.userType === 'recruiter') {
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

// export { isAuthenticated }; // eslint-disable-line
