import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const USER_COLLECTION = '@app.users';
const API_URL = 'https://637ecd4e5b1cc8d6f9344d71.mockapi.io/api/v1';

const api = axios.create({ baseURL: API_URL });
  
const authInterceptor = async (config: AxiosRequestConfig) => {
  try {
    const userStorage = await AsyncStorage.getItem(USER_COLLECTION);
    if (userStorage) {
      const parseUser = JSON.parse(userStorage);
      if (parseUser) {
        const { token } = parseUser;
        if (!config?.headers) {
          config.headers = {};
        }
        if (!config?.headers?.Authorization) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    }
    return config;
  } catch (err) {
    return config;
  }
};

api.interceptors.request.use(
  async (config) => {
    const newConfig = await authInterceptor(config);
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error?.response?.status === 401) {
      await AsyncStorage.removeItem(USER_COLLECTION);
    }
    return Promise.reject(error);
  }
);

export { api };

