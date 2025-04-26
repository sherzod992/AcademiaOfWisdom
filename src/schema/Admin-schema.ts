import mongoose, { Schema, Document } from "mongoose";
import { AdminRules } from "../libs/enums/Admin.enum";

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
    adminNick: {
      type: String,
      required: true,
      unique: true,  // Make admin nickname unique
    },
    phoneNumber: {
      type: String,
      match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'],  // Phone number validation
    },
    password: {
      type: String,
      required: true,
      minlength: 6,  // Minimum password length validation
    },
    adminRule: {
      type: String,
      enum: AdminRules,  // Make sure AdminRules enum is correct
      default: AdminRules.CAN_MANAGE_ANNOUNCEMENTS,
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
