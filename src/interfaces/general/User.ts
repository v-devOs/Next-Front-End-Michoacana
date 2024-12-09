import { Employee } from "../admin";

export interface User {
  user: UserClass;
  access_token: string;
}

export interface UserClass {
  id_user: number;
  email: string;
  employee: Employee;
  active: boolean;
  password?: string;
}

export interface UserPost {
  email: string;
  password: string;
  id_employee: number;
  active: boolean;
}
