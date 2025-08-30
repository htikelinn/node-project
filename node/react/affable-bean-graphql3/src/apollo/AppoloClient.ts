import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "@apollo/client";




const httpLink = createHttpLink({
  uri: "http://localhost:8080/affable-bean",
  credentials: "include", // needed if backend uses allowCredentials(true)
});

export const appoloClient = new ApolloClient({
    link:httpLink,
    cache: new InMemoryCache()
});