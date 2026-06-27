import { Router } from "express";
import { addDoctor, loginAdmin } from "../controllers/admin.ctrl.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/auth.admin.mw.js";

const adminRoute = Router();

adminRoute.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRoute.post("/login", loginAdmin);

export default adminRoute;
