/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Main } from "./Main";

const flex = css`
  display: flex;
`;

function App() {
  return (
    <div css={flex}>
      <section
        css={css`
          @media (min-width: 1280px) {
            width: 270px;
          }
        `}
      >
        <div>logo</div>
        <div>home</div>
        <div>話題を検索</div>
        <div>通知</div>
        <div>メッセージ</div>
        <div>ブックマーク</div>
        <div>リスト</div>
        <div>プロフィール</div>
        <div>もっと見る</div>
        <div>ツイートする</div>
      </section>
      <Main />
      <section
        css={css`
          display: none;
          @media (min-width: 1021px) {
            display: block;
          }
        `}
      >
        <div>キーワードを検索</div>
        <div>画像一覧</div>
        <div>おすすめツイート</div>
        <div>利用規約など</div>
      </section>
    </div>
  );
}

export default App;
