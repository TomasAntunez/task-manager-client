import { ChangeEvent, FormEvent } from 'react';

import { useAlertDispatch } from '@/common/hooks';
import { AlertActionTypes } from '@/common/store';

import { useTasksDispatch, useTasksState, useTasksServices } from '../../../../hooks';
import { TasksActionTypes } from '../../../../store';
import { validationSchema } from './task-form-schemas';


export const useTaskForm = () => {

  const alertDispatch = useAlertDispatch();

  const { taskInEdition } = useTasksState();
  const tasksDispatch = useTasksDispatch();
  const { createTask } = useTasksServices();
  
  
  const handleChange = ({
    target: { name, value }
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    tasksDispatch({
      type: TasksActionTypes.EDIT_TASK,
      payload: {
        ...taskInEdition,
        [name]: value
      }
    });
  };


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await validationSchema.validate(taskInEdition);
    } catch (error: any) {
      alertDispatch({
        type: AlertActionTypes.SHOW_ERROR,
        payload: error.message
      })
      return;
    }

    await createTask(taskInEdition);
    alertDispatch({
      type: AlertActionTypes.SHOW_SUCCESS,
      payload: 'Task created successfully'
    })
  };


  return {
    state: taskInEdition,
    handleChange,
    handleSubmit
  };
};

