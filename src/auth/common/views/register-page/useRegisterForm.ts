import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { MainRoutes } from '@/routes';

import { useAuthServices } from '../../hooks';
import { initialValues, validationSchema, RegisterSchema } from './register-schemas';


export const useRegisterForm = () => {

  const navigate = useNavigate();

  const { register } = useAuthServices();


  const registerUser = async (registerSchema: RegisterSchema) => {
    const error = await register(registerSchema);

    if (error) return alert(error);

    navigate(`/${ MainRoutes.TASKS }`);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => registerUser(values)
  });

  return { formik };
};
