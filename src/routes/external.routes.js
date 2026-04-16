import express from "express";
import { getExternalData } from "../controllers/external.controller.js";

const router = express.Router();

router.get("/external-data", getExternalData);

export default router;