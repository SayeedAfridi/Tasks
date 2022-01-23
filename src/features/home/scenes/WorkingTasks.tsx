import { selectUser } from '@src/redux/auth/auth.selectors';
import { fetchWorkingTasksAsync } from '@src/redux/task/task.async';
import {
  selectIsFetchingWorkingTasks,
  selectWorkingTasks,
} from '@src/redux/task/task.selectors';
import { moveTaskToCompleted } from '@src/redux/task/task.slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BaseScene from './BaseScene';

const WorkingTasks: React.FC = ({}) => {
  const tasks = useSelector(selectWorkingTasks);
  const loading = useSelector(selectIsFetchingWorkingTasks);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const remove = React.useCallback((id) => {
    dispatch(moveTaskToCompleted(id));
  }, []);

  const getTasks = () => {
    if (user) {
      dispatch(fetchWorkingTasksAsync(user?.uid));
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
      moveTo='completed'
      noTitle='No working Task'
    />
  );
};

export default WorkingTasks;
