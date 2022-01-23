import { Feather } from '@expo/vector-icons';
import { Spacer, Text } from '@src/components';
import { useTheme } from '@src/hooks';
import { makeStyles } from '@src/theme/theme.utils';
import { TaskStatus } from '@src/types';
import { fp } from '@src/utils';
import { transparentize } from 'polished';
import React from 'react';
import { Pressable, View } from 'react-native';

export interface TaskItemProps {
  title: string;
  id: string;
  createdAt: string;
  onMove?: (id: string) => void;
  moveTo?: TaskStatus;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing.s,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
    backgroundColor: transparentize(0.85, theme.colors.primary),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: { color: theme.colors.grey },
  buttonContainer: {
    padding: theme.spacing.s,
    backgroundColor: transparentize(0.3, theme.colors.secondary),
    borderRadius: 100 / 2,
  },
}));

const fontSize = fp(2);

const TaskItem: React.FC<TaskItemProps> = ({
  title,
  id,
  createdAt,
  moveTo,
  onMove,
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const handlePress = () => {
    onMove?.(id);
  };
  const color = theme.colors.primary;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text variant='title'>{title}</Text>
        <Spacer />
        <Text variant='body' style={styles.date}>
          15 jan, 2022
        </Text>
      </View>
      {onMove ? (
        <Pressable onPress={handlePress} style={styles.buttonContainer}>
          <Feather name='arrow-right' size={fontSize} color='#fff' />
        </Pressable>
      ) : null}
    </View>
  );
};

export default TaskItem;
