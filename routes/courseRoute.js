import express from "express";
import { courses } from "../controllers/coursescontroller.js";

const router = express.Router();


router.post("/courses", courses.insert);
router.get("/courses", courses.all);
router.get("/courses/:id", courses.id);

export default router;
