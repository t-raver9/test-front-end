import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  uri: "https://test-back-end.herokuapp.com/",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
