import { IUser } from "./user.interface";
import { userModel } from "./user.model";

const createUserIntoDB = async (user: IUser) => {
  const result = await userModel.create(user);
  return result;
};

export const userServices = {
  createUserIntoDB,
};
