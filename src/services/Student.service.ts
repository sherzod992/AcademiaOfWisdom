import { Schema } from "mongoose";
import { StudentType } from "../libs/enums/student.enum";
import { StudentInput, StudentLoginInput, StudentSignupInput } from "../libs/types/student.types";
import LessonSchema, { LessonDocument } from "../schema/Lesson-schema";
import StudentSchema from "../schema/Student-schema";
// import HomeworkResultSchema from "../schema/HomeworkResult-schema";
import bcrypy from "bcrypt";
class StudentService {
  private readonly lessonSchema;
  StudentSchema: any;
  constructor(){
    this.lessonSchema = LessonSchema;

  }
  public async processSignup(input: StudentSignupInput): Promise<any> {
    const existing = await this.StudentSchema.findOne({ memberNick: input.StudentNick });
    if (existing) throw new Error("memberNick already exists");
  
    const newStudent = await this.StudentSchema.create(input);
    return newStudent;
  }
  
  public async processLogin(input: StudentLoginInput): Promise<any> {
    const student = await StudentSchema.findOne({ StudentNick: input.StudentNick });
    if (!student) throw new Error("User not found");
  
    // const isMatch = await bcrypy.compare({password:input.password});
    // if (!isMatch) throw new Error("Invalid password");
    return student;
    // const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET!);
    // return { token, student };
  }
  // // // get all lessons
  public async getAllLessons(): Promise<LessonDocument[]>{
    return this.lessonSchema.find();
  }
  public async getLessonById(lessonId: string):Promise<LessonDocument|null>{
    return LessonSchema.findById(lessonId);
  }
  public async getProfile(studentId: string): Promise<StudentInput> {
    const student = await StudentSchema.findById(studentId).select("-password");
    if (!student) {
      throw new Error("Student not found");
    }
    return student.toObject();
  }

  // shu studentInputni ozgartrish kerak
  public async updateProfile(studentId: string, input: StudentInput): Promise<StudentInput> {
    const updatedStudent = await StudentSchema.findByIdAndUpdate(
      studentId,
      input,
      { new: true, runValidators: true }
    ).select("-password");
  
    if (!updatedStudent) {
      throw new Error("Student not found");
    }
  
    return updatedStudent.toObject();
  }

}
export default StudentService;