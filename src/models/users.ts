import mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
    },
    provider: {
      type: String,
      required: true,
    },
    contactType: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('users', UserSchema);
export default User;
export { UserSchema };