export type IUser = {
  name: string;
  email: string;
  age: number;
  photo?: string; // Optional field
  role: "user" | "admin";
  userStatus: "active" | "inactive";
};
