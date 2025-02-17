import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userServices.createUserIntoDB(user);
    res.status(200).json({
      status: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    // console.log(err);
    res.json({
      status: false,
      message: "User creation failed",
      error,
    });
  }
};
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserFromDB();
    res.status(200).json({
      status: true,
      message: "User read successfully",
      data: result,
    });
  } catch (error) {
    // console.log(err);
    res.json({
      status: false,
      message: "User read failed",
      error,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await userServices.getSingleUserFromDB(userId);
    res.status(200).json({
      status: true,
      message: "User single read successfully",
      data: result,
    });
  } catch (error) {
    // console.log(err);
    res.json({
      status: false,
      message: "User single read failed",
      error,
    });
  }
};
const getUpdateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updateData = req.body;
    const result = await userServices.getUpdateUserFromDB(userId, updateData);
    res.status(200).json({
      status: true,
      message: "User update successfully",
      data: result,
    });
  } catch (error) {
    // console.log(err);
    res.json({
      status: false,
      message: "Use rupdate failed",
      error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    await userServices.deleteUserFromDB(userId);
    res.status(200).json({
      status: true,
      message: "User single delete successfully",
      data: {},
    });
  } catch (error) {
    // console.log(err);
    res.json({
      status: false,
      message: "User single delete failed",
      error,
    });
  }
};

export const userControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  getUpdateUser,
  deleteUser,
};
