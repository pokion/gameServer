import { RowDataPacket } from 'mysql2/promise';

export interface Account extends RowDataPacket extends RowDataPacket{
    ID: number;
    name: string;
    password: string;
    email: string;
    isValid: boolean;
}
export interface Admin extends RowDataPacket extends RowDataPacket{
    ID: number;
    login: string;
    password: string;
    email: string;
    pin: number;
}
export interface Avatar extends RowDataPacket{
    ID: number;
    accoundID: number;
    name: string;
    class: string;
    hitPoints: number;
    intelligence: number;
    dexterity: number;
    strenght: number;
    luck: number;
    level: number;
    experience: number;
}
export interface AdminAccount extends RowDataPacket{
    ID: number;
    login: string;
    password: string;
    pin: number;
    email: string;
}
export interface CharacterItem extends RowDataPacket{
    ID: number;
    characterID: number;
    itemID: number;
}
export interface Item extends RowDataPacket{
    ID: number;
    name: number;
    hitPoints: number;
    defense: number;
    attack: number;
    level: number;
    class: string
}
export interface EnemyDrop extends RowDataPacket{
    ID: number;
    enemyID: number;
    itemID: number;
    chance: number
}
export interface Enemy extends RowDataPacket{
    ID: number;
    name: string;
    hitPoints: number;
    intelligence: number;
    dexterity: number;
    strength: number;
    level: number;
    experience: number;
}
export interface PlaceEnemy extends RowDataPacket{
    ID: number;
    placeID: number;
    evemyID: number;
}
export interface Place extends RowDataPacket{
    ID: number;
    name: string;
    minLevel: number;
}