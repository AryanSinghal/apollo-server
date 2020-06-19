import { ApolloError } from 'apollo-server';

const query = {
  getMyProfile: () => {
    return ({
      _id: '51',
      name: 'Aryan Singhal',
      email: 'aryan.singhal@successive.tech'
    });
  },
  getMe: async (root, args, context) => {
    try {
      const { dataSources: { userAPI } } = context;
      const { data } = await userAPI.getMe();
      return data;
    }
    catch (err) {
      const { message, status } = err.extensions.response.body;
      throw new ApolloError(message, status);
    }
  }
};

export default query;
