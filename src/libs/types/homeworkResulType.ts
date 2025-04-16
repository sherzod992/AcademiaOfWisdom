import { ObjectId } from "mongoose";

export interface HomeworkResult {
  _id?: string;
  StudentId: ObjectId;
  LessonId: ObjectId;
  Answer: string;
  IsCorrect: boolean;
  Score: number;
  Comment?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
