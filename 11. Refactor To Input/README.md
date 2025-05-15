#### Inside the index.js file

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
  },
};
```

### Inside the sandbox

```graphql
mutation {
  addUser(
    input: {
      first_name: "James"
      last_name: "ford"
      email: "james@example.com"
      password: "secure123"
    }
  ) {
    id
    first_name
    last_name
    email
  }
}
```
