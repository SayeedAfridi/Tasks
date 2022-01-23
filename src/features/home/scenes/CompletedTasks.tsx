import { selectUser } from '@src/redux/auth/auth.selectors';
import { fetchCompletedTasksAsync } from '@src/redux/task/task.async';
import {
  selectCompletedTasks,
  selectIsFetchingCompletedTasks,
} from '@src/redux/task/task.selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseScene from './BaseScene';

const CompletedTasks: React.FC = ({}) => {
  const tasks = useSelector(selectCompletedTasks);
  const loading = useSelector(selectIsFetchingCompletedTasks);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const getTasks = () => {
    if (user) {
      dispatch(fetchCompletedTasksAsync(user?.uid));
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
      moveTo='working'
      noTitle='No completed Task'
    />
  );
};

export default CompletedTasks;
