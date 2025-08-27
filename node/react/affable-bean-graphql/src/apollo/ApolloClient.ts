import { createHttpLink } from "@apollo/client";
import { InMemoryCache, ApolloClient } from "@apollo/client";

export const httpLink = createHttpLink({
    uri: "http://localhost:8080/graphql",
});

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),

});