import { Theme } from '@src/theme';

export interface KnownBaseTheme {
  colors: {
    [key: string]: string;
  };
  spacing: {
    [key: string]: number;
  };
  borderRadii?: {
    [key: string]: number;
  };
}

export interface BaseTheme extends KnownBaseTheme {
  [key: string]: any;
}

export type ThemeModeString = 'dark' | 'light';

export interface ThemeContextInterface {
  theme: Theme;
  toggleDarkMode: () => Promise<void>;
  currentThemeMode: ThemeModeString;
}

export type User = {
  name: string;
  uid: string;
  email: string;
};

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
};

export type TaskStatus = 'open' | 'working' | 'completed';
