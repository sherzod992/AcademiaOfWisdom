import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType} from "../libs/enums/memeber.enum";
const memberSchema = new Schema({
  memberType: {
    type: String,
    enum: Object.values(MemberType),
    default: MemberType.STUDENT,
  },

  memberStatus: {
    type: String,
    enum: Object.values(MemberStatus),
    default: MemberStatus.ACTIVE,
  },

  memberNick: {
    type: String,
    index: { unique: true, sparse: true },
    required: true,
  },

  memberPhone: {
    type: String,
    index: { unique: true, sparse: true },
    required: true,
  },

  memberPassword: {
    type: String,
    select: false,
    required: true,
  },

  memberImage: {
    type: String, // profil rasmi
  },

  memberAddress: {
    type: String,
  },

  memberDesk: {
    type: String, // qisqacha bio
  },

  // O'qituvchilar uchun
  memberSubjects: {
    type: [String], // masalan ["Math", "Physics"]
    default: [],
  },

  memberExperience: {
    type: Number, // o'qituvchi tajribasi yillarda
    default: 0,
  },

  // Talabalar uchun
  memberLevel: {
    type: String, // masalan: Beginner, Intermediate, Advanced
    default: "Beginner",
  },

  // Umumiy
  memberPoints: {
    type: Number,
    default: 0,
  },

}, { timestamps: true });

export const MemberModel = mongoose.model("Member", memberSchema);
