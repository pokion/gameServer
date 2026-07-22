import typia from "typia";
import { Request, Response } from 'express';
import db from '../../db/index.js';
import { UserRequestSearchEnemy } from "../../types/apiRequest.js";

export default async (req: Request, res: Response) =>{
    try{
        const { name }: UserRequestSearchEnemy = typia.assert<UserRequestSearchEnemy>(req.body);

        res.status(201).json({ data: await db.enemies.searchEnemy(name) });

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