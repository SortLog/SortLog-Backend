import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as Users from '../services/users';

const userRouter = Router();

// get all data
userRouter.get('/list', async (req, res) => {
  try {
    const result = await Users.listUsers();
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'not found' });
    }
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

// get specific data
userRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Users.getUser(id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'not found' });
    }
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

// add new data
userRouter.post('/add', async (req, res) => {
  const { email, name, provider, photoUrl, contactType, phone} = req.body;

  try {
    const result = await Users.postUser({ email, name, provider, photoUrl, contactType, phone });
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

// update existing data
userRouter.put('/:id', async (req, res) => {
  const { email, name, provider, photoUrl, contactType, phone } = req.body;
  const { id } = req.params;

  try {
    const result = await Users.putUser(id, { email, name, provider, photoUrl, contactType, phone });
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

// delete data
userRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Users.deleteUser(id);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

export default userRouter;
