import {Router} from 'express';

const routerStudent = Router();

routerStudent.get("/student", (req, res) => {
    res.render("student/index", { title: "Student Panel" });
});
