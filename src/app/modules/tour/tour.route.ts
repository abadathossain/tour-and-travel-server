import express from "express";
import { tourControllers } from "./tour.controller";

const router = express.Router();
router.post("/create-tour", tourControllers.createTour);

export const tourRoutes = router;
