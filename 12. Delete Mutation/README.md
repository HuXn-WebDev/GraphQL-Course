### Inside the index.js file

```js
const typeDefs = `#graphql
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
  }

  input AddUserInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  type Mutation {
    addUser(input: AddUserInput!): User!
    deleteUser(id: ID!): User!
  }
`;

let users = [];
let idCounter = 1;

const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    addUser: (_, { input }) => {
      const { first_name, last_name, email, password } = input;

      if (users.find((user) => user.email === email)) {
        throw new Error("User already exists");
      }

      const newUser = {
        id: idCounter++,
        first_name,
        last_name,
        email,
        password,
      };

      users.push(newUser);
      return newUser;
    },

    deleteUser: (_, { id }) => {
      const userIndex = users.findIndex(
        (user) => String(user.id) === String(id)
      );

      if (userIndex === -1) {
        throw new Error("User not found");
      }

      const deletedUser = users[userIndex];
      users.splice(userIndex, 1);
      return deletedUser;
    },
  },
};
```

```graphql
mutation {
  deleteUser(id: "1") {
    id
    first_name
    email
  }
}
```
