import { CreateTaskParams, UpdateTaskParams } from './schemas';


export interface GetTasks {
  (): Promise<void>;
}
export interface CreateTask {
  (params: CreateTaskParams): Promise<void>;
}
export interface UpdateTask {
  (params: UpdateTaskParams): Promise<void>;
}
export interface RemoveTask {
  (id: string): Promise<void>;
}

export interface TasksServices {
  isLoading: boolean;
  getTasks: GetTasks;
  createTask: CreateTask;
  updateTask: UpdateTask;
  removeTask: RemoveTask;
}
