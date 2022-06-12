/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Main } from "./Main";
import { Leftbar } from "./Leftbar";
import { Rightbar } from "./Rightbar";

function App() {
  return (
    <div
      css={css`
        display: flex;
        min-height: 100vh;
      `}
    >
      <Leftbar />
      <Main />
      <Rightbar />
    </div>
  );
}

export default App;
