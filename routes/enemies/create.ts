import { Request, Response } from "express";
import { UserRequestCreateEnemy } from '../../types/apiRequest.js';
import typia from 'typia';
import db from "../../db/index.js";

export default async (req: Request, res: Response) => {
    try{
        const { 
            name,
            hitPoints,
            intelligence,
            defense,
            strength,
            level,
            experience,
            dexterity }: UserRequestCreateEnemy = typia.assert<UserRequestCreateEnemy>(req.body);

        let result = await db.enemies.add(name, hitPoints, intelligence, dexterity, defense, strength, level, experience)

       if(result){
            res.status(201).json({ message: 'Enemy added.' });
        }else{
            res.status(500).json({ message: 'Failed to add enemy.' })
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