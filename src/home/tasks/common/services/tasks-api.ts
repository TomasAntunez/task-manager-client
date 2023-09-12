import { v4 as uuid } from 'uuid';

import {
  GetTasksResponse, CreateTaskParams, CreateTaskResponse, UpdateTaskParams, UpdateTaskResponse
} from './schemas';
import { tasks } from './data';


let taskList = tasks;


export const tasksApi = {

  async getAll(): Promise<GetTasksResponse> {
    return taskList;
  },

  async create(params: CreateTaskParams): Promise<CreateTaskResponse> {
    const newTask = { id: uuid(), ...params };
    taskList = [...taskList, newTask];
    return newTask;
  },

  async update(params: UpdateTaskParams): Promise<UpdateTaskResponse> {

    let updatedTask = {} as UpdateTaskResponse;

    taskList = taskList.map( task => {
      if (task.id === params.id) {
        updatedTask = { ...task, ...params }
        return updatedTask;
      }
      return task;
    });

    return updatedTask;
  },

  async delete(id: string): Promise<true> {
    taskList = taskList.filter( task => task.id !== id );
    return true;
  }
};
