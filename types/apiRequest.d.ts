import { jwtCustomPayloadRes } from './apiResponse';
import typia, { tags } from 'typia';

export interface jwtCustomPayloadReq extends jwtCustomPayloadRes{}

export interface UserRequestRegister{
    email: string & tags.Format<"email"> & tags.MaxLength<200> & tags.MinLength<5>;
    name: string & tags.MaxLength<50> & tags.MinLength<5>;
    password: string & tags.MaxLength<100> & tags.MinLength<8> & tags.Format<'password'>;
}

export interface UserRequestLogin{
    email: string & tags.Format<"email"> & tags.MaxLength<200> & tags.MinLength<5>;
    password: string & tags.MaxLength<100> & tags.MinLength<8> & tags.Format<'password'>;
}

export type UserRequestedAvatarByName = string & tags.MaxLength<50> & tags.MinLength<1>;

export type UserRequestedAvatarByAccountID = number & tags.Minimum<1>;

export interface UserRequestCreateAvatar{
    name: string & tags.MinLength<1> & tags.MaxLength<50>;
    avatarClass: string & tags.MinLength<1> & tags.MaxLength<50>;
}

export interface UserRequestCreateItem{
    name: string & tags.MinLength<1> & tags.MaxLength<50>;
    hitPoints: number;
    defense: number;
    attack: number;
    level: number;
    itemClass: string & tags.MinLength<1> & tags.MaxLength<50>;
}

export interface UserRequestCreateEnemy{
    name: string & tags.MinLength<1> & tags.MaxLength<50>;
    hitPoints: number;
    intelligence: number;
    defense: number;
    strength: number;
    level: number;
    experience: number;
    dexterity: number;
}

export interface UserRequestRemoveEnemy{
    enemyID: number;
}

export interface UserRequestRemoveItem{
    itemID: number;
}

export interface UserRequestUpdateItem{
    itemID: number;
    name?: string & tags.MinLength<1> & tags.MaxLength<50>;
    hitPoints?: number;
    defense?: number;
    attack?: number;
    level?: number;
    itemClass?: string & tags.MinLength<1> & tags.MaxLength<50>;
}

export interface UserRequestUpdateEnemy{
    enemyID: number;
    name?: string & tags.MinLength<1> & tags.MaxLength<50>;
    hitPoints?: number;
    intelligence?: number;
    defense?: number;
    strength?: number;
    level?: number;
    experience?: number;
}