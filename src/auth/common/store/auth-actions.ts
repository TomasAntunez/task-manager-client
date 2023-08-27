
export enum AuthActionsTypes {
  START_LOADING = 'auth/start-loading',
  AUTHENTICATE = 'auth/authenticate',
  SET_ERROR = 'auth/set-error'
}

export type AuthAction =
  | { type: AuthActionsTypes.START_LOADING }
  | { type: AuthActionsTypes.AUTHENTICATE }
  | { type: AuthActionsTypes.SET_ERROR, payload: string }
