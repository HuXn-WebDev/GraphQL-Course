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
