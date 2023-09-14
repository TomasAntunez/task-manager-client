import { ObjectSchema, string, object } from 'yup';


export interface TaskFormSchema {
  title: string;
  description: string;
}

export const validationSchema: ObjectSchema<TaskFormSchema> = object({
  description: string()
    .trim()
    .required('Description is required')
    .max(100, 'Description must be less than 100 characters'),
  title: string()
    .trim()
    .required('Title is required')
    .max(30, 'Title must be less than 50 characters')
});
