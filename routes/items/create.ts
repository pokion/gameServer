import { Request, Response } from "express";
import { UserRequestCreateItem } from '../../types/apiRequest.js';
import typia from 'typia';
import db from "../../db/index.js";

export default async (req: Request, res: Response) => {
    try{
        const { 
            name,
            hitPoints, 
            defense,
            attack,
            level,
            itemClass }: UserRequestCreateItem = typia.assert<UserRequestCreateItem>(req.body);

        let result = await db.items.add(name,hitPoints,defense,attack,level,itemClass)

       if(result){
            res.status(201).json({ message: 'Item added.' });
        }else{
            res.status(500).json({ message: 'Failed to add item.' })
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