import dotenv from 'dotenv';

dotenv.config();

// Morgan log formati
export const MORGAN_FORMAT = process.env.MORGAN_FORMAT || 'dev';

// Port raqami
export const PORT = process.env.PORT || 3000;

// Mongo URI
export const MONGO_URI = process.env.MONGO_URI as string;

// Session uchun secret
export const SESSION_SECRET = process.env.SESSION_SECRET as string;

// Qo‘shimcha sozlamalar kerak bo‘lsa shu yerga yozamiz
import mongoose from "mongoose";
export const shapeIntoMongooseObjectId = (target: any) => {
    return typeof target === "string" ? new mongoose.Types.ObjectId(target) : target;
}