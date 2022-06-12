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
        background-color: #c0c0c0;
        margin-left: auto;
        @media (min-width: 1280px) {
          width: 270px;
        }
      `}
    >
      <div>
        <FontAwesomeIcon icon={faDove} size="2x" style={{ color: "#6163d4" }} />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faHouse}
          size="2x"
          style={{ color: "#6163d4" }}
        />
        home
      </div>
      <div>
        <FontAwesomeIcon
          icon={faHashtag}
          size="2x"
          style={{ color: "#6163d4" }}
        />
        話題を検索
      </div>
      <div>
        <FontAwesomeIcon icon={faBell} size="2x" style={{ color: "#6163d4" }} />
        通知
      </div>
      <div>
        <FontAwesomeIcon
          icon={faMessage}
          size="2x"
          style={{ color: "#6163d4" }}
        />
        メッセージ
      </div>
      <div>
        <FontAwesomeIcon
          icon={faBookmark}
          size="2x"
          style={{ color: "#6163d4" }}
        />
        ブックマーク
      </div>
      <div>
        <FontAwesomeIcon
          icon={faClipboardList}
          size="2x"
          style={{ color: "#6163d4" }}
        />
        リスト
      </div>
      <div>
        <FontAwesomeIcon icon={faUser} size="2x" style={{ color: "#6163d4" }} />
        プロフィール
      </div>
      <div>
        <FontAwesomeIcon
          icon={faEllipsis}
          size="2x"
          style={{ color: "#6163d4" }}
        />
        もっと見る
      </div>
      <button>ツイートする</button>
    </section>
  );
};
