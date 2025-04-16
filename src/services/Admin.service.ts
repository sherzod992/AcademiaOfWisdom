import { AdminRules } from '../libs/enums/Admin.enum';
import Errors from '../libs/Error';
import express from 'express';
import admincontroller from '../controllers/Admin.Controller';
// express
import AdminSchema from '../schema/admin-schema';
import { AdminInput,Admin } from '../libs/types/admin';

 
class AdminService{
    private readonly adminSchema;
    constructor(){
        this.adminSchema = AdminSchema;
    }
    public async processLogin(input: AdminInput): Promise<string> {
        console.log("AdminService: processLogin ishladi");
        // Login tekshirish jarayoni (mock)

        return "Login muvaffaqiyatli";
      }
    
      public async processSignup(input: AdminInput): Promise<string> {
        console.log("AdminService: processSignup ishladi");
        // Ro‘yxatdan o‘tkazish (mock)
        return `Yangi admin:`;
      }
    
      public async logout(): Promise<string> {
        console.log("AdminService: logout ishladi");
        return "Admin tizimdan chiqdi";
      }
    
      public async getAllStudent(): Promise<string[]> {
        console.log("AdminService: getAllStudent ishladi");
        return ["Student1", "Student2", "Student3"];
      }
    
      public async getAllTeacherStatus(): Promise<string[]> {
        console.log("AdminService: getAllTeacherStatus ishladi");
        return ["Teacher1: active", "Teacher2: pending"];
      }
    
      public async getAlldarsliklar(): Promise<string[]> {
        console.log("AdminService: getAlldarsliklar ishladi");
        return ["Math", "Science", "History"];
      }
    
      public async updateStudetnStatus(studentId: string, status: string): Promise<string> {
        console.log("AdminService: updateStudetnStatus ishladi");
        return `Student ${studentId} statusi ${status} ga o‘zgartirildi`;
      }
    }
    



export default AdminService