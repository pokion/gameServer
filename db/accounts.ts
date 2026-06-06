import { query } from "./connection.js";
import { Account } from "../types/db.js";

async function add(email: string, name: string, password: string){
    return await query<Account>('INSERT INTO account(email, name, password) VALUES(?,?,?)', [email, name, password]);
}

async function findById(id: number){
    return await query<Account>('SELECT * FROM account WHERE id=?', [id]);
}

async function findByEmail(email: string){
    return await query<Account>('SELECT * FROM account WHERE email=?', [email]);
}

export default{
    add,
    findById,
    findByEmail,
}