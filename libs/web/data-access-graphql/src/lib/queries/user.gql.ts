import { gql } from "graphql-request";

const CREATE_USER = gql`
  mutation CreateUser($data: UserCreateInput!) {
    createUser(data: $data) {
      email
      name
      id
    }
  }
`;
