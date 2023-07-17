/* eslint no-underscore-dangle: 0 */
import Job from '../models/Job.js';
import asyncWrapper from '../middlewares/async.js';

const getAllJobs = asyncWrapper(async (req, res) => {
  // eslint-disable-next-line max-len
  // localhost:5000/api/v1/jobs/?limit=2&next=590e9abd4abbf1165862d342&jobType=Full Time&minSalary=10000&maxSalary=50000&minDuration=3&maxDuration=6&location=Pune&keyword=backend&sort=-salary,duration
  // eslint-disable-next-line max-len
  const { jobType, minSalary, maxSalary, minDuration, maxDuration, location, minExperience, maxExperience, keyword, sort, limit } = req.query;
  const queryObject = {};

  if (jobType) {
    queryObject.jobType = jobType;
  }

  if (minExperience) {
    if (maxExperience) {
      queryObject.experience = { $gte: minExperience, $lte: maxExperience };
    } else {
      queryObject.experience = { $gte: minExperience };
    }
  } else if (maxExperience) {
    queryObject.experience = { $lte: maxExperience };
  }

  if (minSalary) {
    if (maxSalary) {
      queryObject.salary = { $gte: minSalary, $lte: maxSalary };
    } else {
      queryObject.salary = { $gte: minSalary };
    }
  } else if (maxSalary) {
    queryObject.salary = { $lte: maxSalary };
  }

  if (minDuration) {
    if (maxDuration) {
      queryObject.duration = { $gte: minDuration, $lte: maxDuration };
    } else {
      queryObject.duration = { $gte: minDuration };
    }
  } else if (maxDuration) {
    queryObject.duration = { $lte: maxDuration };
  }

  let sortFix = '';
  if (sort) {
    sortFix = sort.replace(',', ' ');
    sortFix += ' -_id';
  } else {
    sortFix = '-_id';
  }

  if (req.query.next) {
    const jobs = await Job.find({
      _id: { $lt: req.query.next },
      $and: [{ $or: [{ city: new RegExp(location, 'i') }, { country: new RegExp(location, 'i') }] }, { $or: [{ title: new RegExp(keyword, 'i') }, { skillsets: { $all: [new RegExp(keyword, 'i')] } }] }],
      ...queryObject,
    }).populate('recruiterId').sort(sortFix).limit(limit);

    const next = jobs.length && jobs[jobs.length - 1]._id;
    res.status(200).json({ jobs, next });
  } else {
    const jobs = await Job.find({
      $and: [{ $or: [{ city: new RegExp(location, 'i') }, { country: new RegExp(location, 'i') }] }, { $or: [{ title: new RegExp(keyword, 'i') }, { skillsets: { $all: [new RegExp(keyword, 'i')] } }] }],
      ...queryObject,
    }).populate('recruiterId').sort(sortFix).limit(limit);

    const next = jobs.length && jobs[jobs.length - 1]._id;
    res.status(200).json({ jobs, next });
  }
});

const createJob = asyncWrapper(async (req, res) => {
  const job = await Job.create({ recruiterId: req.user.id, ...req.body });

  res.status(201).json({ job });
});

const getJob = asyncWrapper(async (req, res) => {
  const { id: jobID } = req.params;
  const job = await Job.findOne({ _id: jobID }).populate('recruiterId');
  if (!job) {
    return res.status(404).json({ msg: `No job with id : ${jobID}` });
  }

  return res.status(200).json({ job });
});

const deleteJob = asyncWrapper(async (req, res) => {
  const { id: jobID } = req.params;
  const job = await Job.findOneAndDelete({ _id: jobID });
  if (!job) {
    return res.status(404).json({ msg: `No job with id : ${jobID}` });
  }
  return res.status(200).json({ job });
});

const updateJob = asyncWrapper(async (req, res) => {
  const { id: jobID } = req.params;

  const job = await Job.findOneAndUpdate({ _id: jobID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!job) {
    return res.status(404).json({ msg: `No job with id : ${jobID}` });
  }

  return res.status(200).json({ job });
});

export { getAllJobs, createJob, getJob, updateJob, deleteJob };
