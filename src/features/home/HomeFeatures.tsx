import { AppNavigationProps } from '@src/navigator/navigator.types';
import React from 'react';
import { View } from 'react-native';
import UserHeader from './components/UserHeader';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { screenWidth } from '@src/utils';
import { useTheme } from '@src/hooks';
import { Spacer, Text } from '@src/components';
import { OpenTasks, CompletedTasks, WorkingTasks } from './scenes';
import TaskForm from './components/TaskForm';

export interface HomeFeaturesProps extends AppNavigationProps<'Home'> {}

const HomeFeatures: React.FC<HomeFeaturesProps> = ({}) => {
  const theme = useTheme();

  const renderScene = SceneMap({
    open: OpenTasks,
    working: WorkingTasks,
    completed: CompletedTasks,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'open', title: 'Open' },
    { key: 'working', title: 'Working' },
    { key: 'completed', title: 'Completed' },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <UserHeader />
      <Spacer />
      <TabView
        lazy={true}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: theme.colors.primary }}
            style={{
              backgroundColor: theme.colors.background,
            }}
            renderLabel={({ route }) => (
              <Text variant='title'>{route.title}</Text>
            )}
          />
        )}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: screenWidth }}
      />
      <TaskForm />
    </View>
  );
};

export default HomeFeatures;
