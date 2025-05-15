### inside the index.js

```js
const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    posts: [Post!]!
  }
 
  type Post {
    id: ID!
    title: String!
    content: String
    author: User!
  }

  type Query {
    users: [User!]!
    posts: [Post!]!
  }
`;

const users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
];

const posts = [
  {
    id: "101",
    title: "GraphQL Basics",
    content: "Intro to GraphQL",
    authorId: "1",
  },
  {
    id: "102",
    title: "Advanced GraphQL",
    content: "Deep dive",
    authorId: "1",
  },
  {
    id: "103",
    title: "Node.js Tips",
    content: "Some tips",
    authorId: "2",
  },
];

const resolvers = {
  Query: {
    users: () => users,
    posts: () => posts,
  },
  User: {
    posts: (parent) => posts.filter((post) => post.authorId === parent.id),
  },
  Post: {
    author: (parent) => users.find((user) => user.id === parent.authorId),
  },
};
```

### Inside the sandbox

```graphql
# Example 1

query {
  users {
    name
    posts {
      title
    }
  }
}
```

```graphql
# Example 2

query {
  posts {
    title
    author {
      name
    }
  }
}
```
