import pubsub from '../pubsub';
import { subscriptions } from '../../lib/constant';

const subscription = {
  traineeCreated: {
    subscribe: () => pubsub.asyncIterator([subscriptions.TRAINEE_CREATED]),
  },
  traineeUpdated: {
    subscribe: () => pubsub.asyncIterator([subscriptions.TRAINEE_UPDATED]),
  },
  traineeDeleted: {
    subscribe: () => pubsub.asyncIterator([subscriptions.TRAINEE_DELETED]),
  }
}

export default subscription;
