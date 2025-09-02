import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "@apollo/client";



const httpLink = createHttpLink({
    uri: 'http://localhost:8080/affable-bean',
});

export const appoloClient = new ApolloClient({
    link:httpLink,
    cache: new InMemoryCache()
});