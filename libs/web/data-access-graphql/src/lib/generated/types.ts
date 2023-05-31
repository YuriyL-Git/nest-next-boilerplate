export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type HomeBlock = {
  __typename?: 'HomeBlock';
  id: Scalars['ID']['output'];
  imagePath: Scalars['String']['output'];
  navigationPath: Scalars['String']['output'];
  rgbBackground: RgbBackground;
  rgbBackgroundId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type HomeBlockCountAggregate = {
  __typename?: 'HomeBlockCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['Int']['output'];
  navigationPath: Scalars['Int']['output'];
  rgbBackgroundId: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
};

export type HomeBlockCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath: Scalars['String']['input'];
  navigationPath: Scalars['String']['input'];
  rgbBackground: RgbBackgroundCreateNestedOneWithoutHomeBlockInput;
  title: Scalars['String']['input'];
};

export type HomeBlockMaxAggregate = {
  __typename?: 'HomeBlockMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  navigationPath?: Maybe<Scalars['String']['output']>;
  rgbBackgroundId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type HomeBlockMinAggregate = {
  __typename?: 'HomeBlockMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  navigationPath?: Maybe<Scalars['String']['output']>;
  rgbBackgroundId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type HomeBlockUpdateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  navigationPath?: InputMaybe<Scalars['String']['input']>;
  rgbBackground?: InputMaybe<RgbBackgroundUpdateOneRequiredWithoutHomeBlockNestedInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HomeBlockWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  rgbBackgroundId?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createHomeBlock: HomeBlock;
  createUser: User;
  removeHomeBlock: HomeBlock;
  removeUser: User;
  updateHomeBlock: HomeBlock;
  updateUser: User;
};


export type MutationCreateHomeBlockArgs = {
  data: HomeBlockCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationRemoveHomeBlockArgs = {
  where: HomeBlockWhereUniqueInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateHomeBlockArgs = {
  data: HomeBlockUpdateInput;
  where: HomeBlockWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  HomeBlock: HomeBlock;
  HomeBlocks: Array<HomeBlock>;
  user: User;
  users: Array<User>;
};


export type QueryHomeBlockArgs = {
  where: HomeBlockWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type RgbBackground = {
  __typename?: 'RgbBackground';
  a?: Maybe<Scalars['Float']['output']>;
  b: Scalars['Int']['output'];
  g: Scalars['Int']['output'];
  homeBlock?: Maybe<HomeBlock>;
  id: Scalars['ID']['output'];
  r: Scalars['Int']['output'];
};

export type RgbBackgroundAvgAggregate = {
  __typename?: 'RgbBackgroundAvgAggregate';
  a?: Maybe<Scalars['Float']['output']>;
  b?: Maybe<Scalars['Float']['output']>;
  g?: Maybe<Scalars['Float']['output']>;
  r?: Maybe<Scalars['Float']['output']>;
};

export type RgbBackgroundCountAggregate = {
  __typename?: 'RgbBackgroundCountAggregate';
  _all: Scalars['Int']['output'];
  a: Scalars['Int']['output'];
  b: Scalars['Int']['output'];
  g: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  r: Scalars['Int']['output'];
};

export type RgbBackgroundCreateNestedOneWithoutHomeBlockInput = {
  connect?: InputMaybe<RgbBackgroundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RgbBackgroundCreateOrConnectWithoutHomeBlockInput>;
  create?: InputMaybe<RgbBackgroundCreateWithoutHomeBlockInput>;
};

export type RgbBackgroundCreateOrConnectWithoutHomeBlockInput = {
  create: RgbBackgroundCreateWithoutHomeBlockInput;
  where: RgbBackgroundWhereUniqueInput;
};

export type RgbBackgroundCreateWithoutHomeBlockInput = {
  a?: InputMaybe<Scalars['Float']['input']>;
  b: Scalars['Int']['input'];
  g: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  r: Scalars['Int']['input'];
};

export type RgbBackgroundMaxAggregate = {
  __typename?: 'RgbBackgroundMaxAggregate';
  a?: Maybe<Scalars['Float']['output']>;
  b?: Maybe<Scalars['Int']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type RgbBackgroundMinAggregate = {
  __typename?: 'RgbBackgroundMinAggregate';
  a?: Maybe<Scalars['Float']['output']>;
  b?: Maybe<Scalars['Int']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type RgbBackgroundSumAggregate = {
  __typename?: 'RgbBackgroundSumAggregate';
  a?: Maybe<Scalars['Float']['output']>;
  b?: Maybe<Scalars['Int']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type RgbBackgroundUpdateOneRequiredWithoutHomeBlockNestedInput = {
  connect?: InputMaybe<RgbBackgroundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RgbBackgroundCreateOrConnectWithoutHomeBlockInput>;
  create?: InputMaybe<RgbBackgroundCreateWithoutHomeBlockInput>;
  update?: InputMaybe<RgbBackgroundUpdateWithoutHomeBlockInput>;
  upsert?: InputMaybe<RgbBackgroundUpsertWithoutHomeBlockInput>;
};

export type RgbBackgroundUpdateWithoutHomeBlockInput = {
  a?: InputMaybe<Scalars['Float']['input']>;
  b?: InputMaybe<Scalars['Int']['input']>;
  g?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  r?: InputMaybe<Scalars['Int']['input']>;
};

export type RgbBackgroundUpsertWithoutHomeBlockInput = {
  create: RgbBackgroundCreateWithoutHomeBlockInput;
  update: RgbBackgroundUpdateWithoutHomeBlockInput;
};

export type RgbBackgroundWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};
