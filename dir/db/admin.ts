import { query } from "./connection.js";
import { Admin } from "../types/db.js";

async function add(email: string, login: string, password: string, pin: number){
    return await query<Admin>('INSERT INTO adminaccount(email, login, password, pin) VALUES(?,?,?,?)', [email, login, password, pin]);
}

async function findById(id: number){
    return await query<Admin>('SELECT * FROM adminaccount WHERE id=?', [id]);
}

async function findByEmail(email: string){
    return await query<Admin>('SELECT * FROM adminaccount WHERE email=?', [email]);
}

export default{
    add,
    findById,
    findByEmail,
}