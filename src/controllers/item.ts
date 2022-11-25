import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as Items from '../services/items';

const itemRouter = Router();

// get all data
itemRouter.get('/list', async (req, res) => {
  try {
    const result = await Items.listItems();
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'not found' });
    }
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});
// get specific data
itemRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Items.getItem(id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'not found' });
    }
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

// add new data
itemRouter.post('/add', async (req, res) => {
  const { sku, name, price, quantity, size, tags, category, image } = req.body;

  try {
    const result = await Items.postItem({ sku, name, price, quantity, size, tags, category, image });
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

// update existing data
itemRouter.put('/:id', async (req, res) => {
  const { sku, name, price, quantity, size, tags, category, image } = req.body;
  const { id } = req.params;

  try {
    const result = await Items.putItem(id, { sku, name, price, quantity, size, tags, category, image });
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

// delete data
itemRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Items.deleteItem(id);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

export default itemRouter;
