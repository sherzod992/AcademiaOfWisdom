import { Request, Response } from "express";
import StudentService from "../services/Student.service";
import { T } from "../libs/types/common";
import { StudentSignupInput } from "../libs/types/student.types";

const studentService = new StudentService();
const studentController: T= {};


studentController.processSignup = async (req: Request, res: Response) => {
  try {
    const input: StudentSignupInput = req.body;
    const student = await studentService.processSignup(input);
    res.status(201).json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }

}
studentController.processSignup = async (req: Request, res: Response) => { 
  try{
    const newStudent = await studentService.processSignup(req.body);
    res.status(201).json({
      newStudent,
    });

  }catch(err){
    console.log(err,"Error in processSignup"); 
  }
}
studentController.processLogin = async (req: Request, res: Response) => {
  const { memberNick, password } = req.body;
  const result = await studentService.processLogin(req.body);
  res.status(200).json(result);
};




studentController.getAllLessons = async (req: Request, res: Response) => {
try{
  const allLessons = await studentService.getAllLessons();
  res.status(200).json(allLessons);
  }catch(err){
  console.log(err,"Error in getAllLessons");
  }
};
studentController.viewLessonDetails = async (req:Request, res:Response) => {
 try{
  const {lessonId} = req.params;
  const lesson = await studentService.getLessonById(lessonId);
  if (!lesson) {
    return res.status(404).json({ success: false, message: "Lesson not found" });
  }
 }catch(err){
  console.log(err,"Error in viewLessonDetails");
 }
}



// studentController.submitExam = async (req: Request, res: Response) => {
// bu bajarilishi uchun aloxida 
// };

// studentController.getMyResults = async (req: Request, res: Response) => {

// };

studentController.getProfile = async (req: Request, res: Response) => {
  try{
    const profile = await studentService.getProfile(req.user.id);
    res.status(200).json({ success: true, data: profile });
  }catch(err){
    console.log(err,"Error in getProfile");
  }

};

studentController.updateProfile = async (req: Request, res: Response) => {
  try{
    const updatedProfile = await studentService.updateProfile(req.user.id, req.body);
    res.status(200).json({ success: true, data: updatedProfile });
  }catch(err){
    console.log(err,"Error in updateProfile");
  }
};
export default studentController;