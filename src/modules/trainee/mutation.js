import pubsub from '../pubsub';
import { subscriptions } from '../../lib/constant';
import { ApolloError } from 'apollo-server';

const mutation = {
  createTrainee: async (root, args, context) => {
    try {
      const { user: { name, email, password } } = args;
      const { dataSources: { traineeAPI } } = context;
      const { data } = await traineeAPI.createTrainee({ name, email, password });
      pubsub.publish(subscriptions.TRAINEE_CREATED, { traineeCreated: data });
      return data;
    }
    catch (err) {
      const { message, status } = err.extensions.response.body;
      throw new ApolloError(message, status);
    }
  },
  updateTrainee: async (root, args, context) => {
    try {
      const { user: { id, ...rest } } = args;
      const { dataSources: { traineeAPI } } = context;
      const { data } = await traineeAPI.updateTrainee({ id, rest });
      pubsub.publish(subscriptions.TRAINEE_UPDATED, { traineeUpdated: data.id });
      return data.id;
    }
    catch (err) {
      const { message, status } = err.extensions.response.body;
      throw new ApolloError(message, status);
    }
  },
  deleteTrainee: async (root, args, context) => {
    const { id } = args;
    const { dataSources: { traineeAPI } } = context;
    const { data } = await traineeAPI.deleteTrainee(id);
    pubsub.publish(subscriptions.TRAINEE_DELETED, { traineeDeleted: data.id });
    return data.id;
  },
};

export default mutation;
