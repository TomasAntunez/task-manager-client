import { ServiceResult } from '@/common/services';

import { LoginProps, RegisterProps } from "./auth-props-schemas";


export interface Register {
  (props: RegisterProps): Promise<ServiceResult>;
}
export interface Login {
  (props: LoginProps): Promise<ServiceResult>;
}
export interface GetAuth {
  (): Promise<void>;
}

export interface AuthServices {
  isLoading: boolean;
  register: Register
  login: Login;
  getAuth: GetAuth;
}
