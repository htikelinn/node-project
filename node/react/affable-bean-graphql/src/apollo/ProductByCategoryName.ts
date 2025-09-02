// src/hooks/useProductsByCategory.ts

import { useQuery } from "@apollo/client/react";
import type { ProductsByCategoryResponse, ProductsByCategoryVariables } from "../model/Product";
import { LIST_PRODUCTS_BY_CATEGORY_NAME } from "./ProductQuery";

//customHook
export const useProductsByCategory = (categoryName: string) => {
  const { data, loading, error, refetch } = useQuery<
    ProductsByCategoryResponse, 
    ProductsByCategoryVariables
  >(
    LIST_PRODUCTS_BY_CATEGORY_NAME,
    {
      variables: { categoryName: categoryName },
      skip: !categoryName,
    }
  );

  return {
    products: data?.listProductsByCategoryName || [],
    loading,
    error,
    refetch,
  };
};

