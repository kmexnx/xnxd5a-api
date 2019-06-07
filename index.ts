import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core'
import { UserController } from './controllers/Users';
import { AuthController } from './controllers/Auth';
import './config/db';

export class xnxServer extends Server {

  constructor(){
    super();
    
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended:true}));
    const userController = new UserController();
    const authController =  new AuthController();
    super.addControllers([userController, authController]);

  }
  public start(port: any){
    this.app.listen(port,()=>{
      console.log(`Run on port: ${port}`);
    });
  }
}

let xnx = new xnxServer();

xnx.start(process.env.PORT);