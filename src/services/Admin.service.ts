import { AdminRules } from '../libs/enums/Admin.enum';
import Errors from '../libs/Error';
import express from 'express';
import admincontroller from '../controllers/Admin.Controller';
// express
import adminSchema from '../schema/Admin-schema';
import { AdminInput,Admin } from '../libs/types/admin';
import StudentSchema from '../schema/Student-schema';
import TeacherSchema from '../schema/Teacher-schema';
import LessonSchema from '../schema/Lesson-schema';
import { error } from 'console';

 
class AdminService {
  private readonly adminSchema;
  constructor() {
    this.adminSchema = adminSchema;
  }

  public async processLogin(input: AdminInput): Promise<string> {
    console.log("AdminService: processLogin ishladi");
    const { email, password } = input;

    const admin = await this.adminSchema.findOne({ email }).exec();
    if (!admin) {
      throw new Error("Admin topilmadi");
    }
    if (admin.password !== password) {
      throw new Error("Parol noto‘g‘ri");
    }
    return "Login muvaffaqiyatli";
  }

  public async processSignup(input: AdminInput): Promise<string> {
    console.log("AdminService: processSignup ishladi");
    const { email, password } = input;

    const existingAdmin = await this.adminSchema.findOne({ email }).exec();
    if (existingAdmin) {
      throw new Error("Bu email allaqachon ro‘yxatdan o‘tgan");
    }

    const newAdmin = new this.adminSchema({ email, password });
    await newAdmin.save();
    return `Yangi admin: ${email} yaratildi`;
  }

  public async logout(): Promise<string> {
    console.log("AdminService: logout ishladi");
    return "Admin tizimdan chiqdi";
  }

  public async getAllStudent(): Promise<any[]> {
    console.log("AdminService: getAllStudent ishladi");
    const students = await StudentSchema.find().exec();
    if (!students.length) throw new Error("Student topilmadi");
    return students;
  }

  public async getAllTeachers(): Promise<any[]> {
    console.log("AdminService: getAllTeachers ishladi");
    const teachers = await TeacherSchema.find().exec();
    if (!teachers.length) throw new Error("Teacher topilmadi");
    return teachers;
  }

  public async getAllLessons(): Promise<any[]> {
    console.log("AdminService: getAllLessons ishladi");
    const lessons = await LessonSchema.find().exec();
    if (!lessons.length) throw new Error("Darslik topilmadi");
    return lessons;
  }

  public async updateStudetnStatus(studentId: string, status: string): Promise<string> {
    console.log("AdminService: updateStudetnStatus ishladi");
    const student = await StudentSchema.findById(studentId).exec();
    if (!student) {
      throw new Error("Student topilmadi");
    }

    // student.status = status;
    await student.save();

    return `Student ${studentId} statusi ${status} ga o‘zgartirildi`;
  }
}

export default AdminService;