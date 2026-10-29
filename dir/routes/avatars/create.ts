import { Request, Response } from "express";
import { UserRequestCreateAvatar } from '../../types/apiRequest.js';
import typia from 'typia';
import db from "../../db/index.js";

export default async (req: Request, res: Response) => {
    try{
        const { name, avatarClass }: UserRequestCreateAvatar = typia.assert<UserRequestCreateAvatar>(req.body);

        let result = await db.avatars.add(name, (req as any).user.id, avatarClass)

       if(result){
            res.status(201).json({ message: 'Avatar added.' });
        }else{
            res.status(500).json({ message: 'Failed to add avatar.' })
        }
        
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