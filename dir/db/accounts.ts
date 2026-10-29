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

async function searchAccount(name: string | null, email: string | null, isValid: boolean | null){
    let sql = 'SELECT ID, name, email, isValid FROM account ';
    let sqlKey = [];
    let sqlPattern = [];
    if(name){
        sqlKey.push("name LIKE ?");
        sqlPattern.push('%' + name + '%');
    }
    if(email){
        sqlKey.push("email LIKE ?");
        sqlPattern.push('%' + email + '%');
    }
    if(isValid){
        sqlKey.push("isValid = ?");
        sqlPattern.push(isValid);
    }
    if(sqlKey.length != 0){
        let sqlString = sqlKey.join(' AND ');
        sql = sql + ' WHERE ' + sqlString;
        return await query<Account>(sql, sqlPattern);
    }else{
        return await query<Account>(sql);
    }
}

export default{
    add,
    findById,
    findByEmail,
    searchAccount
}