// src/types/product.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  categoryName: string;
  quantity?: number;
}

export interface ProductsByCategoryResponse {
  listProductsByCategoryName: Product[];
}

export interface ProductsByCategoryVariables {
  name: string;
  
}