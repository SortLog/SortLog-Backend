import { Schema, model } from 'mongoose';
const Joi = require('joi');

const companySchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    teamMember: [
      {
        type: String,
        required: true,
        validate: {
          validator: async (email) => {
            return !Joi.string().email().validate(email).error;
          },
          msg: "Invalid email format",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const CompanyModel = model('companies', companySchema);

export default CompanyModel;
export { companySchema };
