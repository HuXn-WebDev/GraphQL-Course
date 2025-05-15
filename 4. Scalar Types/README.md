### Inside the index.js file

```js
// Scalar Types - String, Boolean, Int, Float, ID
const server = new ApolloServer({
  typeDefs: `#graphql
        type Query {
            id: ID!
            name: String
            age: Int
            isActive: Boolean
            height: Float
        }
    `,
  resolvers: {
    Query: {
      id: () => "1",
      name: () => "John Doe",
      age: () => 30,
      isActive: () => true,
      height: () => 5.6,
    },
  },
});
```

### inside the sandbox

```graphql
{
  id
  name
  age
  isActive
  height
}
```
