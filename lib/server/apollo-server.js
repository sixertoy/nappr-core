/**
 * Create Apollo Server
 *
 * Usage
 * -------------------------
 * import createServer from './core/apollo-server';
 * const port = parseInt(process.env.GRAPHQL_PORT, 10);
 * const expressApp = createServer(port, resolvers, typeDefs)
 *
 */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

const createServer = (port, resolvers, typeDefs) => {
  const endpoint = `http://localhost:${port}/graphql`;
  const apolloConfig = {
    playground: { endpoint },
    resolvers,
    typeDefs,
  };
  const server = new ApolloServer(apolloConfig);
  const app = express();
  server.applyMiddleware({ app });
  return app;
};

export default createServer;
