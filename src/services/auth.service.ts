import { api } from '@clients/index';
import { UserModel } from '@models/user';

const login = async (user: UserModel) => {
  const { data } = await api.post<UserModel>('login', user);
  return data;
};

export { login };
