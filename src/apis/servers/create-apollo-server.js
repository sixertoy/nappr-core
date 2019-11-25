/**
 * Create Apollo Server
 *
 * Usage
 * -------------------------
 * import createApolloServer from './core/apollo-server';
 * const port = parseInt(process.env.GRAPHQL_PORT, 10);
 *
 * const typeDefs = gql`
 * type Query {
 *    hello: String
 * }
 * `;
 *
 * const resolvers = {
 *  Query: {
 *    hello: () => 'Hello world!',
 *  },
 * };
 *
 * const expressApp = createApolloServer(port, resolvers, typeDefs)
 * expressApp.listen({ port }).then(() => {})
 */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

// Do graceful shutdown
function initializeServerGracefulShutdown(app) {
  process.on('SIGINT', () => {
    // logger.ok('graceful shutdown express');
    app.close(() => {
      // FIXME -> cleanup DB connections
      // logger.debug('closed express');
    });
  });
}

const createApolloServer = (port, options) => {
  const endpoint = `http://localhost:${port}/graphiql`;
  const app = express();
  const debug = true;
  const playground = { endpoint };
  const defaultOptions = { debug, playground };
  const server = new ApolloServer({ ...defaultOptions, ...options });
  server.applyMiddleware({ app });
  initializeServerGracefulShutdown(app);
  return { app, endpoint };
};

export default createApolloServer;
