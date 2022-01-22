import { User } from '@src/types';

class _ApiService {
  async signup(data: User): Promise<User> {
    return new Promise((res) => {
      setTimeout(() => res(data), 1500);
    });
  }
}

const apiService = new _ApiService();

export default apiService;
