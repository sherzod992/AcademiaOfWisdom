import { Request, Response } from "express";
import TeacherService from "../services/Teacher.service";

const teacherService = new TeacherService();
const teacherController: any = {};

teacherController.processSignup = async (req: Request, res: Response) => {
  try {
    const result = await teacherService.processSignup(req.body);
    res.status(201).json({ message: result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

teacherController.processLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await teacherService.processLogin(email, password);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

teacherController.getOwnLessons = async (req: Request, res: Response) => {
  try {
    const lessons = await teacherService.getOwnLessons(req.params.teacherId);
    res.status(200).json({ lessons });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

teacherController.createLesson = async (req: Request, res: Response) => {
  try {
    const result = await teacherService.createLesson(req.params.teacherId, req.body);
    res.status(201).json({ message: result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

teacherController.updateLesson = async (req: Request, res: Response) => {
  try {
    const result = await teacherService.updateLesson(req.params.lessonId, req.body);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

teacherController.deleteLesson = async (req: Request, res: Response) => {
  try {
    const result = await teacherService.deleteLesson(req.params.lessonId);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

teacherController.getOwnProfile = async (req: Request, res: Response) => {
  try {
    const profile = await teacherService.getOwnProfile(req.params.teacherId);
    res.status(200).json({ profile });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

teacherController.updateOwnProfile = async (req: Request, res: Response) => {
  try {
    const result = await teacherService.updateOwnProfile(req.params.teacherId, req.body);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

teacherController.logout = async (req: Request, res: Response) => {
  try {
    const result = await teacherService.logout();
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default teacherController;
