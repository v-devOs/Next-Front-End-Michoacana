import { Employee } from "../admin";

export interface User {
  user: UserClass;
  access_token: string;
}

export interface UserClass {
  id_user: number;
  email: string;
  employee: Employee;
}
