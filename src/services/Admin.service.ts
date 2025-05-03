
import Errors, { HttpCode, Message } from '../libs/Error';
import express from 'express';
import * as bcrypt from "bcryptjs";
import admincontroller from '../controllers/Admin.Controller';
// express
import adminSchema from '../schema/Admin-schema';

import StudentSchema from '../schema/Student-schema';
import TeacherSchema from '../schema/Teacher-schema';
import LessonSchema from '../schema/Lesson-schema';
import { error } from 'console';
import { LoginInput, Member, MemberInput, MemberUpdateInput } from '../libs/types/memebers';
import { MemberType } from '../libs/enums/memeber.enum';
import { shapeIntoMongooseObjectId } from '../libs/config';

 
class AdminService {
  private readonly adminSchema;
  memberModel: any;
  constructor() {
    this.adminSchema = adminSchema;
  }



  public async processSignup(input:MemberInput): Promise<Member>{
    const exist = await this.memberModel
   .findOne({memberType: MemberType.ADMIN}).exec();
  
   if(exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
  
   const salt = await bcrypt.genSalt();
   input.memberPassword = await bcrypt.hash(input.memberPassword,salt)
  
   try{
       const result =  await this.memberModel.create(input);
       result.memberPassword = "";
       return result.toObject() as Member;
   } catch(err){
       throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);   
   }
  
  };

  public async processLogin(input:LoginInput): Promise<Member> {
    const member = await this.memberModel
    .findOne({memberNick:input.memberNick}, {memberNick: 1,memberPassword:1})
    .exec();

    if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK)

    const isMatch = await bcrypt.compare(input.memberPassword, member.memberPassword)

    if(!isMatch){
        throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }
    return await this.memberModel.findById(member._id).exec();
};

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
  public async updateChosenUser(input: MemberUpdateInput): Promise<Member[]>{
    input._id = shapeIntoMongooseObjectId(input._id);
    const result = await this.memberModel.findOneAndUpdate({ _id: input._id },  input, { new: true })
    .exec();

    if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    return result;
}

}

export default AdminService;