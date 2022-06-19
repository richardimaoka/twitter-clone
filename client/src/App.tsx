/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Main } from "./Main";
import { Leftbar } from "./Leftbar";
import { Rightbar } from "./Rightbar";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div
        css={css`
          display: flex;
          min-height: 100vh;
          justify-content: center;
        `}
      >
        <Leftbar />
        <Main />
        <Rightbar />
      </div>
    </ApolloProvider>
  );
}

export default App;
