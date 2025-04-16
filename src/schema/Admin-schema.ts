import mongoose, { Schema, Document } from "mongoose";
import { AdminRules } from "../libs/enums/Admin.enum";

const adminSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    nickName:{
      type:String,
      required:true,
    },
    adminNick:{
        type:String,
        required: true,
    },
    phoneNumber: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    adminRule: {
      type: String,
      enum: AdminRules,
      default: AdminRules.CAN_MANAGE_ANNOUNCEMENTS
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
