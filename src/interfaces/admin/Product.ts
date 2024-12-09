export interface Product {
  id_product: number;
  price: number;
  product: string;
  type: string;
  active: boolean;
  flavor: string;
  presentation: string;
  description: string;
  product_image_url: string;
}

export interface ProductPost {
  price: number;
  product: string;
  type: string;
  active: boolean;
  flavor: string;
  presentation: string;
  description: string;
  product_image_url: string;
}
