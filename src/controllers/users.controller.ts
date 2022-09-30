import { Context } from '../models/context';
import { buildErrorResponse } from '../utils/buildErrorResponse';
import { successResponse } from '../utils/successResponse'
import { notFoundResponse } from '../utils/notFoundResponse';
import { unauthorizedResponse } from '../utils/unauthorizedResponse';
import User from '../models/User';
import * as jwt from 'jsonwebtoken';
import { resolveCname } from 'dns';
import bcrypt from 'bcryptjs'

const saltRounds = 10

export class UsersController {
  async addUser(input:any) {
    try {
        const hashPsd = await bcrypt.hash(input.password, saltRounds)
      const result = await User.create({...input, password: hashPsd});
      return successResponse(result, 'created');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }
  async getUsers(inputObject: any, ctx: Context) {
    try {
      let contactType = []
      if (inputObject.contactType) {
        contactType.push(inputObject.contactType)
      }
      const result = await User.find({ contactType: contactType });
      return successResponse(result, 'fetch');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }
  async updateUser(inputObject: any, ctx: Context) {
    try {
      const result = await User.findOneAndUpdate({ _id: inputObject.id }, inputObject.input);
      if (result) {
        return successResponse(result, 'updated');
      }
      return successResponse(result, 'notUpdated');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  async deleteUser(inputObject: any, ctx: Context) {
    try {
      const result = await User.findOneAndDelete({ _id: inputObject.id })
      return successResponse(result, 'deleted');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  async findByUserId(inputObject: any, ctx: Context) {
    try {
      const result = await User.findById(inputObject.id)
      return successResponse(result, 'deleted');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  async signIn(input: any) {
    try {
      const result = await User.findOne(input.email)
      if(!result) return notFoundResponse(result, 'not found')
      if(input.password === result.password && input.email === result.email) {
        const token = jwt.sign(input, process.env.auth_encryption_salt)
        return successResponse({...result, token}, 'token')
      }
     return unauthorizedResponse(resolveCname)
    } catch (error) {
      return buildErrorResponse(error)
    }
  }
}

