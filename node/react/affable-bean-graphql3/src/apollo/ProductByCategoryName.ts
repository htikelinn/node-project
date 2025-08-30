import { useQuery } from "@apollo/client/react";
import type { ProductsByCategoryResponse, ProductsByCategoryVariables } from "../model/Product";
import { LIST_PRODUCTS_BY_CATEGORY_NAME } from "./ProductQuery";

// Custom Hook
export const useProductsByCategory = (categoryName: string) => {
  const { data, loading, error, refetch } = useQuery<
    ProductsByCategoryResponse, 
    ProductsByCategoryVariables
  >(
    LIST_PRODUCTS_BY_CATEGORY_NAME,
    {
      variables: { categoryName: categoryName }, // ✅ fixed variable name
      skip: !categoryName,
    }
  );

  return {
    products: data?.listProductsByCategoryName || [], // ✅ fixed typo
    loading,
    error,
    refetch,
  };
};
