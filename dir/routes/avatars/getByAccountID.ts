import { Request, Response } from "express";
import { UserRequestedAvatarByAccountID } from '../../types/apiRequest.js';
import typia from 'typia';
import db from "../../db/index.js";

export default async (req: Request, res: Response) => {
    try{
        const accountID: UserRequestedAvatarByAccountID = typia.assert<UserRequestedAvatarByAccountID>(req.params.accountID);

        res.status(200).json({ data: await db.avatars.findByAccount(accountID) });
        
    }catch(err){
        if(process.env.NODE_ENV !== 'production'){
             console.error('Register path error: ', err);
         }
         if (err instanceof typia.TypeGuardError){
             res.status(400).json({ message: 'Invalid input structure.', error: err.message});
             return;
         }
        
         res.status(500).json({ message: 'Internal problem.'});
    }
}