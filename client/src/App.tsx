/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

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
      <section>
        <div>キーワードを検索</div>
        <div>画像一覧</div>
        <div>おすすめツイート</div>
        <div>利用規約など</div>
      </section>
    </div>
  );
}

export default App;
