export type IUser = {
  name: string;
  email: string;
  age: number;
  photo?: string | null; // Optional field
  role: "user" | "admin";
  userStatus: "active" | "inactive";
};
