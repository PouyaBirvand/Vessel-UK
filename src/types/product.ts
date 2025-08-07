export interface ProductColor {
  id: string;
  name: string;
  class: string;
  images: string[];
}

export interface ProductData {
  id: string;
  name: string;
  price: string;
  rating: number;
  defaultColor: string;
  colors: ProductColor[];
  soldOut?: boolean;
}
