
export type TaskId = string;

export interface TaskState {
  id: TaskId;
  title: string;
  description: string;
}

export interface TasksState {
  tasks: Array<TaskState>;
  taskInEdition: TaskState | null;
}

export const tasksInitialState: TasksState = {
  tasks: [],
  taskInEdition: null
}
