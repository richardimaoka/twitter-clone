/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export const Profile = (): JSX.Element => {
  return (
    <div>
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            margin-left: 10px;
            width: 56px;
            height: 32px;
          `}
        >
          back
        </div>
        <div>
          <div>リチャード 伊真岡</div>
          <div>3000 件のツイート</div>
        </div>
      </div>
      <div>
        <div>picture</div>
        <div>リチャード 伊真岡</div>
        <div>@RichardImaokaJP</div>
        <div>エンジニアリング・マネージャー</div>
        <div>
          <span>219 follow</span>
          <span>358 follower</span>
        </div>
      </div>
      <div>
        <div>3000 件のツイート</div>
      </div>
    </div>
  );
};