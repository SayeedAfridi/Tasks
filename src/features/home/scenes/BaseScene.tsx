import { Spacer } from '@src/components';
import { useTheme } from '@src/hooks';
import { Task, TaskStatus } from '@src/types';
import React from 'react';
import { RefreshControl, View } from 'react-native';
import Loader from '../components/Loader';
import NoContainer from '../components/NoContainer';
import TaskItem from '../components/TaskItem';
import Animated, { Layout } from 'react-native-reanimated';
import useInteractionManagerMount from '@src/hooks/useInteractionManagerMount';

export interface BaseSceneProps {
  tasks: Task[];
  loading?: boolean;
  onRefresh?: () => void;
  onRemove?: (id: string) => void;
  moveTo: TaskStatus;
  noTitle: string;
}

const BaseScene: React.FC<BaseSceneProps> = ({
  tasks,
  loading,
  onRefresh,
  onRemove,
  moveTo,
  noTitle,
}) => {
  const theme = useTheme();
  const [mounted, setMounted] = React.useState<boolean>(false);
  useInteractionManagerMount(() => setMounted(true));
  return (
    <View style={{ flex: 1, margin: theme.spacing.m }}>
      <Spacer />
      {loading ? <Loader /> : null}
      {mounted && !loading && !tasks.length ? (
        <NoContainer onRefresh={onRefresh} title={noTitle} />
      ) : null}
      {!loading && tasks.length ? (
        <Animated.FlatList
          itemLayoutAnimation={Layout.springify()}
          refreshControl={
            <RefreshControl
              tintColor={theme.colors.text}
              titleColor={theme.colors.text}
              colors={[theme.colors.text]}
              progressBackgroundColor={theme.colors.background}
              refreshing={false}
              onRefresh={onRefresh}
            />
          }
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: { item: any }) => {
            return (
              <TaskItem
                title={item.title}
                createdAt={item.createdAt}
                id={item.id}
                status={item.status}
                onMove={onRemove}
                moveTo={moveTo}
              />
            );
          }}
          ItemSeparatorComponent={() => <Spacer space='small' />}
        />
      ) : null}
    </View>
  );
};

export default BaseScene;
