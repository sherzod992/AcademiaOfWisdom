import { ObjectId } from "mongoose";
import { StudentStatus,  UserRole } from "../enums/student.enum";


export interface StudentInput {
  _id?: string;
  FullName: string;
  StudentName: string;
  StudentNick: string;
  Email: string;
  Password: string;
  Role: UserRole;  // qo'shildi
  Status: StudentStatus;
  ProfileImage?: string;
  Description?: string;
  Lessons?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface StudentSignupInput{
  StudentNick: string;
  StudentName: string;
  Password: string;
}
export interface StudentLoginInput{
  StudentNick: string;
  password: string;
}
