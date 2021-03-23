import logo from "./logo.svg";
import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then((result) => console.log("result"));

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const Dogs = () => (
  <div>
    <h2>My first Apollo app 🚀</h2>
  </div>
);

export default Dogs;
