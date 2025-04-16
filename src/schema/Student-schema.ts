import mongoose from "mongoose";
import { UserRole } from "../libs/enums/student.enum";
import { StudentStatus } from "../libs/enums/student.enum";

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: Object.values(UserRole),
    default: UserRole.STUDENT
  },
  nickName:{
    type:String,
    required:true,
  },
  status: {
    type: String,
    enum: Object.values(StudentStatus),
    default: StudentStatus.ACTIVE
  },
  isBlocked: { type: Boolean, default: false },
  enrolledLessons: [{ type: mongoose.Types.ObjectId, ref: "Lesson" }],
  homeworkResults: [{ type: mongoose.Types.ObjectId, ref: "HomeworkResult" }]
}, { timestamps: true });

export default mongoose.model("Student", StudentSchema);
