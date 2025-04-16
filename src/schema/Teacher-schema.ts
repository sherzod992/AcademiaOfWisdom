import { Schema, model, Types } from "mongoose";
import { TeacherStatus } from "../libs/enums/teacher.enum";

const TeacherSchema = new Schema({
  FullName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  nickName:{
    type:String,
    required:true,
  },
  Role: {
    type: String,
    enum: ["teacher"],
    default: "studen",
  },
  Status: {
    type: String,
    enum: Object.values(TeacherStatus),
    default: TeacherStatus.ACTIVE,
  },
  ProfileImage: {
    type: String,
  },
  Description: {
    type: String,
  },
  Lessons: [
    {
      type: Types.ObjectId,
      ref: "Lesson",
    },
  ],
}, { timestamps: true });

export default model("Teacher", TeacherSchema);
