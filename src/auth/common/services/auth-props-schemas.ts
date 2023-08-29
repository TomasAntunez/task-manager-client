
export type RegisterProps = LoginProps & {
  username: string;
};

export type LoginProps = {
  email: string;
  password: string;
}

export type SetSessionProps = {
  id: string;
  email: string;
  username: string;
}
