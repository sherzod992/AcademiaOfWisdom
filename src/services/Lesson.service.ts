import LessonSchema from "../schema/Lesson-schema";
import {  LessonInput, LessonUpdateInput } from "../libs/types/lesson.types";



class LessonService{
    private readonly lessonSchema;
    constructor(){
        this.lessonSchema = LessonSchema;
    }
    public async getAllLessons(): Promise<any> {

    }
    public async getLessonById(lessonId: string): Promise<any>{

    }
    public async createLesson(input: LessonInput): Promise<any> {

    }
    public async deleteLesson(lessonId: string): Promise<any> {

    }
}
export default LessonService;