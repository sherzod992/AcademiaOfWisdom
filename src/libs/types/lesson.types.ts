import { ObjectId } from "mongoose";


export interface Lesson {
    _id: ObjectId;
    lessonName: string;
    lessonDescription?: string;
    lessonCollection:string;
    lessonImage?: string;
    lessonPrice: number;
    createdAt: Date;
    updatedAt: Date;
    lessonStatus: string;
}

export interface LessonInput {
    
}