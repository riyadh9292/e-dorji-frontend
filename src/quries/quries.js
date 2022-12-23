import { useQuery, gql } from "@apollo/client";

export const createUser = gql`
  mutation (
    $name: String!
    $phone: String!
    $email: String!
    $gender: String!
    $password: String!
  ) {
    createUser(
      name: $name
      email: $email
      phone: $phone
      password: $password
      gender: $gender
    ) {
      name
    }
  }
`;
