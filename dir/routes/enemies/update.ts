import { Request, Response } from "express";
import { UserRequestUpdateEnemy } from '../../types/apiRequest.js';
import typia from 'typia';
import db from "../../db/index.js";

export default async (req: Request, res: Response) => {
    try{
        const update: UserRequestUpdateEnemy = typia.assert<UserRequestUpdateEnemy>(req.body);

        let result = await db.enemies.update(update);

       if(result){
            res.status(201).json({ message: 'Enemy updated.' });
        }else{
            res.status(500).json({ message: 'Failed to update enemy.' });
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