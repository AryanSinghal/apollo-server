import { ApolloError } from "apollo-server";

const query = {
  getAllTrainees: async (root, args, context) => {
    try {
      const { skip = 0, limit = 20 } = args;
      const { dataSources: { traineeAPI } } = context;
      const { data } = await traineeAPI.getAllTrainees({ skip, limit });
      return data;
    }
    catch (err) {
      const { message, status } = err.extensions.response.body;
      throw new ApolloError(message, status);
    }
  },
};

export default query;
