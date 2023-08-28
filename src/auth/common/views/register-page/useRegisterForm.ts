import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { MainRoutes } from '@/routes';
import { useGlobalStores } from '@/common/hooks';
import { UserActionTypes } from '@/user/common/store';

import { authServices } from '../../services';
import { AuthActionTypes } from '../../store';
import { initialValues, validationSchema, RegisterSchema } from './register-schemas';


export const useRegisterForm = () => {

  const navigate = useNavigate();

  const {
    auth: { dispatch: authDispatch },
    user: { dispatch: userDispatch }
  } = useGlobalStores();


  const registerUser = async (registerSchema: RegisterSchema) => {

    authDispatch({ type: AuthActionTypes.START_LOADING });

    try {
      const { id, email, username } = await authServices.register(registerSchema);
      console.log({ id, email, username }); 

      authDispatch({ type: AuthActionTypes.AUTHENTICATE });
      userDispatch({
        type: UserActionTypes.CREATE_USER,
        payload: { id, email, username }
      });

      navigate(`/${ MainRoutes.TASKS }`);

    } catch (error) {
      console.log(error);
      // TODO: Show an error
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => registerUser(values)
  });

  return { formik };
};
