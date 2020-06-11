const mutation = {
  loginUser: async (root, args, context) => {
    const { email, password } = args;
    const { dataSources: { userAPI } } = context;
    const { data } = await userAPI.loginUser({ email, password });
    return data;
  },
};

export default mutation;
