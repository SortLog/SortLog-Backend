import validationError from './validationError';

const errorMiddleware = (app) => {
  app.use(validationError);

  app.use((error, req, res, next) => {
    console.error({ req, error });
    res.status(500).json({ error: 'Something bad happened, please try again later' });
  });
};

export default errorMiddleware;
