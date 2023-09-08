
export interface UserState {
  id: string;
  email: string;
  username: string;
}


export const userInitialState: UserState = {
  id: '',
  email: '',
  username: '',
}
