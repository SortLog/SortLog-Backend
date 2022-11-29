import History from "../models/history";

export const listHistorys = async () => {
  return await History.find().exec();
};

export const getStat = async () => {
  return await History.find();
}

export const getHistory = async (id: any) => {
  return await History.findById(id);
};

export const postHistory = async (history: any) => {
  const { trackingNumber, Date: date, items, changeQuantities, users } = history;
  const newHistory = new History({
    trackingNumber,
    date,
    items,
    changeQuantities,
    users,
  });
  return await newHistory.save();
};

export const putHistory = async (id: any, history: any) => {
  const { trackingNumber, Date: date, items, changeQuantities, users } = history;
  const theHistory = await History.findById(id);

  theHistory.trackingNumber = trackingNumber;
  theHistory.Date = date;
  theHistory.items = items;
  theHistory.changeQuantities = changeQuantities;
  theHistory.users = users;

  return await theHistory.save();
};

export const deleteHistory = async (id: any) => {
  return await History.findByIdAndDelete(id);
};
