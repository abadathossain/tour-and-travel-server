import express from "express";
import { userControllers } from "./user.controller";
const router = express.Router();
router.post("/create-user", userControllers.createUser);
router.get("/", userControllers.getAllUser);
router.get("/:userId", userControllers.getSingleUser);
router.patch("/:userId", userControllers.getUpdateUser);
router.delete("/:userId", userControllers.deleteUser);

export const userRoutes = router;
