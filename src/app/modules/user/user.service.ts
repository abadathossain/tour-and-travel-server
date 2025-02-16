import { IUser } from "./user.interface";
import { userModel } from "./user.model";

const createUserIntoDB = async (user: IUser) => {
  const result = await userModel.create(user);
  return result;
};
const getAllUserFromDB = async () => {
  const result = await userModel.find();
  return result;
};
const getSingleUserFromDB = async (id: string) => {
  const result = await userModel.findById(id);
  return result;
};
const getUpdateUserFromDB = async (id: string, updateData: Partial<IUser>) => {
  const result = await userModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return result;
};
const deleteUserFromDB = async (id: string) => {
  const result = await userModel.findByIdAndDelete(id);
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  getUpdateUserFromDB,
  deleteUserFromDB,
};
