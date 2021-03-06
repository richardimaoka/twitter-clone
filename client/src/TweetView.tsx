/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { TweetViewFragment } from "./generated/graphql";

export interface TweetViewProps {
  fragment: TweetViewFragment;
}

export const TweetView = ({ fragment }: TweetViewProps): JSX.Element => {
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
          {fragment.name}
        </div>
        <div
          css={css`
            grid-column: 2/3;
          `}
        >
          &#64;{fragment.screenName}
        </div>
        <div
          css={css`
            grid-column: 3/4;
          `}
        >
          {fragment.createdAt}
        </div>
      </div>
      <div
        css={css`
          grid-row: 2/3;
        `}
      >
        <div>
          <span>{fragment.text}</span>
        </div>
        {fragment.imageUrl ? (
          <div>
            <img
              width="680px"
              height="296px"
              css={css`
                width: 100%;
              `}
              src={fragment.imageUrl}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div
        css={css`
          grid-row: 3/4;
        `}
      ></div>
    </div>
  );
};

TweetView.fragment = gql`
  fragment TweetView on Tweet {
    name
    screenName
    text
    createdAt
    replyCount
    retweetCount
    likeCount
    imageUrl
    imageWidth
    imageHeight
  }
`;
