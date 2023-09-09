import { v4 as uuid } from 'uuid';

import { CreateTaskResponse, GetTasksResponse, UpdateTaskResponse } from './tasks-response-schemas';


export const createTaskResponse: CreateTaskResponse = {
  id: uuid(),
  title: 'test1',
  description: 'description test 1'
};

export const getTasksResponse: GetTasksResponse = [
  {
    id: uuid(),
    title: 'test1',
    description: 'description test 1'
  },
  {
    id: uuid(),
    title: 'test2',
    description: 'description test 2'
  },
  {
    id: uuid(),
    title: 'test3',
    description: 'description test 3'
  },
  {
    id: uuid(),
    title: 'test4',
    description: 'description test 4'
  },
  {
    id: uuid(),
    title: 'test5',
    description: 'description test 5'
  },
  {
    id: uuid(),
    title: 'test6',
    description: 'description test 6'
  },
  {
    id: uuid(),
    title: 'test7',
    description: 'description test 7'
  },
  {
    id: uuid(),
    title: 'test8',
    description: 'description test 8'
  }
];

export const updateTaskResponse: UpdateTaskResponse = {
  ...createTaskResponse,
  title: 'test1 updated',
  description: 'description test 1 updated'
};
