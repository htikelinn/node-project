import { gql } from "@apollo/client";

export const listAllProducts = gql`
query ProductQuery{
   listAllProducts{
      id
      name
      price
      description
      categoryName
   }
}
`;

export const LIST_PRODUCTS_BY_CATEGORY_NAME = gql`
  query ProductQuery($categoryName: String!) {
listProductsByCategoryName(categoryName: $categoryName) {
    id
    name
    price
    categoryName
    description
  }
}
`;

