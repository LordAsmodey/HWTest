import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS: {
  userData: string;
} = {
  userData: 'userData',
};

export const userStorageService = {
  async getData(): Promise<string | null> {
    return await AsyncStorage.getItem(KEYS.userData);
  },

  async hasData(): Promise<boolean> {
    return !!(await AsyncStorage.getItem(KEYS.userData));
  },

  async setData(accessToken: string) {
    await AsyncStorage.setItem(KEYS.userData, accessToken);
  },

  async removeData() {
    await AsyncStorage.removeItem(KEYS.userData);
  },
};
