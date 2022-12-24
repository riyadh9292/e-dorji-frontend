import { gql } from "@apollo/client";

export const createUser = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(userInput: { email: $email, password: $password }) {
      email
    }
  }
`;

export const loginUserQuery = gql`
  query ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
