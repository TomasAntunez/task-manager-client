import { ServiceResult } from '@/common/services';

import { CreateTaskParams, UpdateTaskParams } from './tasks-params-schemas';


export interface GetTasks {
  (): Promise<ServiceResult>;
}
export interface CreateTask {
  (params: CreateTaskParams): Promise<ServiceResult>;
}
export interface UpdateTask {
  (params: UpdateTaskParams): Promise<ServiceResult>;
}
export interface RemoveTask {
  (id: string): Promise<ServiceResult>;
}

export interface TasksServices {
  isLoading: boolean;
  getTasks: GetTasks;
  createTask: CreateTask;
  updateTask: UpdateTask;
  removeTask: RemoveTask;
}
