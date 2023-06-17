import { gql } from "graphql-request";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      name
      isVerified
      __typename
    }
  }
`;

const GET_USER = gql`
  query GetUser($where: UserWhereUniqueInput!) {
    user(where: $where) {
      id
      email
      name
      isVerified
      __typename
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($data: UserCreateInput!) {
    createUser(data: $data) {
      email
      name
      id
    }
  }
`;
