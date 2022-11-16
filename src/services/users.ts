import User from "../models/users";

export const listUsers = async () => {
  return User.find();
};

export const getUser = async (id: any) => {
  return User.findById(id);
};

export const getUserByEmail = async (email: any) => {
  return await User.findOne({email: email},function (err, User){});
};

export const postUser = async (user: any) => {
  const { email, name, provider, photoUrl, contactType, phone } = user;
  const result = new User({ email, name, provider, photoUrl, contactType, phone });
  console.log('save user', user)
  return await result.save();
};

export const putUser = async (id: any, user: any) => {
  const { email, name, provider, photoUrl, contactType, phone } = user;
  console.log(user)
  const theUser = await User.findById(id);

  theUser.email = email;
  theUser.name = name;
  theUser.provider = provider;
  theUser.photoUrl = photoUrl;
  theUser.contactType = contactType;
  theUser.phone = phone;

  return await theUser.save();
};

export const deleteUser = async (id: any) => {
  return await User.findByIdAndDelete(id);
};
