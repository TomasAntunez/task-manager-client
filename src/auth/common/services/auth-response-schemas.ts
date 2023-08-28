
export type RegisterResponse = {
  id: string;
  email: string;
  username: string;
  accessToken: string;
  refreshToken: string;
}

export type LoginResponse = RegisterResponse;

export type GetAuthResponse = RegisterResponse;
