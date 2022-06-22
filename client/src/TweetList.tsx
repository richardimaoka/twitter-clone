/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { TweetView } from "./TweetView";

const tweetsQuery = gql`
  query GetProfile {
    profile {
      name
    }
  }
`;

export const TweetList = (): JSX.Element => {
  const tweets = [1, 2, 3, 4, 5];
  return (
    <>
      {tweets.map((t, index) => (
        <div>
          <TweetView />
        </div>
      ))}
    </>
  );
};
