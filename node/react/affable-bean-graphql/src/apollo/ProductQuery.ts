import { gql } from "@apollo/client";

export const LIST_ALL_PRODUCTS = gql`
query ProductQuery{
listAllProducts{
    id
    name
    price
    categoryName
    description
    }
}
`;

export const LIST_ALL_PRODUCTS_BY_CATEGORY = gql`
  query listProductByCategoryNameQuery($categoryName: String) {
    listProductByCategoryName(categoryName: $categoryName) {
      id
      name
      price
      categoryName
      description
    }
  }
`;