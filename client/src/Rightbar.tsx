/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Rightbar = (): JSX.Element => {
  return (
    <section
      css={css`
        display: none;
        @media (min-width: 1021px) {
          display: block;
          width: 350px;
          margin-right: auto;
          background-color: #c0c0c0;
        }
      `}
    >
      <div>キーワードを検索</div>
      <div>画像一覧</div>
      <div>おすすめツイート</div>
      <div>利用規約など</div>
    </section>
  );
};
