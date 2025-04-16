import { Router } from "express";

const routerAdmin = Router(); 

routerAdmin.get("/admin", (req, res) => {
  res.render("admin/index", { title: "Admin Panel" });
});

export default routerAdmin;