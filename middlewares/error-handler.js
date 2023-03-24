const errorHandlerMiddleware = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  // eslint-disable-next-line no-console
  console.log(err);
  res.status(500).json({ msg: 'there was an error' });
};

export default errorHandlerMiddleware;
