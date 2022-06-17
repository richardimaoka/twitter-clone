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
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

const LeftbarItemIcon = ({ icon }: { icon: IconDefinition }): JSX.Element => (
  <div
    css={css`
      width: 24px;
      height: 24px;
      display: flex;
      justify-items: center;
      align-items: center;
    `}
  >
    <FontAwesomeIcon icon={icon} size="lg" style={{ color: "#252525" }} />
  </div>
);

const LeftbarItemName = ({ name }: { name: string }): JSX.Element => (
  <div>
    <span
      css={css`
        font-size: 18px;
      `}
    >
      {name}
    </span>
  </div>
);

const LeftbarItem = ({
  icon,
  name,
}: {
  icon: IconDefinition;
  name: string;
}): JSX.Element => (
  <div
    css={css`
      display: flex;
      align-items: center;
    `}
  >
    <LeftbarItemIcon icon={icon} />
    <LeftbarItemName name={name} />
  </div>
);

export const Leftbar = (): JSX.Element => {
  return (
    <section
      css={css`
        background-color: #f3f3f3;
        @media (min-width: 1280px) {
          width: 270px;
        }
      `}
    >
      <div>
        <FontAwesomeIcon icon={faDove} size="2x" style={{ color: "#6163d4" }} />
      </div>

      <LeftbarItem icon={faHouse} name={"home"} />
      <LeftbarItem icon={faHashtag} name={"話題を検索"} />
      <LeftbarItem icon={faBell} name={"通知"} />
      <LeftbarItem icon={faMessage} name={"メッセージ"} />
      <LeftbarItem icon={faBookmark} name={"ブックマーク"} />
      <LeftbarItem icon={faClipboardList} name={"リスト"} />
      <LeftbarItem icon={faUser} name={"プロフィール"} />
      <LeftbarItem icon={faEllipsis} name={"もっと見る"} />

      <button>ツイートする</button>
    </section>
  );
};
