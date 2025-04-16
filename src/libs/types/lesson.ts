
// types/lesson.ts
import { ObjectId } from "mongoose";
import { LessonStatus, LessonCollection } from "../enums/Lesson.enums";

// Lesson Interface - dars haqida umumiy ma'lumot
export interface Lesson {
    _id?: string;
    LessonStatus: LessonStatus;
    LessonCollection: LessonCollection;
    LessonName: string;
    LessonPrice: number;
    LessonDesc?: string;
    LessonImages: string[];
    LessonViews?: number;
    LessonRating?: number;
    CommentsCount?: number;
    createdAt?: Date;
    updatedAt?: Date;
  }

// Dars qo'shish uchun input interfeysi
export interface LessonInput {
    LessonStatus?: LessonStatus;       // Darsning holati (to'lovli, bepul)
    LessonCollection: LessonCollection; // Dars turi (video, pdf, matn)
    LessonName: string;                 // Dars nomi
    LessonPrice: number;                // Dars narxi
    LessonDesc?: string;                // Dars tavsifi (ixtiyoriy)
    LessonImages: string[];             // Darsning rasm URL manzillari
    LessonViews?: number;               // Dars ko'rishlar soni (default: 0)
}

// Dars yangilash uchun input interfeysi
export interface LessonUpdateInput {
    _id: ObjectId;                     // Darsning ID si
    LessonStatus?: LessonStatus;        // Darsning holati (to'lovli, bepul)
    LessonCollection?: LessonCollection;// Dars turi (video, pdf, matn)
    LessonName?: string;                // Dars nomi
    LessonPrice?: number;               // Dars narxi
    LessonDesc?: string;                // Dars tavsifi
    LessonImages?: string[];            // Darsning rasm URL manzillari
    LessonViews?: number;               // Dars ko'rishlar soni
}
