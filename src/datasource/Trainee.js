import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../config/configurations';

class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    const { serviceUrl } = configuration;
    this.baseURL = `${serviceUrl}/api/trainee`;
  }

  willSendRequest(request) {
    const { token } = this.context;
    request.headers.set('Authorization', token);
  }

  getAllTrainees = (options) => {
    return this.get('/', options);
  }

  createTrainee = (payload) => {
    return this.post('/', payload);
  }

  updateTrainee = ({ id, rest }) => {
    return this.put('/', { id, ...rest });
  }

  deleteTrainee = (id) => {
    return this.delete(`/${id}`);
  }
}

export default TraineeAPI;
