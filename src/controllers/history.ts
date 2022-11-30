import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as History from '../services/history';
import * as Item from '../services/items';

const historyRouter = Router();

// get all data
historyRouter.get('/list', async (req, res) => {
  try {
    const result = await History.listHistorys();
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'not found' });
    }
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});
// get specific data
historyRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await History.getHistory(id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'not found' });
    }
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

// add new data
historyRouter.post('/add', async (req, res) => {
  const { trackingNumber, Date, items, changeQuantities, users } = req.body;

  try {
    const result = await History.postHistory({ trackingNumber, Date, items, changeQuantities, users });
    items.forEach(async (item: any, index: any) => {
      const { _id } = item;
      item.quantity = item.quantity + changeQuantities[index];
      Item.putItem(_id, item);
    });

    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

// update existing data
historyRouter.put('/:id', async (req, res) => {
  const { trackingNumber, Date, items, changeQuantities, users } = req.body;
  const { id } = req.params;

  try {
    const result = await History.putHistory(id, { trackingNumber, Date, items, changeQuantities, users });
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

// delete data
historyRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await History.deleteHistory(id);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

export default historyRouter;
