import User from "../models/users";

export const listUsers = async () => {
  return await User.find();
};

export const getUser = async (id: any) => {
  return await User.findById(id);
};

export const postUser = async (user: any) => {
  const { email, name, provider, photoUrl, contactType, phone } = user;
  const result = new User({ email, name, provider, photoUrl, contactType, phone });
  return await result.save();
};

export const putUser = async (id: any, user: any) => {
  const { email, name, provider, photoUrl, contactType, phone } = user;
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
