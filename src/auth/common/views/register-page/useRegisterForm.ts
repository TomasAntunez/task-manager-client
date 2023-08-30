import { useNavigate } from 'react-router-dom';
import { FormikHelpers, useFormik } from 'formik';

import { MainRoutes } from '@/routes';
import { useAlertDispatch } from '@/common/hooks';
import { AlertActionTypes } from '@/common/store';

import { useAuthServices } from '../../hooks';
import { initialValues, validationSchema, RegisterSchema } from './register-schemas';


export const useRegisterForm = () => {

  const navigate = useNavigate();
  const alertDispatch = useAlertDispatch();

  const { register } = useAuthServices();


  const registerUser = async (
    registerSchema: RegisterSchema, formikBag: FormikHelpers<RegisterSchema>
  ) => {

    const { error } = await register(registerSchema);

    if (error) { // Example
      const errorMessage = 'That email already exists'
      alertDispatch({
        type: AlertActionTypes.SHOW_ERROR,
        payload: errorMessage
      });
      formikBag.setFieldError('email', errorMessage);
      return;
    }

    navigate(`/${ MainRoutes.TASKS }`);
  };
  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, formikBag) => registerUser(values, formikBag)
  });

  return { formik };
};
