import { Request, Response } from "express";
import { UserRequestedAvatarByName } from '../../types/apiRequest.js';
import typia from 'typia';
import db from "../../db/index.js";

export default async (req: Request, res: Response) => {
    try{
        const avatarName: UserRequestedAvatarByName = typia.assert<UserRequestedAvatarByName>(req.params.avatarName);

        res.status(200).json({ data: await db.avatars.findByName(avatarName) });
        
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