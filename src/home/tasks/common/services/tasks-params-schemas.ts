
export type CreateTaskParams = {
  title: string;
  description: string;
}

export type UpdateTaskParams = Partial<CreateTaskParams> & { id: string }
