import mongoose, { Schema, Document } from 'mongoose';



const announcementSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("announcement", announcementSchema);
