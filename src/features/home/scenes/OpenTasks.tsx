import { Spacer, Text } from '@src/components';
import { useTheme } from '@src/hooks';
import React from 'react';
import { FlatList, View } from 'react-native';
import TaskItem from '../components/TaskItem';

const OpenTasks: React.FC = ({}) => {
  const theme = useTheme();
  const [tasks, setTasks] = React.useState<number[]>([1, 2, 3, 4, 5]);

  const remove = React.useCallback((id) => {
    setTasks((prev) => prev.filter((i) => i !== +id));
  }, []);

  return (
    <View style={{ flex: 1, margin: theme.spacing.m }}>
      <Spacer />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => {
          return (
            <TaskItem
              title={`Task - ${item}`}
              createdAt=''
              id={item.toString()}
              onMove={remove}
              moveTo='working'
            />
          );
        }}
        ItemSeparatorComponent={() => <Spacer space='small' />}
      />
    </View>
  );
};

export default OpenTasks;
