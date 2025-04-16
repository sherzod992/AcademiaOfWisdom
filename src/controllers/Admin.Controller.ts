import { Request,Response,NextFunction } from "express";
import { T } from "../libs/types/common";
import { Admin, AdminInput } from "../libs/types/admin";
import { AdminRules } from "../libs/enums/Admin.enum";
import Errors from "../libs/Error";
import AdminService from "../services/Admin.service";


const admincontroller: T={};
const adminservice = new AdminService()


admincontroller.processLogin = async(req:Request,res:Response)=>{
    try{
        console.log("admin Login jarayonida")
    }catch(err){
        console.log(err)
    }
}
admincontroller.processSignup = async(req:Request,res:Response)=>{
    try{
        console.log("admin processSignup jarayonida")
    }catch(err){
        console.log(err)
    }
}
admincontroller.logout = async(req:Request,res:Response)=>{
    try{
        console.log("admin processSignup jarayonida")
    }catch(err){
        console.log(err)
    }
}
admincontroller.getAllStudent = async(req:Request,res:Response)=>{
    try{
        console.log("admin processSignup jarayonida")
    }catch(err){
        console.log(err)
    }
}
admincontroller.getAllTeacherStatus = async(req:Request,res:Response)=>{
    try{
        console.log("admin processSignup jarayonida")
    }catch(err){
        console.log(err)
    }
}
admincontroller.getAlldarsliklar = async(req:Request,res:Response)=>{
    try{
        console.log("admin processSignup jarayonida")
    }catch(err){
        console.log(err)
    }
}
admincontroller.updateStudetnStatus = async(req:Request,res:Response)=>{
    try{
        console.log("admin processSignup jarayonida")
    }catch(err){
        console.log(err)
    }
}


export default admincontroller