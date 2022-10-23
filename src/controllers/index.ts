import express from 'express';
import userRouter from './users';
import itemRouter from './item';
const Router = express.Router();

Router.use('/users', userRouter);
Router.use('/items', itemRouter);

export default Router;