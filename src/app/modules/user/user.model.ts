import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  photo: String,
  role: {
    type: String,
    required: true,
  },
  userStatus: {
    type: String,
    required: true,
  },
});
export const userModel = model<IUser>("User", userSchema);
