import { ObjectId } from "mongoose";
import { AdminRules } from "../enums/Admin.enum";
import { Session } from "express-session";
import { Request } from "express";
// bizga monggose va admin ruledagi enumlar va session va request kerak ekan

export interface Admin{
    _id: ObjectId;
    nickName:String,
    fullName: string;
    email: string;
    password: string;
    phone: string;
    adminRules:AdminRules;
    createdAt: Date;
    updatedAt: Date;
    adminNick: string;
}
export interface AdminInput{
    _id?: ObjectId;
    fullName: string;
    email?: string;
    password: string;
    phone?: string;
    adminNick: string;
    adminRules?:AdminRules;

}
