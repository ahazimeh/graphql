import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useApolloClient } from "@apollo/react-hooks";
// import Dogs from "./Dogs";
import { WebSocketLink } from "apollo-link-ws";
// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:8000/graphql`,
//   options: {
//     reconnect: true,
//   },
// });
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
});
// client
//   .query({
//     query: gql`
//       {
//         books {
//           title
//           sub_title
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));
console.log("hi");
const EXCHANGE_RATES = gql`
  {
    books {
      title
      sub_title
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, sub_title }) => (
    <div key={title}>
      <p>
        {title}: {sub_title}
      </p>
    </div>
  ));
}
const ADD_BOOK = gql`
  mutation createBook(
    $title: String!
    $sub_title: String!
    $author: String!
    $status: ID!
  ) {
    createBook(
      title: $title
      sub_title: $sub_title
      author: $author
      status: $status
    ) {
      id
      title
    }
  }
`;
const Book = gql`
  query book($id: ID!) {
    book(id: $id) {
      title
      sub_title
    }
  }
`;
function GetBook() {
  const { loading, error, data } = useQuery(Book, {
    variables: { id: 1 },
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data);
  return data.book.title;
  // const [book] = useQuery(Book);
  // book({
  //   variables: {
  //     id: 1,
  //   },
  // }).then(function (response) {
  //   console.log(response.data);
  // });
}
function ADD_BOOKfn() {
  let input;
  const [createBook] = useMutation(ADD_BOOK);

  return (
    <div>
      <p>Test</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createBook({
            variables: {
              title: "input.value",
              sub_title: "asdas",
              author: "adas",
              status: 1,
            },
          }).then(function (response) {
            console.log(response.data);
          });

          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
}

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      {/* <Dogs /> */}
      <GetBook />
      <ADD_BOOKfn />
      <ExchangeRates />
    </div>
  </ApolloProvider>
);

export default App;
