
export type TaskId = string;

export interface TaskState {
  id: TaskId;
  title: string;
  description: string;
}

export interface TasksState {
  tasks: Array<TaskState>;
  taskInEdition: TaskState;
}


export const taskInEditionInitialState = {
  id: '',
  title: '',
  description: ''
};

export const tasksInitialState: TasksState = {
  tasks: [],
  taskInEdition: taskInEditionInitialState
}
