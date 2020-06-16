import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../config/configurations';
import { loginApi, meApi } from '../lib/constant';

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    const { serviceUrl } = configuration;
    this.baseURL = `${serviceUrl}/api/user`;
  }

  loginUser = ({ email, password }) => {
    return this.post(loginApi, { email, password });
  }

  getMe = () => {
    return this.get(meApi);
  }
}

export default UserAPI;
