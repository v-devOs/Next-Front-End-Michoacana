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

// export interface Branch {
//   id_branch: number;
//   name: string;
//   date_start: Date;
//   active: boolean;
//   hour_start: number;
//   hour_end: number;
// }

export interface Storage {
  id_storage: number;
  active: boolean;
}
