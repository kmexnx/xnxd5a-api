import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import {Request, Response, NextFunction} from 'express'; 
import {Get, Post, Controller, Middleware} from '@overnightjs/core';
import { UserModel } from 'interfaces/UserModel';
import authenticatedmw from '../middlewares/authenticated.middleware';
const User = require('../models/User');

@Controller('api/auth')
export class AuthController{

  user: UserModel;

  constructor() {

  }


  @Get('me')
  @Middleware(authenticatedmw)
  private me(req: Request, res: Response, next: NextFunction){
    let { authorization } = req.headers;
    if(!authorization) return res.send('incorrect token');
    jwt.verify(authorization, 'jwtT0ken', async (err, verified: any)=>{
      const response = await User.findOne({ where: {username: verified.username} });
      res.status(200).send(response);
    });
  }

  @Post('login')
  private async login(req: Request, res: Response){
    const username = req.body.username;
    const password = req.body.password;
    if(!username || !password) return res.sendStatus(400);
    const response = await User.findOne({ where: {username: username} });
    bcrypt.compare(password, response.password, (err,result)=>{
      if(err || !result){
        return res.send('Invalid credentials').status(500);
      }
      const token = jwt.sign({ username: username }, 'jwtT0ken' , { expiresIn: '4h' });
      const response = { username: req.body.email, token };
      res.status(200).send(response);
    });
  }

  @Post('register')
  private async register(req: Request, res: Response) {
    let {username, password, first_name, last_name} = req.body;
    const passwordHashed = await bcrypt.hash(password, 10);
    User.create({username, password: passwordHashed, first_name, last_name, createdAt: Date.now(), updatedAt: Date.now()}).then((response:any)=>{
      res.send(response).status(200);
    }).catch((err:any)=> {
      res.send(err).status(500)
    });
  }

}

