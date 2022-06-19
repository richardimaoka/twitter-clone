import { GraphQLResolveInfo } from "graphql";
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Profile: ResolverTypeWrapper<Profile>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Tweet: ResolverTypeWrapper<Tweet>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"];
  Int: Scalars["Int"];
  Profile: Profile;
  Query: {};
  String: Scalars["String"];
  Tweet: Tweet;
};

export type ProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Profile"] = ResolversParentTypes["Profile"]
> = {
  name: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  profile: Resolver<Maybe<ResolversTypes["Profile"]>, ParentType, ContextType>;
  tweets: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Tweet"]>>>,
    ParentType,
    ContextType
  >;
};

export type TweetResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Tweet"] = ResolversParentTypes["Tweet"]
> = {
  createdAt: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  imageHeight: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  imageUrl: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  imageWidth: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  likeCount: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  replyCount: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  retweetCount: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  screenName: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  text: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Profile: ProfileResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Tweet: TweetResolvers<ContextType>;
};
