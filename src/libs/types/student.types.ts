import { ObjectId } from "mongoose";
import { StudentStatus, Gender, UserRole } from "../enums/student.enum";
import { TeacherStatus } from "../enums/teacher.enum";

export interface Teacher {
  _id?: string;
  FullName: string;
  nickName:String,
  Email: string;
  Password: string;
  Role: UserRole;  // qo'shildi
  Status: TeacherStatus;
  ProfileImage?: string;
  Description?: string;
  Lessons?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

