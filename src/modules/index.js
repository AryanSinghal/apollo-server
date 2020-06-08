import { mergeTypes, fileLoader } from 'merge-graphql-schemas';
import path from 'path';
import { query } from './user';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typesArray, { all: true });

export default {
  resolvers: {
    Query: { ...query },
  },
  typeDefs
};
