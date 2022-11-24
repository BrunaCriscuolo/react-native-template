import { UserModel } from '@models/user';
import { api } from './clients';

export const login = async (user: UserModel) => {
  const { data } = await api.post('login', user); 
  return data;
};
