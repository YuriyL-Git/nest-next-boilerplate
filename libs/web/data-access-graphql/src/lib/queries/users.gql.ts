import { gql } from "graphql-request";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      name
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
      __typename
    }
  }
`;
