import { ObjectSchema, string, object } from 'yup';


export interface LoginSchema {
  email: string;
  password: string;
}

export const initialValues: LoginSchema = {
  email: '',
  password: ''
};

export const validationSchema: ObjectSchema<LoginSchema> = object({
  email: string()
    .required('Email is required')
    .email('Enter a valid email'),
  password: string()
    .required('Passworn is required')
    .min(6, 'Password must have more than 6 characters')
    .max(50, 'Password must be less than 50 characters'),
});
