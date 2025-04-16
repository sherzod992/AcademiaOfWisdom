import { ObjectId } from "mongoose";

export interface Comment {
  _id?: string;
  LessonId: ObjectId;
  UserId: ObjectId;
  Content: string;
  Rating: number;
  createdAt?: Date;
  updatedAt?: Date;
}
