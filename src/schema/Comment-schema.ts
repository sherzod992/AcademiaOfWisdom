import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  LessonId: { type: mongoose.Types.ObjectId, ref: "Lesson", required: true },
  UserId: { type: mongoose.Types.ObjectId, refPath: 'UserModel', required: true },
  UserModel: { type: String, enum: ['Students', 'Teachers'], required: true },
  Content: { type: String, required: true },
  Rating: { type: Number, min: 1, max: 5, required: true },
}, { timestamps: true });

export default mongoose.model("Comment", CommentSchema);
