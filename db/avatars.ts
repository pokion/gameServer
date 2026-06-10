import { query } from "./connection.js";
import { Avatar } from "../types/db.js";

async function add(name: string, accountID: number, avatarClass: string){
    return await query<Avatar>('INSERT INTO avatar(name, accountID, class) VALUES(?,?,?)', [name, accountID, avatarClass]);
}

async function findByName(name: string){
    return await query<Avatar>('SELECT * FROM avatar WHERE name=?', [name]);
}

async function findByAccount(accountID: number){
    return await query<Avatar>('SELECT * FROM avatar WHERE accountID=?', [accountID]);
}

export default{
    add,
    findByName,
    findByAccount
}