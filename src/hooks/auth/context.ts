import { UserModel } from '@models/user';
import { createContext, useContext } from 'react';

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  user: UserModel | null;
  logout: () => Promise<void> | null;
};

export const AuthContext = createContext({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { useAuth };

