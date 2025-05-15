### inside the index.js file

```js
const server = new ApolloServer({
  typeDefs: `#graphql
    type Query {
        greetings(name: String): String!
        add(a: Int!, b: Int!): Int
    }
    `,

  resolvers: {
    Query: {
      // greetings(parent, args, ctx, info) {
      //   console.log(args);
      //   return `Hello ${args.name}`;
      // },

      // greetings: (_, { name }) => `Hello ${name}`,
      add: (_, { a, b }) => a + b,
    },
  },
});
```

### inside the sandbox

```graphql
{
  greetings(name: "Jordan")
  add(a: 10, b: 20)
}
```
