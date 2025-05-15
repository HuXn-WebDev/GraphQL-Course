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

  type Mutation {
    addUser(first_name: String!, last_name: String!, email: String!, password: String!): User!
  }
`;

let users = [];
let idCounter = 1;

const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    addUser: (_, { first_name, last_name, email, password }) => {
      if (users.find((user) => user.email === email)) {
        throw new Error("User already exist");
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
    first_name: "John"
    last_name: "Doe"
    email: "john@example.com"
    password: "secure123"
  ) {
    id
    first_name
    last_name
    email
  }
}
```
