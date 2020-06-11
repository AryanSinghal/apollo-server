import { userInstance } from '../../service/index';

const mutation = {
  createTrainee: (root, args) => {
    const { user } = args;
    return userInstance.createUser(user);
  },
  updateTrainee: (root, args) => {
    const { id, ...rest } = args;
    return userInstance.updateUser(id, rest);
  },
  deleteTrainee: (root, args) => {
    const { id } = args;
    return userInstance.deleteUser(id);
  },
}

export default mutation;
