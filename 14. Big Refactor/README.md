### Create src folder

### Inside the src folder create graph-schema.js file & paste the following code inside

```js
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
```

### Inside the src folder create resolvers folder

### Inside the resolvers folder create Query.js & Mutations.js files

### Inside the Query.js file

```js
import { users } from "../db/db.js";

const Query = {
  users: () => users,
};

export default Query;
```

### Inside the Mutations.js file paste the following code

```js
import { users, db } from "../db/db.js";

const Mutation = {
  addUser: (_, { input }) => {
    const { first_name, last_name, email, password } = input;

    if (users.find((user) => user.email === email)) {
      throw new Error("User already exists");
    }

    const newUser = {
      id: db.idCounter++,
      first_name,
      last_name,
      email,
      password,
    };

    users.push(newUser);
    return newUser;
  },

  deleteUser: (_, { id }) => {
    const userIndex = users.findIndex((user) => String(user.id) === String(id));

    if (userIndex === -1) {
      throw new Error("User not found");
    }

    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);
    return deletedUser;
  },

  updateUser: (_, { id, input }) => {
    const user = users.find((user) => String(user.id) === String(id));

    if (!user) {
      throw new Error("User not found");
    }

    Object.assign(user, input);
    return user;
  },
};

export default Mutation;
```

### Inside the resolvers folder create a db folder & db file

```js
export let users = [];
export let db = { idCounter: 1 };
```

### Now the index.js file should look like the following

```js
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graph-schema.js";
import Query from "./resolvers/Query.js";
import Mutation from "./resolvers/Mutation.js";

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
```

### Queries to test the code

```js
// 1. Create User
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

// 2. Fetch Info from user
{
  users {
    first_name email
  }
}

// 3. Delete User
mutation {
  deleteUser(id: "1") {
    id
    first_name
    email
  }
}

// 4. Update User
mutation {
  updateUser(
    id: "2"
    input: { first_name: "UpdatedName", email: "newemail@example.com" }
  ) {
    id
    first_name
    last_name
    email
  }
}
```
