import { userInstance } from '../../service/index';

const query = {
  getAllTrainees: () => {
    return userInstance.getAllUsers();
  },
};

export default query;
