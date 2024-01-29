// import express from "express";
// const router = express.Router();
// import {
//   createResidency,
//   getAllResidencies,
//   getResidency,
// } from "../controllers/residencyController.js";

// router.post("/create", createResidency);
// router.get("/:id", getResidency);
// router.get("/allresd", getAllResidencies);

// export { router as residencyRoute };


import express from "express";
import { createResidency, getAllResidencies, getResidency } from "../controllers/residencyController.js";
const router = express.Router();

router.post("/create", createResidency)
router.get("/allresd", getAllResidencies)
router.get("/:id", getResidency)
export {router as residencyRoute}