import { useState } from 'react';

import { TasksServices, GetTasks, CreateTask, UpdateTask, RemoveTask } from './tasks-services-interface';


export const useTasksServices = (): TasksServices => {

  const [ isLoading ] = useState<boolean>(false);


  const getTasks: GetTasks = async () => {
    return {};
  }

  const createTask: CreateTask = async () => {
    return {};
  }

  const updateTask: UpdateTask = async () => {
    return {};
  }

  const removeTask: RemoveTask = async () => {
    return {};
  }


  return {
    isLoading,
    getTasks,
    createTask,
    updateTask,
    removeTask
  };
};
