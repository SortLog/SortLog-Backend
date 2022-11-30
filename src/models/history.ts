import mongoose = require('mongoose');
import { ItemSchema } from './items';
import { UserSchema } from './users';

const HistorySchema = new mongoose.Schema(
  {
    trackingNumber: {
      type: String,
    },
    Date: {
      type: Date,
    },
    items: [
      {
        type: ItemSchema,
      },
    ],
    changeQuantities: [
      {
        type: Number,
      },
    ],
    users: {
      type: UserSchema,
    },
  },
  {
    timestamps: true,
  }
);

const History = mongoose.model('History', HistorySchema);
export default History;
export { HistorySchema };
