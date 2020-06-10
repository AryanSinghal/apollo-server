import { mergeTypes, fileLoader } from 'merge-graphql-schemas';
import path from 'path';
import { query } from './user';
import * as trainee from './trainee';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typesArray, { all: true });

export default {
  resolvers: {
    Query: { ...query, ...trainee.query },
    Mutation: { ...trainee.mutation },
    Subscription: { ...trainee.subscription },
  },
  typeDefs
};
