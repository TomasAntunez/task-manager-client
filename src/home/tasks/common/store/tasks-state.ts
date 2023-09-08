
export type TaskId = string;

export interface TaskState {
  id: TaskId;
  title: string;
  description: string;
}

export interface TasksState {
  tasks: Array<TaskState>;
  taskInEdit: TaskId | null;
}

export const tasksInitialState: TasksState = {
  tasks: [],
  taskInEdit: null
}
