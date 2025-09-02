// src/types/product.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  quantity?:number;
  description: string;
  categoryName: string;
}

export interface ProductsByCategoryResponse {
  listProductsByCategoryName: Product[];
}

export interface ProductsByCategoryVariables {
  name: string;
}