require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';
import 'graphql-import-node';
import { makeExecutableSchema } from '@graphql-tools/schema'
import typeDefs from '../src/graphql/schema';
import resolvers from '../src/graphql/resolvers/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const apolloServer = new ApolloServer({
  schema
});

export = apolloServer;
