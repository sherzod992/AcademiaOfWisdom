import { Request,Response,NextFunction } from "express";
import { T } from "../libs/types/common";


import Errors, { HttpCode, Message } from "../libs/Error";
import AdminService from "../services/Admin.service";

import { AdminRequest, LoginInput, MemberInput } from "../libs/types/memebers";
import { MemberType } from "../libs/enums/memeber.enum";

  

const admincontroller: T={};
const adminservice = new AdminService()


  admincontroller.processSignup = async (
    req: AdminRequest,
    res: Response
  ) => {
    try {
      console.log("processSignup");
      const file = req.file;
      if (!file) {
        throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
      }
  
      const newMember: MemberInput = req.body;
      newMember.memberImage = file?.path.replace(/\\/, "/");
      newMember.memberType = MemberType.ADMIN;
      const result = await adminservice.processSignup(newMember);
  
      req.session.member = result;
      req.session.save(function () {
        res.redirect("/admin/product/all");
      });
    } catch (err) {
      console.log("Error, processSignup:", err);
      const message = 
        err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
      res.send(
        "<script> alert('" + message + "'); window.location.replace('/admin/signup') </script>"
      );
    }
  };

  admincontroller.processLogin = async (
    req: AdminRequest,
    res: Response
  ) => {
    try {
      console.log("processLogin");
  
      const input: LoginInput = req.body;
      const result = await adminservice.processLogin(input);
      //TODO: SESSIONS AUTHENTICATION
  
      req.session.member = result;
      req.session.save(function () {
        res.redirect("/admin/product/all");
      });
    } catch (err) {
      console.log("ERROR, processLogin", err);
      const message =
        err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
      res.send(
        `<script> alert("${message}"); window.location.replace('/admin/login') </script>`
      );
    }
  };
  admincontroller.logout = async (req: AdminRequest, res: Response) => {
    try {
      console.log("processLogin");
      req.session.destroy(function () {
        res.redirect("/admin");
      });
    } catch (err) {
      console.log("ERROR, processLogin", err);
      res.redirect("/admin");
    }
  };
  
  admincontroller.getAllStudent = async(req:Request, res:Response)=>{
    try{
      console.log("getAllStudent");
      const students = await adminservice.getAllStudent();
      res.render("users", { users: students });
      res.status(200).json({ students });
    }catch(err){
        console.log(err)
        res.status(500).json({ error: Errors.Message.SOMETHING_WENT_WRONG });
    }
  }
  
  admincontroller.getAllTeachers = async(req:Request, res:Response)=>{
    try{
      const teachers = await adminservice.getAllTeachers();
      res.render("users", { users: teachers });
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
 admincontroller.updateChosenUser = async (req: Request, res: Response) => {
    try {
      console.log("updateChosenUser");
      const result = await adminservice.updateChosenUser(req.body);
  
      res.status(HttpCode.OK).json({ data: result });
    } catch (err) {
      console.log("ERROR, updateChosenUser", err);
      if (err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standard.code).json(Errors.standard);
    }
  };

  admincontroller.goHome = async(req:Request, res:Response)=>{
    try{
      res.redirect("/admin");
    }catch(err){
      console.log(err)
      res.status(500).json({ error: Errors.Message.SOMETHING_WENT_WRONG });
    }
  }

export default admincontroller