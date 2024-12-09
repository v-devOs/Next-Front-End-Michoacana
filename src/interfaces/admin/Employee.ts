import { Branch } from "./Branch";

export interface Employee {
  id_employee: number;
  no_employee: string;
  gender: string;
  name: string;
  surname: string;
  second_surname: string;
  date_start: string;
  date_end: string;
  tel: string;
  profile_picture_url: string;
  active: boolean;
  rol: string;
  branch: Branch;
  storage: Storage;
}

export interface Storage {
  id_storage: number;
  active: boolean;
}

export interface EmployeePost {
  gender: string;
  name: string;
  surname: string;
  second_surname: string;
  date_end?: string;
  tel: string;
  profile_picture_url: string;
  active: boolean;
  rol: string;
  id_branch: number;
  id_storage: number;
}
