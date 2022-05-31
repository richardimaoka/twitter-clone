/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Profile } from "./Profile";

export const Main = (): JSX.Element => {
  return (
    <main
      css={css`
        @media (min-width: 720px) {
          width: 600px;
        }
      `}
    >
      <Profile />
      <div>
        <div>ツイート</div>
        <div>ツイート</div>
        <div>ツイート</div>
        <div>ツイート</div>
        <div>ツイート</div>
      </div>
    </main>
  );
};
