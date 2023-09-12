
export type CreateTaskResponse = {
  id: string;
  title: string;
  description: string;
}

export type UpdateTaskResponse = CreateTaskResponse;

export type GetTasksResponse = Array<CreateTaskResponse>;
