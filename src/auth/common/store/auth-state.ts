
export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
}


export const authInitialState: AuthState = {
  isLoading: false,
  isAuthenticated: false
}
