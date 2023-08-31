import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { MainRoutes } from '@/routes';
import { useAlertDispatch } from '@/common/hooks';
import { AlertActionTypes } from '@/common/store';

import { useAuthServices } from '../../hooks';
import { LoginSchema, initialValues, validationSchema } from './login-schemas';


export const useLoginForm = () => {

  const navigate = useNavigate();

  const { login } = useAuthServices();
  const alertDispatch = useAlertDispatch();


  const loginUser = async (loginSchema: LoginSchema) => {
    const { error } = await login(loginSchema);

    if (error) {
      alertDispatch({
        type: AlertActionTypes.SHOW_ERROR,
        payload: 'Email or password are not valid'
      });
      return;
    }

    navigate(`/${ MainRoutes.TASKS }`);
  };


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: loginUser
  });

  return { formik };
}
