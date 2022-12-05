import { UserModel } from '@models/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '@services/auth.service';
import { keys } from '@shared/static';
import Toast from 'react-native-toast-message';

type IHandleSignIn = UserModel | null

const handleSignIn = async ({ email, password }: UserModel): Promise<IHandleSignIn> => {
  try {
    const response = await login({ email, password });
    const parseJson =  JSON.stringify(response)
    await AsyncStorage.setItem(keys.USER_COLLECTION,parseJson);
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

export { handleSignIn };

