import { LoginParams, RegisterParams } from "./auth-params-schemas";


export interface Register {
  (params: RegisterParams): Promise<void | unknown>;
}
export interface Login {
  (params: LoginParams): Promise<void | unknown>;
}
export interface Logout {
  (): void;
}
export interface GetAuth {
  (): Promise<void>;
}

export interface AuthServices {
  isLoading: boolean;
  register: Register
  login: Login;
  logout: Logout;
  getAuth: GetAuth;
}
