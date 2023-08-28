import { ObjectSchema, object, string } from 'yup';


export interface RegisterSchema {
  email: string;
  username: string;
  password: string;
}


export const initialValues: RegisterSchema = {
  email: '',
  username: '',
  password: ''
};


export const validationSchema: ObjectSchema<RegisterSchema> = object({
  email: string()
    .required('Email is required')
    .email('Enter a valid email'),
  username: string()
    .required('Username is required')
    .min(3, 'Username must have more than 3 characters')
    .max(30, 'Username must be less than 30 characters'),
  password: string()
    .required('Passworn is required')
    .min(6, 'Password must have more than 6 characters')
    .max(50, 'Password must be less than 50 characters'),
});