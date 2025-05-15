### inside the index.js file

```js
const typeDefs = `#graphql
  type Query {
    greetings: [String]
    luckyNumbers: [Int]
    temperatures: [Float]
    flags: [Boolean]
    ids: [ID]
  }
`;

const resolvers = {
  Query: {
    greetings: () => ["Hello", "Hi", "Hey"],
    luckyNumbers: () => [3, 7, 13],
    temperatures: () => [22.5, 23.8, 21.9],
    flags: () => [true, false, true],
    ids: () => ["abc123", "def456", "ghi789"],
  },
};
```

### Inside the sandbox

```graphql
query {
  greetings
  luckyNumbers
  temperatures
  flags
  ids
}
```
