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

export interface Contact {
  id_contact: number;
  tel: string;
  email: string;
  instagram: string;
  facebook: string;
  active: boolean;
}

export interface Direction {
  id_direction: number;
  zone: string;
  active: boolean;
  street: string;
}
