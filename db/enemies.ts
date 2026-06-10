import { query } from "./connection.js";
import { Enemy } from "../types/db.js";
import { UserRequestUpdateEnemy } from "../types/apiRequest.js";

const tablePropertiesName = new Set(["ID", "name", "hitPoints", "intelligence", "dexterity", "defense", "strength", "level", "experience"]);

async function add(name: string, hitPoints: number, intelligence: number, dexterity: number, defense: number, strength: number, level: number, experience: number){
    return await query<Enemy>('INSERT INTO enemy(name, hitPoints, intelligence, dexterity, defense, strength, level, experience) VALUES(?,?,?,?,?,?,?,?)', 
        [name, hitPoints, intelligence, dexterity, defense, strength, level, experience]);
}

async function findById(enemyID: number){
    return await query<Enemy>('SELECT * FROM enemy WHERE ID=?', [enemyID]);
}

async function remove(enemyID: number){
    return await query<Enemy>('DELETE FROM enemy WHERE ID=?', [enemyID]);
}

async function update(paramsToUpdate: UserRequestUpdateEnemy){
    let propertiesName: string = '', values = [];
    for(const property in paramsToUpdate){
        if(tablePropertiesName.has(property)){
            propertiesName = property + '=?';
            //@ts-ignore TODO: nie wiem co jest błędem ale jakoś kiedyś naprawić póki co idziemy dalej
            values.push(paramsToUpdate[property]);
        }
    }
    return await query<Enemy>('UPDATE enemy SET '+ propertiesName +' WHERE ID=?', [...values, paramsToUpdate.enemyID]);
}

export default{
    add,
    findById,
    remove,
    update
}