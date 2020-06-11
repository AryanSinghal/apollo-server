import pubsub from '../pubsub';
import { userInstance } from '../../service/index';
import { subscriptions } from '../../lib/constant';

const mutation = {
  createTrainee: (root, args) => {
    const { user } = args;
    const createdUser = userInstance.createUser(user);
    pubsub.publish(subscriptions.TRAINEE_CREATED, { traineeCreated: createdUser });
    return createdUser;
  },
  updateTrainee: (root, args) => {
    const { id, ...rest } = args;
    const updatedUser = userInstance.updateUser(id, rest);
    pubsub.publish(subscriptions.TRAINEE_UPDATED, { traineeUpdated: updatedUser });
    return updatedUser;
  },
  deleteTrainee: (root, args) => {
    const { id } = args;
    const deletedUserId = userInstance.deleteUser(id);
    pubsub.publish(subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedUserId });
    return deletedUserId;
  },
};

export default mutation;
