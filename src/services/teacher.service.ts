import TeacherSchema from "../schema/Teacher-schema";
import LessonSchema from "../schema/Lesson-schema";
import { TeacherInput } from "../libs/types/teacher";

class TeacherService {
  async processSignup(input: TeacherInput): Promise<string> {
    console.log("TeacherService: processSignup ishladi");
    const newTeacher = new TeacherSchema(input);
    await newTeacher.save();
    return `Yangi o'qituvchi: ${input.fullName} yaratildi`;
  }

  async processLogin(email: string, password: string): Promise<string> {
    console.log("TeacherService: processLogin ishladi");
    const teacher = await TeacherSchema.findOne({ email });
    if (!teacher || teacher.password !== password) {
      throw new Error("Login yoki parol xato");
    }
    return "Login muvaffaqiyatli";
  }

  async getOwnLessons(teacherId: string): Promise<any> {
    const lessons = await LessonSchema.find({ teacher: teacherId }).exec();
    return lessons;
  }

  async createLesson(teacherId: string, lessonData: any): Promise<string> {
    const newLesson = new LessonSchema({ ...lessonData, teacher: teacherId });
    await newLesson.save();
    return `Darslik ${lessonData.title} yaratildi`;
  }

  async updateLesson(lessonId: string, updateData: any): Promise<string> {
    await LessonSchema.findByIdAndUpdate(lessonId, updateData);
    return "Darslik yangilandi";
  }

  async deleteLesson(lessonId: string): Promise<string> {
    await LessonSchema.findByIdAndDelete(lessonId);
    return "Darslik o'chirildi";
  }

  async getOwnProfile(teacherId: string): Promise<any> {
    const profile = await TeacherSchema.findById(teacherId);
    return profile;
  }

  async updateOwnProfile(teacherId: string, updateData: any): Promise<string> {
    await TeacherSchema.findByIdAndUpdate(teacherId, updateData);
    return "Profil yangilandi";
  }

  async logout(): Promise<string> {
    return "O'qituvchi tizimdan chiqdi";
  }
}

export default TeacherService;
