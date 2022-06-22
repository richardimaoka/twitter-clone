/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { Tweet } from "./Tweet";

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
          <Tweet />
        </div>
      ))}
    </>
  );
};
