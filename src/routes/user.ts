import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../models/users'

const userRouter = Router();
const tasks = [];

// get all data
userRouter.get('/list', async (req, res) => {
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

// get specific data
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

// add new data
userRouter.post('/add', async (req, res) => {
  // const { email, name, provider, photoUrl, contactType, phone } = req.body;
  const email = req.body.email;
  const name = req.body.name;
  const provider = req.body.provider;
  const photoUrl = req.body.photoUrl;
  const contactType = req.body.contactType;
  const phone = req.body.phone;

  const result = new User({ email, name, provider, photoUrl, contactType, phone });
  
  result.save()
  .then(()=>res.json('User Added'))
  .catch(err=>res.status(400).json("Error " + err));
});

// update existing data
userRouter.put('/update/:id', async (req, res) => {
  User.findById(req.params.id)
  
  .then(User=>{
    User.email = req.body.email;
    User.name = req.body.name;
    User.provider = req.body.provider;
    User.photoUrl = req.body.photoUrl;
    User.contactType = req.body.contactType;
    User.phone = req.body.phone;

    User.save()
    .then(()=>res.json("User updated"))
    .catch(err=>res.status(400).json("Error" + err))
  })
  .catch(err=>res.status(400).json("Error" + err));
});

// delete data
userRouter.delete('/delete/:id', async (req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then(()=>res.json("User deleted"))
  .catch(err=>res.status(400).json("Error " + err));
});

export default userRouter;