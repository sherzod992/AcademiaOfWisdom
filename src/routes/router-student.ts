import { Router } from "express";
import studentController from "../controllers/Student.Controller";
const router = Router();

router.post("/signup", studentController.processSignup);
router.post("/login", studentController.processLogin);
router.get("/lessons", studentController.getAllLessons);
router.get("/lessons/:lessonId", studentController.viewLessonDetail);
