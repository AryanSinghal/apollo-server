import { ApolloError } from 'apollo-server';

const mutation = {
  loginUser: async (root, args, context) => {
    try {
      const { email, password } = args;
      const { dataSources: { userAPI } } = context;
      const { data } = await userAPI.loginUser({ email, password });
      return data;
    }
    catch (err) {
      const { message, status } = err.extensions.response.body;
      throw new ApolloError(message, status);
    }
  },
};

export default mutation;
