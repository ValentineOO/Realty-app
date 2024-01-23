import express from "express";
const router = express.Router();
import {
  createResidency,
  getAllResidencies,
} from "../controllers/residencyController.js";

router.post("/create", createResidency);
router.get("/:id", getResidency);
router.get("/allresd", getAllResidencies);

export { router as residencyRoute };
