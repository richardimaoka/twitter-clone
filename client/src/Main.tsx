/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export const Main = (): JSX.Element => {
  return (
    <main
      css={css`
        @media (min-width: 720px) {
          width: 600px;
        }
      `}
    >
      <div>
        <div>top rect</div>
        <div>ヒーロー画像</div>
        <div>プロフィール</div>
      </div>
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
