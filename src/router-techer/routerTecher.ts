import {Router} from 'express';


const routerTeacher = Router();
routerTeacher.get("/teacher", (req, res) => {
    res.render("teacher/index", { title: "Teacher Panel" });
});