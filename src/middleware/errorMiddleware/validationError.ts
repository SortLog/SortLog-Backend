const validationError = (error, req, res, next) => {
  if (error.name === 'ValidationError') {
    res.status(400).json({ error: error.message });
    return;
  }
  next(error);
};

export default validationError;