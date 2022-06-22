/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { useGetTweetsQuery } from "./generated/graphql";
import { TweetView } from "./TweetView";

const tweetsQuery = gql`
  query GetTweets {
    tweets {
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
  }
`;

export const TweetList = (): JSX.Element => {
  const { loading, error, data } = useGetTweetsQuery();
  if (loading) {
    return <>loading</>;
  } else if (error) {
    return <>error</>;
  } else if (!data || !data.tweets) {
    return <>no data</>;
  } else {
    return (
      <>
        {data.tweets.map((t, index) =>
          t ? (
            <div>
              <TweetView fragment={t} />
            </div>
          ) : (
            <></>
          )
        )}
      </>
    );
  }
};
