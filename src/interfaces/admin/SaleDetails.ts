import { Employee } from "./Employee";
import { Product } from "./Product";

export interface SaleDetails {
  id_sale: number;
  id_employee: number;
  id_product: number;
  date: Date;
  quantity: number;
}

export interface SaleDetailsOne {
  id_sale: number;
  id_employee: number;
  id_product: number;
  date: Date;
  quantity: number;
  employee: Employee;
  product: Product;
}
