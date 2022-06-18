/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export interface TweetProps {
  empty: string;
}

export const Tweet = (): JSX.Element => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 50px auto;
        grid-template-rows: 26px auto 20px;
        border-top: solid 1px #ffffff;
        border-bottom: solid 1px #ffffff;
      `}
    >
      <div
        css={css`
          grid-row: 1/4;
        `}
      >
        <img
          width="40px"
          height="40px"
          css={css`
            display: block;
            border-radius: 20px;
          `}
          src="http://localhost:8080/images/profile.jpg"
        />
      </div>
      <div
        css={css`
          grid-row: 1/2;
          display: grid;
          grid-template-columns: fr fr fr;
          grid-template-rows: auto;
          font-size: 14px;
        `}
      >
        <div
          css={css`
            grid-column: 1/2;
          `}
        >
          richard imaoka
        </div>
        <div
          css={css`
            grid-column: 2/3;
          `}
        >
          @RichardImaokaJP
        </div>
        <div
          css={css`
            grid-column: 3/4;
          `}
        >
          3月1日
        </div>
      </div>
      <div
        css={css`
          grid-row: 2/3;
        `}
      >
        <div>
          <span>
            AWSのソリューション・アーキテクト・アソシエイトに続いて、SysOps
            アソシエイトも取得しました。
          </span>
        </div>
        <div>
          <img
            width="680px"
            height="296px"
            css={css`
              width: 100%;
            `}
            src="http://localhost:8080/images/aws-certs.png"
          />
        </div>
      </div>
      <div
        css={css`
          grid-row: 3/4;
        `}
      ></div>
    </div>
  );
};
