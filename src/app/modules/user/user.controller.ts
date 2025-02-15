import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const newUser = await userServices.createUserIntoDB(user);
    res.status(200).json({
      status: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    console.log(err);
  }
};

export const userControllers = {
  createUser,
};
