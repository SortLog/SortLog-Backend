import { Schema, model } from 'mongoose';
const yup = require('yup');

const companySchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
    },
    teamMember: [
      {
        type: String,
        required: true,
        validate: {
          validator: async (email) => {
            // console.log(await yup.string().email().validate(email))
            return yup.string().email().validate(email);
          },
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
