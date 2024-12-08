import { Contact } from "./Contact";
import { Direction } from "./Direction";

export interface Branch {
  id_branch: number;
  name: string;
  date_start: Date;
  active: boolean;
  hour_start: number;
  hour_end: number;
  direction: Direction;
  contact: Contact;
}

export interface BranchPost {
  name?: string;
  date_start?: Date | string;
  active?: boolean;
  hour_start?: number;
  hour_end?: number;
  id_direction?: number;
  id_contact?: number;
}
