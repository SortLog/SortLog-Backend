import CompanyModel from '../models/companies';

export const getAllCompanies = async () => {
  return await CompanyModel.find().exec();
};

export const getCompany = async (id: string) => {
  return await CompanyModel.findById(id).exec();
};

export const addCompany = async (company: any) => {
  const { companyName, teamMember } = company;
  const result = new CompanyModel({ companyName, teamMember });
  return await result.save();
};

export const upgradeCompany = async (id: string, company: any) => {
  const { companyName, teamMember } = company;
  const targetCompany = await CompanyModel.findById(id).exec();

  targetCompany.companyName = companyName;
  targetCompany.teamMember = teamMember;

  return await targetCompany.save();
};

export const deleteCompany = async (id: string) => {
  return await CompanyModel.findByIdAndDelete(id).exec();
};
