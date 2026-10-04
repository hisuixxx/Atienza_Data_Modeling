import express from "express";
import { instructor } from "../controllers/instructorcontroller.js";

const router = express.Router();
   

router.post("/instructor", instructor.insert);
router.get("/instructor", instructor.all);
router.get("/instructor/:id", instructor.id);


export default router;
