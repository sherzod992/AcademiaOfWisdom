import mongoose from "mongoose";

const HomeworkResultSchema = new mongoose.Schema({
  StudentId: { type: mongoose.Types.ObjectId, ref: "Students", required: true },
  LessonId: { type: mongoose.Types.ObjectId, ref: "Lesson", required: true },
  Answer: { type: String, required: true },
  IsCorrect: { type: Boolean, default: false },
  Score: { type: Number, required: true },
  Comment: { type: String },
}, { timestamps: true });

export default mongoose.model("HomeworkResult", HomeworkResultSchema);
