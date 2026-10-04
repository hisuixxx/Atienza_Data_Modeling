import express from "express";
import { student } from "../controllers/studentcontroller.js";

const router = express.Router();

router.post("/student", student.insert);
router.get("/student", student.all);
router.get("/student/:id", student.id);


export default router;
