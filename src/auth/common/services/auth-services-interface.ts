import { LoginProps, RegisterProps } from "./auth-props-schemas";


export interface Register {
  (props: RegisterProps): Promise<void | Error>;
}
export interface Login {
  (props: LoginProps): Promise<void | Error>;
}
export interface GetAuth {
  (): Promise<void | Error>;
}

export interface AuthServices {
  isLoading: boolean;
  register: Register
  login: Login;
  getAuth: GetAuth;
}
