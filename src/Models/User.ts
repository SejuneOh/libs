export interface User {
  email: string;
  name: string;
  password: string;
}

export type GetUserType = Omit<User, "password">;
