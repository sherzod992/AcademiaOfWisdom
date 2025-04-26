import { ObjectId } from "mongoose";
import { AdminRules } from "../enums/Admin.enum";
import { Session } from "express-session";
import { Request } from "express";

export interface Admin {
  _id: ObjectId;
  nickName: string;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  adminRules: AdminRules;
  createdAt: Date;
  updatedAt: Date;
  adminNick: string;
}

export interface AdminInput {
  _id?: ObjectId;
  fullName: string;
  email?: string;
  password: string;
  phone?: string;
  adminNick: string;
  adminRules?: AdminRules;
}

export interface CustomSession extends Session {
  adminId?: ObjectId;
  adminNick?: string;
}

export interface CustomRequest extends Request {
  session: CustomSession;
}
