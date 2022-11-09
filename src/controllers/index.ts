import express from 'express';
import userRouter from './users';
import itemRouter from './item';
import companyRouter from './comapnies';
const Router = express.Router();

Router.use('/users', userRouter);
Router.use('/items', itemRouter);
Router.use('/companies', companyRouter);

export default Router;
