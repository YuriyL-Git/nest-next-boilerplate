import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { gql } from 'graphql-request';
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

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  login: User;
  removeUser: User;
  signUp: User;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationSignUpArgs = {
  signUpInput: LoginInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  users: Array<User>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
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

export type SignUpVariables = Exact<{
  args: LoginInput;
}>;


export type SignUp = { __typename?: 'Mutation', signUp: { __typename?: 'User', id: string, name?: string | null, email: string } };

export type LoginVariables = Exact<{
  args: LoginInput;
}>;


export type Login = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, name?: string | null, email: string } };

export type GetUsersVariables = Exact<{ [key: string]: never; }>;


export type GetUsers = { __typename?: 'Query', users: Array<{ __typename: 'User', id: string, email: string, name?: string | null }> };

export type GetUserVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUser = { __typename?: 'Query', user: { __typename: 'User', id: string, email: string, name?: string | null } };

export type CreateUserVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUser = { __typename?: 'Mutation', createUser: { __typename?: 'User', email: string, name?: string | null, id: string } };


export const SignUpDocument = /*#__PURE__*/ gql`
    mutation SignUp($args: LoginInput!) {
  signUp(signUpInput: $args) {
    id
    name
    email
  }
}
    `;
export const LoginDocument = /*#__PURE__*/ gql`
    mutation Login($args: LoginInput!) {
  login(loginInput: $args) {
    id
    name
    email
  }
}
    `;
export const GetUsersDocument = /*#__PURE__*/ gql`
    query GetUsers {
  users {
    id
    email
    name
    __typename
  }
}
    `;
export const GetUserDocument = /*#__PURE__*/ gql`
    query GetUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    email
    name
    __typename
  }
}
    `;
export const CreateUserDocument = /*#__PURE__*/ gql`
    mutation CreateUser($data: UserCreateInput!) {
  createUser(data: $data) {
    email
    name
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    SignUp(variables: SignUpVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SignUp> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignUp>(SignUpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SignUp', 'mutation');
    },
    Login(variables: LoginVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Login> {
      return withWrapper((wrappedRequestHeaders) => client.request<Login>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Login', 'mutation');
    },
    GetUsers(variables?: GetUsersVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUsers> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsers>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUsers', 'query');
    },
    GetUser(variables: GetUserVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUser>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUser', 'query');
    },
    CreateUser(variables: CreateUserVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUser>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateUser', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;