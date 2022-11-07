import { Router } from 'express';
import { rmSync } from 'fs';
import { StatusCodes } from 'http-status-codes';
import * as Companies from '../services/companies';

const companyRouter = Router();

// get all data
companyRouter.get('/list', async (req, res) => {
    const result = await Companies.getAllCompanies();
    if (!result) {
      return res.status(404).json({ message: 'can not find companies data' });
    }
    return res.status(200).json(result);
});

// get specific data
companyRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Companies.getCompany(id);
    if (!result) {
      return res.status(404).json({ message: 'company not found' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json(err);
  }
});

// add new data
companyRouter.post('/add', async (req, res) => {
  const { companyName, teamMember } = req.body;

  const result = await Companies.addCompany({ companyName, teamMember });
  return res.status(201).json(result);
});

// update existing data
companyRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { companyName, teamMember } = req.body;

  const result = await Companies.upgradeCompany(id, { companyName, teamMember });
  return res.status(201).json(result);
});

// delete data
companyRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await Companies.deleteCompany(id);
  return res.status(204);
});

export default companyRouter;
