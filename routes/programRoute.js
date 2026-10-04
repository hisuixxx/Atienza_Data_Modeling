import express from "express";
import { program } from "../controllers/programcontroller.js";
const router = express.Router();

router.post("/program", program.insert);
router.get("/program", program.all);
router.get("/program/:id", program.id);

export default router;
