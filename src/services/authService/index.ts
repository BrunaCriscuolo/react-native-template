import { api } from '@clients/api';
import { UserModel } from '@models/userModel';

const authLogin = async (user: UserModel) => {
  const { data } = await api.post<UserModel>('login', user);
  return data;
};

export { authLogin };

