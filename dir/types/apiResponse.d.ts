import { JwtPayload } from 'jsonwebtoken';

export interface jwtCustomPayloadRes extends JwtPayload{
    id: number;
    email: string;
}