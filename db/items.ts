import { query } from "./connection.js";
import { Item } from "../types/db.js";
import { UserRequestUpdateItem } from "../types/apiRequest.js";

const tablePropertiesName = new Set(["ID", "name", "hitPoints", "defense", "attack", "level", "class"])

async function add(name: string, hitPoints: number, defense: number, attack: number, level: number, itemClass: string){
    return await query<Item>('INSERT INTO item(name, hitPoints, defense, attack, level, class) VALUES(?,?,?,?,?,?)', 
        [name, hitPoints, defense, attack, level, itemClass]);
}

async function findById(itemID: number){
    return await query<Item>('SELECT * FROM item WHERE ID=?', [itemID]);
}

async function update(paramsToUpdate: UserRequestUpdateItem){
    let propertiesName = [], values = [];
    for(const property in paramsToUpdate){
        if(tablePropertiesName.has(property)){
            propertiesName.push(property + '=?');
            //@ts-ignore TODO: nie wiem co jest błędem ale jakoś kiedyś naprawić póki co idziemy dalej
            values.push(paramsToUpdate[property]);
        }
        
    }
    return await query<Item>('UPDATE item SET '+ propertiesName.join(',') +' WHERE ID=?', [...values, paramsToUpdate.itemID]);
}

async function remove(itemID: number){
    return await query<Item>('DELETE FROM item WHERE ID=?', [itemID]);
}

export default{
    add,
    findById,
    update,
    remove
}