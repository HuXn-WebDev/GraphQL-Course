export const typeDefs = `#graphql
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  input AddUserInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  input UpdateUserInput {
    first_name: String
    last_name: String
    email: String
    password: String
  }

  type Mutation {
    addUser(input: AddUserInput!): User!
    deleteUser(id: ID!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
  }

  type Query {
    users: [User!]!
  }
`;
