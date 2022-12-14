import { UserModel } from '@models/userModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authLogin } from '@services/authService';
import { keys } from '@shared/static';
import Toast from 'react-native-toast-message';

type IHandleSignIn = UserModel | null
 
const execute =  async ({ email, password }: UserModel): Promise<IHandleSignIn> => {
  try {
    const response = await authLogin({ email, password });
    const parseJsonToString =  JSON.stringify(response)
    await AsyncStorage.setItem(keys.USER_COLLECTION,parseJsonToString);
    return response;
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Atenção',
      text2: 'E-mail e/ou senha incorretos',
    });
    return null;
  }
};

const AuthUseCase = {
  execute,
};

export default AuthUseCase;
