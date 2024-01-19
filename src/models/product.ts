export interface Product {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
}

export interface Cart {
  id: string;
  quantity: number;
}
