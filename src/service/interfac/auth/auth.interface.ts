import { Document } from "mongoose";
export interface IAuth extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isAdmin: true;
    refreshToken: string;
}
