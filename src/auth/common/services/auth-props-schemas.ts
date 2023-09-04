
export type RegisterParams = LoginParams & {
  username: string;
};

export type LoginParams = {
  email: string;
  password: string;
}

export type SetSessionParams = {
  id: string;
  email: string;
  username: string;
}
