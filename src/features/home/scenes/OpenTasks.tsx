import { selectUser } from '@src/redux/auth/auth.selectors';
import { fetchOpenTasksAsync } from '@src/redux/task/task.async';
import {
  selectIsFetchingOpenTasks,
  selectOpenTasks,
} from '@src/redux/task/task.selectors';
import { moveTaskToWorking } from '@src/redux/task/task.slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BaseScene from './BaseScene';

const OpenTasks: React.FC = ({}) => {
  const tasks = useSelector(selectOpenTasks);
  const loading = useSelector(selectIsFetchingOpenTasks);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const remove = React.useCallback((id) => {
    dispatch(moveTaskToWorking(id));
  }, []);

  const getTasks = () => {
    if (user) {
      dispatch(fetchOpenTasksAsync(user?.uid));
    }
  };
  React.useEffect(() => {
    getTasks();
  }, [user]);

  return (
    <BaseScene
      tasks={tasks}
      loading={loading}
      onRefresh={getTasks}
      onRemove={remove}
      moveTo='working'
      noTitle='No Open Task'
    />
  );
};

export default OpenTasks;
