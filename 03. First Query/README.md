| Part           | Purpose                                   |
| -------------- | ----------------------------------------- |
| `typeDefs`     | Define **what data** can be queried       |
| `resolvers`    | Define **how to get the data**            |
| `ApolloServer` | Ties it all together                      |
| Sandbox        | Lets you test your GraphQL queries easily |

```js
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
  typeDefs: `#graphql
        type Query {
            hello: String
        }
    `,

  resolvers: {
    Query: {
      hello: () => "Hello world!",
      ids: ["id_1", "id_2", "id_3"],
    },
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
```

#### Inside the sandbox

```graphql
query Demo {
  hello
}
```
