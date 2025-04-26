import { Request,Response,NextFunction } from "express";
import { T } from "../libs/types/common";
import { Admin, AdminInput } from "../libs/types/admin";
import { AdminRules } from "../libs/enums/Admin.enum";
import Errors from "../libs/Error";
import AdminService from "../services/Admin.service";
import StudentSchema from "../schema/Student-schema";

  

const admincontroller: T={};
const adminservice = new AdminService()


admincontroller.processLogin = async(req:Request, res:Response)=>{
    try{
      const result = await adminservice.processLogin(req.body);
      res.status(200).json({ message: result });
    }catch(err){
      console.log(err)
      res.status(500).json({ error: Errors.Message.SOMETHING_WENT_WRONG });
    }
  }
  
  admincontroller.processSignup = async(req:Request, res:Response)=>{
    try{
      const result = await adminservice.processSignup(req.body);
      res.status(201).json({ message: result });
    }catch(err){
      console.log(err)
      res.status(500).json({ error: Errors.Message.SOMETHING_WENT_WRONG });
    }
  }
  
  admincontroller.logout = async(req:Request, res:Response)=>{
    try{
      const result = await adminservice.logout();
      res.status(200).json({ message: result });
    }catch(err){
      console.log(err)
      res.status(500).json({ error: Errors.Message.SOMETHING_WENT_WRONG });
    }
  }
  
  admincontroller.getAllStudent = async(req:Request, res:Response)=>{
    try{
      const students = await adminservice.getAllStudent();
      res.status(200).json({ students });
    }catch(err){
        console.log(err)
        res.status(500).json({ error: Errors.Message.SOMETHING_WENT_WRONG });
    }
  }
  
  admincontroller.getAllTeachers = async(req:Request, res:Response)=>{
    try{
      const teachers = await adminservice.getAllTeachers();
      res.status(200).json({ teachers });
    }catch(err){
      console.log(err)
      res.status(500).json({ error: Errors.Message.SOMETHING_WENT_WRONG });
    }
  }
  
  admincontroller.getAllLessons = async(req:Request, res:Response)=>{
    try{
      const lessons = await adminservice.getAllLessons();
      res.status(200).json({ lessons });
    }catch(err){
      console.log(err)
      res.status(500).json({ error: Errors.Message.SOMETHING_WENT_WRONG });
    }
  }
  
  admincontroller.updateStudetnStatus = async(req:Request, res:Response)=>{
    try{
      const { studentId, status } = req.body;
      const result = await adminservice.updateStudetnStatus(studentId, status);
      res.status(200).json({ message: result });
    }catch(err){
      console.log(err)
      res.status(500).json({ error: Errors.Message.SOMETHING_WENT_WRONG });
    }
  }
  

export default admincontroller