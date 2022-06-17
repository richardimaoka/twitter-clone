/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Profile } from "./Profile";

export const Main = (): JSX.Element => {
  return (
    <main
      css={css`
        background-color: #ab9deb;
      `}
    >
      <div
        css={css`
          @media (min-width: 720px) {
            width: 600px;
            height: 100%;
          }
          border-left: 1px solid #ececec;
          border-right: 1px solid #ececec;
        `}
      >
        <Profile />
        <div>
          <div>ツイート</div>
          <div>ツイート</div>
          <div>ツイート</div>
        </div>
      </div>
    </main>
  );
};
