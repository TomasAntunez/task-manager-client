import { TaskId, TaskState } from './tasks-state';


export enum TasksActionTypes {
  SET_TASKS   = 'tasks/set-tasks',
  CREATE_TASK = 'tasks/create-task',
  UPDATE_TASK = 'tasks/update-task',
  REMOVE_TASK = 'tasks/remove-task',
  EDIT_TASK   = 'tasks/edit-task'
}

type UpdateTaskPayload = Partial<Omit< TaskState, 'id' >> & { id: TaskId }

export type TasksAction =
  | { type: TasksActionTypes.SET_TASKS, payload: Array<TaskState> }
  | { type: TasksActionTypes.CREATE_TASK, payload: TaskState }
  | { type: TasksActionTypes.UPDATE_TASK, payload: UpdateTaskPayload }
  | { type: TasksActionTypes.REMOVE_TASK, payload: TaskId }
  | { type: TasksActionTypes.EDIT_TASK, payload: UpdateTaskPayload }
