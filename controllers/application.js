import Application from '../models/Application.js';
import asyncWrapper from '../middlewares/async.js';

export const getAllApplications = asyncWrapper(async (req, res) => {
  const applications = await Application.find({});
  res.status(200).json({ applications });
});

export const createApplication = asyncWrapper(async (req, res) => {
  const application = await Application.create(req.body);

  res.status(201).json({ application });
});

export const getApplication = asyncWrapper(async (req, res) => {
  const { id: applicationID } = req.params;
  const application = await Application.findOne({ _id: applicationID });
  if (!application) {
    return res.status(404).json({ msg: `No application with id : ${applicationID}` });
  }

  return res.status(200).json({ application });
});

export const deleteApplication = asyncWrapper(async (req, res) => {
  const { id: applicationID } = req.params;
  const application = await Application.findOneAndDelete({ _id: applicationID });
  if (!application) {
    return res.status(404).json({ msg: `No application with id : ${applicationID}` });
  }
  return res.status(200).json({ application });
});

export const updateApplication = asyncWrapper(async (req, res) => {
  const { id: applicationID } = req.params;

  const application = await Application.findOneAndUpdate({ _id: applicationID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!application) {
    return res.status(404).json({ msg: `No application with id : ${applicationID}` });
  }

  return res.status(200).json({ application });
});
