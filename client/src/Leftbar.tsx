/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDove,
  faHouse,
  faHashtag,
  faBell,
  faMessage,
  faBookmark,
  faClipboardList,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

export const Leftbar = (): JSX.Element => {
  return (
    <section
      css={css`
        background-color: #f3f3f3;
        margin-left: auto;
        @media (min-width: 1280px) {
          width: 270px;
        }
      `}
    >
      <div>
        <FontAwesomeIcon icon={faDove} size="2x" style={{ color: "#6163d4" }} />
      </div>

      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <div
          css={css`
            width: 24px;
            height: 24px;
            display: flex;
            justify-items: center;
            align-items: center;
          `}
        >
          <FontAwesomeIcon
            icon={faHouse}
            size="lg"
            style={{ color: "#252525" }}
          />
        </div>
        <div>
          <span
            css={css`
              font-size: 18px;
            `}
          >
            home
          </span>
        </div>
      </div>

      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            width: 50px;
            height: 50px;
          `}
        >
          <FontAwesomeIcon
            icon={faHashtag}
            size="2x"
            style={{ color: "#252525" }}
          />
        </div>
        <div>話題を検索</div>
      </div>
      <div>
        <FontAwesomeIcon icon={faBell} size="2x" style={{ color: "#252525" }} />
        通知
      </div>
      <div>
        <FontAwesomeIcon
          icon={faMessage}
          size="2x"
          style={{ color: "#252525" }}
        />
        メッセージ
      </div>
      <div>
        <FontAwesomeIcon
          icon={faBookmark}
          size="2x"
          style={{ color: "#252525" }}
        />
        ブックマーク
      </div>
      <div>
        <FontAwesomeIcon
          icon={faClipboardList}
          size="2x"
          style={{ color: "#252525" }}
        />
        リスト
      </div>
      <div>
        <FontAwesomeIcon icon={faUser} size="2x" style={{ color: "#252525" }} />
        プロフィール
      </div>
      <div>
        <FontAwesomeIcon
          icon={faEllipsis}
          size="2x"
          style={{ color: "#252525" }}
        />
        もっと見る
      </div>
      <button>ツイートする</button>
    </section>
  );
};
