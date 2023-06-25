import { gql } from "graphql-request";

const SIGN_UP = gql`
  mutation SignUp($args: LoginInput!) {
    signUp(signUpInput: $args) {
      id
      name
      email
      isVerified
      icon
    }
  }
`;

const LOGIN = gql`
  mutation Login($args: LoginInput!) {
    login(loginInput: $args) {
      id
      name
      email
      isVerified
      icon
    }
  }
`;

const LOGIN_WITH_GOOGLE = gql`
  mutation LoginWithGoogle($args: GoogleLoginInput!) {
    loginWithGoogle(googleLoginInput: $args) {
      id
      name
      email
      isVerified
      icon
    }
  }
`;

const VERIFY_EMAIL = gql`
  mutation VerifyEmail($args: VerificationInput!) {
    verifyEmail(verificationInput: $args) {
      isVerified
    }
  }
`;
