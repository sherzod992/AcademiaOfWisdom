import { Schema, model } from "mongoose";
import { LessonStatus, LessonCollection } from "../libs/enums/Lesson.enums";
import { Lesson } from "./../libs/types/lesson";

const lessonSchema = new Schema<Lesson>({
  LessonStatus: { type: String, enum: Object.values(LessonStatus), default: LessonStatus.DRAFT },
  LessonCollection: { type: String, enum: Object.values(LessonCollection), required: true },
  LessonName: { type: String, required: true },
  LessonPrice: { type: Number, required: true },
  LessonDesc: { type: String },
  LessonImages: { type: [String], required: true },
  LessonViews: { type: Number, default: 0 },
  LessonRating: { type: Number, default: 0 },
  CommentsCount: { type: Number, default: 0 }
}, {
  timestamps: true
});

export default model<Lesson>('Lesson', lessonSchema);
