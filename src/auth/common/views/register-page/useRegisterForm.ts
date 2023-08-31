import { useNavigate } from 'react-router-dom';
import { FormikHelpers, useFormik } from 'formik';

import { MainRoutes } from '@/routes';

import { useAuthServices } from '../../hooks';
import { initialValues, validationSchema, RegisterSchema } from './register-schemas';


export const useRegisterForm = () => {

  const navigate = useNavigate();

  const { register } = useAuthServices();


  const registerUser = async (
    registerSchema: RegisterSchema, formikBag: FormikHelpers<RegisterSchema>
  ) => {

    const { error } = await register(registerSchema);

    if (error) { // Example
      const errorMessage = 'That email already exists';
      formikBag.setFieldError('email', errorMessage);
      return;
    }

    navigate(`/${ MainRoutes.TASKS }`);
  };
  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: registerUser
  });

  return { formik };
};
