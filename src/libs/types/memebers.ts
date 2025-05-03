import { ObjectId } from "mongoose";
import { MemberStatus, MemberType } from "../enums/memeber.enum";
import { Session } from "express-session";
import { Request } from "express";

// To‘liq Member ma'lumoti (DB dan o‘qiganda)
export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddress?: string;
  memberDesk?: string;
  memberImage?: string;
  memberPoints: number;

  // Teacher uchun qo‘shimcha
  memberSubjects?: string[];     // misol: ["Math", "Science"]
  memberExperience?: number;     // necha yil

  // Student uchun qo‘shimcha
  memberLevel?: string;          // misol: "Beginner", "Advanced"

  createdAt: Date;
  updatedAt: Date;
}

// Foydalanuvchini ro‘yxatdan o‘tkazishda
export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddress?: string;
  memberDesk?: string;
  memberImage?: string;
  memberPoints?: number;

  memberSubjects?: string[];
  memberExperience?: number;
  memberLevel?: string;
}

// Kirish (login) uchun
export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}

// Yangilash uchun
export interface MemberUpdateInput {
  _id: ObjectId;
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick?: string;
  memberPhone?: string;
  memberPassword?: string;
  memberAddress?: string;
  memberDesk?: string;
  memberImage?: string;

  memberSubjects?: string[];
  memberExperience?: number;
  memberLevel?: string;
}

// Auth'dan so‘ng foydalaniladigan kengaytirilgan Request
export interface ExtendedRequest extends Request {
  member: Member;
//   file?: Express.Multer.File;
//   files?: Express.Multer.File[];
}

// Admin panel uchun session asosidagi request
export interface AdminRequest extends Request {
  file: any;
  member: Member;
  session: Session & { member: Member };
//   file?: Express.Multer.File;
//   files?: Express.Multer.File[];
}
