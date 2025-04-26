import { Request, Response } from "express";
import LessonService from "../services/Lesson.service";

const lessonService = new LessonService();

export const getAllLessons = async (req: Request, res: Response) => {
  try {
    const lessons = await lessonService.getAllLessons();
    res.status(200).json(lessons);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getLessonById = async (req: Request, res: Response) => {
  try {
    const { lessonId } = req.params;
    const lesson = await lessonService.getLessonById(lessonId);
    res.status(200).json(lesson);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createLesson = async (req: Request, res: Response) => {
  try {
    const lessonData = req.body;
    const newLesson = await lessonService.createLesson(lessonData);
    res.status(201).json(newLesson);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteLesson = async (req: Request, res: Response) => {
  try {
    const { lessonId } = req.params;
    const message = await lessonService.deleteLesson(lessonId);
    res.status(200).json({ message });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
