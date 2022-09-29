import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../models/users'

const userRouter = Router();
const tasks = [];
// userRouter.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = { id, name: 'John Doe' };
//     return res.status(StatusCodes.OK).json(user);
//   } catch (err) {
//     return res.status(StatusCodes.NOT_FOUND).json(err);
//   }
// });

userRouter.get('/', async (req, res) => {
  try {
    const result = await User.find()
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({message:'not found'});
    }
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

userRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.findById(id)
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({message:'not found'});
    }
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

userRouter.post('/add', async (req, res) => {
  // const { email, name, provider, photoUrl, contactType, phone } = req.body;
  const email = req.body.email;
  const name = req.body.name;
  const provider = req.body.provider;
  const photoUrl = req.body.photoUrl;
  const contactType = req.body.contactType;
  const phone = req.body.phone;

  // // const { id } = req.params;
  // try {
  //   const result = new User({ email, name, provider, photoUrl, contactType, phone });
  //   // const user = { id, name: 'John Doe' };
  //   // tasks.push(result);
  //   return result.save()
  //   // return res.status(201).json(result);
  // } catch (err) {
  //   return res.status(400).json(err);
  // }
  
  const result = new User({ email, name, provider, photoUrl, contactType, phone });
    // const user = { id, name: 'John Doe' };
    // tasks.push(result);
  result.save()
    // return res.status(201).json(result);
  .then(()=>res.json('User Added'))
  .catch(err=>res.status(400).json("Error " + err));
});

// userRouter.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await User.findById(id)
//     if (!result) {
//       return res.status(StatusCodes.NOT_FOUND).json({message:'not found'});
//     }
//     return res.status(StatusCodes.OK).json(result);
//   } catch (err) {
//     return res.status(StatusCodes.NOT_FOUND).json(err);
//   }
// });

// userRouter.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await User.findById(id)
//     if (!result) {
//       return res.status(StatusCodes.NOT_FOUND).json({message:'not found'});
//     }
//     return res.status(StatusCodes.OK).json(result);
//   } catch (err) {
//     return res.status(StatusCodes.NOT_FOUND).json(err);
//   }
// });

export default userRouter;

