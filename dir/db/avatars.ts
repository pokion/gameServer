import { query } from "./connection.js";
import { Avatar } from "../types/db.js";
import { AdminRequestCreateAvatar } from "../types/apiRequest.js";

async function add(name: string, accountID: number, avatarClass: string){
    return await query<Avatar>('INSERT INTO avatar(name, accountID, class) VALUES(?,?,?)', [name, accountID, avatarClass]);
}

async function addWithAllStats({ 
            accountID, 
            name,  
            avatarClass,
            hitPoints, 
            intelligence, 
            strength, 
            luck, 
            dexterity 
         }: AdminRequestCreateAvatar){
    return await query<Avatar>('INSERT INTO avatar(name, accountID, class, hitPoints, intelligence, dexterity, strength, luck) VALUES(?,?,?,?,?,?,?,?)', [name, accountID, avatarClass, hitPoints, intelligence, dexterity, strength, luck]);
}

async function findByName(name: string){
    return await query<Avatar>('SELECT * FROM avatar WHERE name=?', [name]);
}

async function findByAccount(accountID: number){
    return await query<Avatar>('SELECT * FROM avatar WHERE accountID=?', [accountID]);
}

async function searchAvatar(accountID: number | null, name: string | null, className: string | null){
    let sql = 'SELECT * FROM avatar ';
    let sqlKey = [];
    let sqlPattern = [];
    if(name){
        sqlKey.push("name LIKE ?");
        sqlPattern.push('%' + name + '%');
    }
    if(accountID){
        sqlKey.push("accountID = ?");
        sqlPattern.push(accountID);
    }
    if(className){
        sqlKey.push("class = ?");
        sqlPattern.push('%' + className + '%');
    }
    if(sqlKey.length != 0){
        let sqlString = sqlKey.join(' AND ');
        sql = sql + ' WHERE ' + sqlString;
        return await query<Avatar>(sql, sqlPattern);
    }else{
        return await query<Avatar>(sql);
    }
}

export default{
    add,
    findByName,
    findByAccount,
    addWithAllStats,
    searchAvatar
}