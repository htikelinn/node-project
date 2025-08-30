import { gql } from "@apollo/client";

export const listAllProducts =gql `
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
  query ProductQuery($name: String!) {
    listPorductsByCaregoryName(categoryName: $name ){
      id
      name
      price
      description
      categoryName
    }
  }
`;

