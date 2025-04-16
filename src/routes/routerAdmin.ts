import { Router } from 'express';
import admincontroller from '../controllers/Admin.Controller'; 
const routerAdmin = Router();

// Admin login
routerAdmin.post("/login", admincontroller.processLogin);

// Admin signup
routerAdmin.post("/signup", admincontroller.processSignup);

// Admin logout
routerAdmin.post("/logout", admincontroller.logout);

// Barcha studentlar ro‘yxatini olish
routerAdmin.get("/students", admincontroller.getAllStudent);

// Barcha teacher statuslarini olish
routerAdmin.get("/teachers/status", admincontroller.getAllTeacherStatus);

// Barcha darsliklar ro‘yxatini olish
routerAdmin.get("/darsliklar", admincontroller.getAlldarsliklar);

// Student statusini yangilash
routerAdmin.patch("/student/:id/status", admincontroller.updateStudetnStatus);

export default routerAdmin;
