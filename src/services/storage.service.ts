import AsyncStorage from '@react-native-async-storage/async-storage';
import { themeModeKey } from '@src/constants/string.constants';
import { ThemeModeString } from '@src/types';

class _StorageService {
  async setItem(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {}
  }

  async getItem(key: string): Promise<string | null> {
    try {
      const item = await AsyncStorage.getItem(key);
      return item;
    } catch (error) {
      return null;
    }
  }

  async getThemeMode(): Promise<ThemeModeString> {
    try {
      const mode = await this.getItem(themeModeKey);
      if (mode) {
        return mode as ThemeModeString;
      }
      return 'dark';
    } catch (error) {
      return 'dark';
    }
  }

  async setThemeMode(mode: ThemeModeString): Promise<void> {
    try {
      await this.setItem(themeModeKey, mode);
    } catch (error) {}
  }
}

const storageService = new _StorageService();

export default storageService;
