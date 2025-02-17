import { Request, Response } from "express";
import { tourServices } from "./tour.service";

const createTour = async (req: Request, res: Response) => {
  try {
    const tour = req.body;
    const result = await tourServices.createTourIntoDB(tour);
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
export const tourControllers = {
  createTour,
};
