const validationError = (error, req, res, next) => {
  if (error.name === 'ValidationError') {
    res.status(400).json({ error: 'Invalid email format' });
    return;
  }
  next(error);
};

export default validationError;