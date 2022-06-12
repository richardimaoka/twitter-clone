/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";

export const Leftbar = (): JSX.Element => {
  return (
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
  );
};
