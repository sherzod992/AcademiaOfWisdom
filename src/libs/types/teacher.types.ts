import { TeacherStatus, } from "../enums/teacher.enum";
import { UserRole } from "../enums/student.enum";

export interface TeacherInput {
  _id?: string;
  FullName: string;
  TeacherName: string;
  TeacherNick: string;
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
export interface teacherSignupInput {
  _id?: string;
  FullName: string;
  TeacherName: string;
  TeacherNick: string;
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
export interface teacherLoginInput{
  _id?: string;
  FullName?: string;//?
  TeacherName?: string;//?
  TeacherNick: string;
  Email?: string;
  Password: string;
  Role: UserRole;  // qo'shildi
  Status: TeacherStatus;  //?
  ProfileImage?: string;
  Description?: string;
  Lessons?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}