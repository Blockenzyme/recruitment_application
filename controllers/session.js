import Session from '../models/Session.js';
import asyncWrapper from '../middlewares/async.js';

const { log } = console;

const createSession = asyncWrapper(async (req, res) => {
  const session = await Session.create({ recruiterId: req.user.id, ...req.body });

  res.status(201).json({ session });
});

export const createSessions = asyncWrapper(async (req, res) => {
  for (let i = 0; i < req.body.length; i += 1) {
    await Session.create(req.body[i])
      .then((response) => {
        log(response);
      })
      .catch((error) => {
        log(error);
      });
  }
  res.status(200).send({ done: true });
});

const getSession = asyncWrapper(async (req, res) => {
  const { id: sessionID } = req.params;
  const session = await Session.findOne({ _id: sessionID });
  if (!session) {
    return res.status(404).json({ msg: `No session with id : ${sessionID}` });
  }

  return res.status(200).json({ session });
});

const deleteSession = asyncWrapper(async (req, res) => {
  const { id: sessionID } = req.params;
  const session = await Session.findOneAndDelete({ _id: sessionID });
  if (!session) {
    return res.status(404).json({ msg: `No session with id : ${sessionID}` });
  }
  return res.status(200).json({ session });
});

const updateSession = asyncWrapper(async (req, res) => {
  const { id: sessionID } = req.params;

  const session = await Session.findOneAndUpdate({ _id: sessionID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!session) {
    return res.status(404).json({ msg: `No session with id : ${sessionID}` });
  }

  return res.status(200).json({ session });
});

export { createSession, getSession, updateSession, deleteSession };
