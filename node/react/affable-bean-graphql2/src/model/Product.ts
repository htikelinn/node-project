// src/types/product.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  categoryName: string;
}

export interface ProductsByCategoryResponse {
  listPorductsByCaregoryName: Product[];
}

export interface ProductsByCategoryVariables {
  name: string;
}