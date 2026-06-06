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