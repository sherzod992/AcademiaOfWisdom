import mongoose from "mongoose";

const LessonCollectionSchema = new mongoose.Schema({
  Name: { type: String, required: true, unique: true },
  Description: { type: String },
}, { timestamps: true });

export default mongoose.model("LessonCollection", LessonCollectionSchema);
