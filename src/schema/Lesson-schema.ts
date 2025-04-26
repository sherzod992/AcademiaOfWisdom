import mongoose, { Schema, Document } from "mongoose";

export interface LessonDocument extends Document {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  category: string;
  price: number;
  isFree: boolean;
  duration: number;
  viewCount: number;
  teacher: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const LessonSchema = new Schema<LessonDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
    thumbnailUrl: { type: String },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    isFree: { type: Boolean, default: false },
    duration: { type: Number, required: true }, // sekund
    viewCount: { type: Number, default: 0 },
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher", required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<LessonDocument>("Lesson", LessonSchema);
