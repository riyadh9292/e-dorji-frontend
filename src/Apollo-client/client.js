import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
// import { ApolloClient, InMemoryCache } from "@apollo/client";
// import createUploadLink from "apollo-upload-client/public/createUploadLink.js";

// export const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: createUploadLink(),
// });
