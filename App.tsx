import { ThemeProvider } from '@src/contexts';
import AppProvider from './AppProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigationContainer } from '@src/navigator';

export default function App() {
  return (
    <RootNavigationContainer>
      <ThemeProvider>
        <SafeAreaProvider>
          <AppProvider />
        </SafeAreaProvider>
      </ThemeProvider>
    </RootNavigationContainer>
  );
}
