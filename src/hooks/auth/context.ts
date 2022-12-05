import { UserModel } from '@models/user';
import { createContext, useContext } from 'react';

type AuthContextData = {
  isLoading: boolean
  user: UserModel | null;
  logout: () => Promise<void> | null;
  signIn: (user: UserModel) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { useAuth };

