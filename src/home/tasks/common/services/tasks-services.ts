import { Dispatch, useState, useCallback } from 'react';

import { AlertActionTypes } from '@/common/store';
import { useAlertDispatch } from '@/common/hooks';

import { TasksAction, TasksActionTypes, TaskId } from '../store';
import { CreateTaskParams, UpdateTaskParams } from './schemas';
import {
  TasksServices, GetTasks, CreateTask, UpdateTask, RemoveTask
} from './tasks-services-interface';
import { tasksApi } from './tasks-api';


export const useTasksServices = (tasksDispatch: Dispatch<TasksAction>): TasksServices => {

  const alertDispatch = useAlertDispatch();

  const [ isLoading, setIsLoading ] = useState<boolean>(false);


  const getTasks: GetTasks = useCallback( async () => {
    setIsLoading(true);
    try {
      const tasks = await tasksApi.getAll();

      tasksDispatch({
        type: TasksActionTypes.SET_TASKS,
        payload: tasks
      });
      setIsLoading(false);

    } catch (error) {
      alertDispatch({
        type: AlertActionTypes.SHOW_ERROR,
        payload: 'getTasks error'
      });
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [tasksDispatch, alertDispatch])
  

  const createTask: CreateTask = async (params: CreateTaskParams) => {
    setIsLoading(true);
    try {
      const response = await tasksApi.create(params);

      tasksDispatch({
        type: TasksActionTypes.CREATE_TASK,
        payload: response
      });
      setIsLoading(false);
      
    } catch (error) {
      alertDispatch({
        type: AlertActionTypes.SHOW_ERROR,
        payload: 'createTask error'
      });
      setIsLoading(false);
    }
  }

  const updateTask: UpdateTask = async (params: UpdateTaskParams) => {
    setIsLoading(true);
    try {
      const response = await tasksApi.update(params);

      tasksDispatch({
        type: TasksActionTypes.UPDATE_TASK,
        payload: response
      });
      setIsLoading(false);

    } catch (error) {
      alertDispatch({
        type: AlertActionTypes.SHOW_ERROR,
        payload: 'updateTask error'
      })
      setIsLoading(false);
    }
  }

  const removeTask: RemoveTask = async (id: TaskId) => {
    setIsLoading(true);
    try {
      await tasksApi.delete(id);
      
      tasksDispatch({
        type: TasksActionTypes.REMOVE_TASK,
        payload: id
      });
      setIsLoading(false);

    } catch (error) {
      alertDispatch({
        type: AlertActionTypes.SHOW_ERROR,
        payload: 'removeTask error'
      })
      setIsLoading(false);
    }
  }


  return {
    isLoading,
    getTasks,
    createTask,
    updateTask,
    removeTask
  };
};
