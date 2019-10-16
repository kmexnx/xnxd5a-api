import { Response, NextFunction, Request } from "express";
import * as jwt from 'jsonwebtoken';


const authenticatedmw = (req: Request, res: Response, next: NextFunction): any => {
    let { authorization } = req.headers;
    if(!authorization) return res.send('incorrect token');
    jwt.verify(authorization, 'jwtT0ken', async (err, verified: any)=>{
        if(err){
            return res.status(500);
        }
        return next();
    });
}

export default authenticatedmw;