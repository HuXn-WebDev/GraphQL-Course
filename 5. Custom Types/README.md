### Inside the index.js file

```js
const server = new ApolloServer({
  typeDefs: `#graphql
    type Post {
        id: ID!
        title: String!
        body: String!
        tags: [String]
    }

    type Query {
        posts: [Post]
    }
    `,
  resolvers: {
    Query: {
      posts: () => [
        {
          id: "1",
          title: "Post 1",
          body: "Body of post 1",
          tags: ["tag1", "tag2"],
        },
        {
          id: "2",
          title: "Post 2",
          body: "Body of post 2",
          tags: ["tag3", "tag4"],
        },
      ],
    },
  },
});
```

### Inside the sandbox

```graphql
{
  posts {
    id
    title
    body
    tags
  }
}
```
