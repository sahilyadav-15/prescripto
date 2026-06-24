import { Router } from "express";
import { addDoctor } from "../controllers/admin.ctrl.js";
import upload from "../middlewares/multer.js";

const adminRoute = Router();

adminRoute.post("/add-doctor", upload.single("image"), addDoctor);

export default adminRoute;
