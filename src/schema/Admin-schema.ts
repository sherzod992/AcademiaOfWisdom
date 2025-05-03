import mongoose, { Schema, Document } from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/memeber.enum";
import { MemberType } from "../libs/enums/memeber.enum";

// Admin schema
const adminSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,  // Ensures unique email for each admin
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'], // Email format validation
    },
    nickName: {
      type: String,
      required: true,
    },
    memberType:{
      type: String,
      enum: MemberType,
      default: MemberType.ADMIN,
    },
    adminNick: {
      type: String,
      required: true,
      unique: true,  // Make admin nickname unique
    },
    phoneNumber: {
      type: String,
      index:{ unique: true, sparse: true }, 
      match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'],
      require:true  // Phone number validation
    },
    memberAdress:{
      type:String
    },
    password: {
      type: String,
      select:false,
      required: true,
      index:{ unique: true, sparse: true },
      minlength: 6,  // Minimum password length validation
    },
    memeberStatus:{
      type: String,
      enum:MemberStatus,
      default: MemberStatus.ACTIVE,
    },
    memberImage:{
      type:String,
    },
    memberPoints: {
      type : Number,
      default:0
  },
  },
  { timestamps: true }
);

// Password hashing middleware for security
adminSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const bcrypt = require('bcryptjs');
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

export default mongoose.model("Admin", adminSchema);
