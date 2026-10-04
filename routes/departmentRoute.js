import express from "express";
import { department } from "../controllers/departmentcontroller.js";


const router = express.Router();


router.post("/department", department.insert);
router.get("/department", department.all);
router.get("/department/:id", department.id);

export default router;
