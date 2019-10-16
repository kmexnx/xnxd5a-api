import {Request, Response, NextFunction} from 'express';
import { Controller, Get } from '@overnightjs/core';
const User = require('../models/User');


@Controller('api/users')

export class UserController {
  @Get()
  private async getAll(req: Request, res: Response){
    const response = await User.findAll();
    res.send(response).status(200);
  } 
}