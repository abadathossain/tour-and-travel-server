import { ITour } from "./tour.interface";
import { tourModel } from "./tour.model";

const createTourIntoDB = async (tour: ITour) => {
  const result = await tourModel.create(tour);
  return result;
};
// const getAllUserFromDB = async () => {
//   const result = await tourModel.find();
//   return result;
// };
// const getSingleUserFromDB = async (id: string) => {
//   const result = await tourModel.findById(id);
//   return result;
// };
// const getUpdateUserFromDB = async (id: string, updateData: Partial<IUser>) => {
//   const result = await tourModel.findByIdAndUpdate(id, updateData, {
//     new: true,
//   });
//   return result;
// };
// const deleteUserFromDB = async (id: string) => {
//   const result = await tourModel.findByIdAndDelete(id);
//   return result;
// };

export const tourServices = {
  createTourIntoDB,
};
