/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Main } from "./Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";

const flex = css`
  display: flex;
  min-height: 100vh;
`;

function App() {
  return (
    <div css={flex}>
      <section
        css={css`
          background-color: #c0c0c0;
          margin-left: auto;
          @media (min-width: 1280px) {
            width: 270px;
          }
        `}
      >
        <div>
          <FontAwesomeIcon icon={faDove} />
        </div>
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
    </div>
  );
}

export default App;
