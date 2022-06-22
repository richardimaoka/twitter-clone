import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Profile = {
  __typename?: "Profile";
  name: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  profile: Maybe<Profile>;
  tweets: Maybe<Array<Maybe<Tweet>>>;
};

export type Tweet = {
  __typename?: "Tweet";
  createdAt: Maybe<Scalars["String"]>;
  imageHeight: Maybe<Scalars["Int"]>;
  imageUrl: Maybe<Scalars["String"]>;
  imageWidth: Maybe<Scalars["Int"]>;
  likeCount: Maybe<Scalars["Int"]>;
  name: Maybe<Scalars["String"]>;
  replyCount: Maybe<Scalars["Int"]>;
  retweetCount: Maybe<Scalars["Int"]>;
  screenName: Maybe<Scalars["String"]>;
  text: Maybe<Scalars["String"]>;
};

export type GetProfileQueryVariables = Exact<{ [key: string]: never }>;

export type GetProfileQuery = {
  __typename?: "Query";
  profile: { __typename?: "Profile"; name: string | null } | null;
};

export type TweetFragment = {
  __typename?: "Tweet";
  name: string | null;
  screenName: string | null;
  text: string | null;
  createdAt: string | null;
  replyCount: number | null;
  retweetCount: number | null;
  likeCount: number | null;
  imageUrl: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
};

export const TweetFragmentDoc = gql`
  fragment Tweet on Tweet {
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
export const GetProfileDocument = gql`
  query GetProfile {
    profile {
      name
    }
  }
`;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProfileQuery,
    GetProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(
    GetProfileDocument,
    options
  );
}
export function useGetProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProfileQuery,
    GetProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(
    GetProfileDocument,
    options
  );
}
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<
  typeof useGetProfileLazyQuery
>;
export type GetProfileQueryResult = Apollo.QueryResult<
  GetProfileQuery,
  GetProfileQueryVariables
>;
