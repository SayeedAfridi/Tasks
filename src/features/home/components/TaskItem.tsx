import { Feather } from '@expo/vector-icons';
import { Spacer, Text } from '@src/components';
import { useTheme } from '@src/hooks';
import { makeStyles } from '@src/theme/theme.utils';
import { TaskStatus } from '@src/types';
import { fp } from '@src/utils';
import { transparentize } from 'polished';
import React from 'react';
import { ActivityIndicator, Pressable, View } from 'react-native';
import { format } from 'date-fns';
import { getErrorMessage } from '@src/error-handler/helper';
import { useDispatch } from 'react-redux';
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from '@src/redux/snackbar/snackbar.slice';
import { dbService } from '@src/services';
import Animated, { ZoomInLeft, ZoomOutRight } from 'react-native-reanimated';

export interface TaskItemProps {
  title: string;
  id: string;
  createdAt: string;
  onMove?: (id: string) => void;
  moveTo?: TaskStatus;
  status: TaskStatus;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing.s,
    borderLeftWidth: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: { color: theme.colors.grey },
  buttonContainer: {
    padding: theme.spacing.s,
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
  status,
}) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const styles = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();

  const handlePress = async () => {
    if (!loading && moveTo) {
      try {
        setLoading(true);
        await dbService.updateTask(id, moveTo);
        setLoading(false);
        dispatch(
          showSuccessSnackbar({
            message: `Task moved to ${moveTo}`,
          })
        );
        onMove?.(id);
      } catch (error) {
        setLoading(false);
        const message = getErrorMessage(error);
        dispatch(showErrorSnackbar({ message }));
      }
    }
  };
  const color =
    status === 'open'
      ? theme.colors.primary
      : status === 'working'
      ? theme.colors.secondary
      : theme.colors.success;

  const btnColor =
    status === 'open'
      ? theme.colors.secondary
      : status === 'working'
      ? theme.colors.primary
      : theme.colors.success;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          borderLeftColor: color,
          backgroundColor: transparentize(0.85, color),
        },
      ]}
      entering={ZoomInLeft}
      exiting={ZoomOutRight}
    >
      <View style={{ flex: 1 }}>
        <Text variant='title'>{title}</Text>
        <Spacer />
        <Text variant='body' style={styles.date}>
          {format(new Date(createdAt), 'dd MMM, yyyy hh:mm aaa')}
        </Text>
      </View>
      {onMove ? (
        <Pressable
          onPress={handlePress}
          style={[
            styles.buttonContainer,
            { backgroundColor: transparentize(0.3, btnColor) },
          ]}
        >
          {loading ? (
            <ActivityIndicator size={fontSize} color='#fff' />
          ) : (
            <Feather name='arrow-right' size={fontSize} color='#fff' />
          )}
        </Pressable>
      ) : null}
    </Animated.View>
  );
};

export default TaskItem;
