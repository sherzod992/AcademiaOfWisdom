import { TeacherStatus, } from "../enums/teacher.enum";
import { UserRole } from "../enums/student.enum";

export interface Teacher {
  _id?: string;
  FullName: string;
  Email: string;
  nickName:String,
  Password: string;
  Role: UserRole;
  Status: TeacherStatus;
  ProfileImage?: string;
  Description?: string;
  Lessons?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}