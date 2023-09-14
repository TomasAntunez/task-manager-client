import { Reducer } from 'react';

import { TasksState, taskInEditionInitialState } from './tasks-state';
import { TasksAction, TasksActionTypes } from './tasks-action';


export const tasksReducer: Reducer<TasksState, TasksAction> = (state, action) => {

  switch (action.type) {

    case TasksActionTypes.SET_TASKS:
      return {
        ...state,
        tasks: [ ...action.payload ]
      };

    case TasksActionTypes.CREATE_TASK:
      return {
        ...state,
        taskInEdition: taskInEditionInitialState,
        tasks: [ ...state.tasks, action.payload ]
      };

    case TasksActionTypes.UPDATE_TASK:
      return {
        ...state,
        taskInEdition: taskInEditionInitialState,
        tasks: state.tasks.map( task => {
          if (task.id === action.payload.id) {
            return { ...task, ...action.payload };
          }
          return task;
        })
      };

    case TasksActionTypes.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter( task => task.id !== action.payload )
      };

    case TasksActionTypes.EDIT_TASK:
      return {
        ...state,
        taskInEdition: { ...state.taskInEdition, ...action.payload }
      };

    default:
      return { ...state };
  }
  
}
