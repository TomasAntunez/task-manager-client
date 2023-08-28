import { RegisterProps, LoginProps } from './auth-props-schemas';
import { RegisterResponse, LoginResponse, GetAuthResponse } from './auth-response-schemas';
import { registerResponse, loginResponse, getAuthResponse } from './mock';


export const authServices = {

  async register(props: RegisterProps): Promise<RegisterResponse> {
    console.log({ registerProps: props });
    return registerResponse;
  },

  async login(props: LoginProps): Promise<LoginResponse> {
    console.log({ loginProps: props });
    return loginResponse;
  },

  async getAuth(): Promise<GetAuthResponse> {
    return getAuthResponse;
  }

};
