import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const userRouter = Router();

userRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = { id, name: 'John Doe' };
    return res.status(StatusCodes.OK).json(user);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

export default userRouter;
