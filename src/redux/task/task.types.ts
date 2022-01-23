import { Task } from '@src/types';

export type TaskState = {
  openTasks: Task[];
  workingTask: Task[];
  completeTask: Task[];
  isFetchingOpenTask: boolean;
  isFetchingWorkingTask: boolean;
  isFetchingCompletedTask: boolean;
  isCreatingTask: boolean;
};
