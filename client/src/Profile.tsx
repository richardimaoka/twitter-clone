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
          &larr;
        </div>
        <div>
          <div>
            <span
              css={css`
                font-size: 20px;
                font-weight: 700;
              `}
            >
              リチャード 伊真岡
            </span>
          </div>
          <div>
            <span
              css={css`
                font-size: 13px;
                font-weight: 400;
              `}
            >
              3000 件のツイート
            </span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            width="600px"
            height="200px"
            css={css`
              vertical-align: bottom;
            `}
            src="http://localhost:8080/images/hero.jpg"
          />
        </div>
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
