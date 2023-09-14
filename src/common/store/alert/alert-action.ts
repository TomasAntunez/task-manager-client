
export enum AlertActionTypes {
  HIDE = 'alert/hide',
  SHOW_ERROR = 'alert/show-error',
  SHOW_SUCCESS = 'alert/show-success'
}


export type AlertAction =
  | { type: AlertActionTypes.HIDE }
  | { type: AlertActionTypes.SHOW_ERROR, payload?: string }
  | { type: AlertActionTypes.SHOW_SUCCESS, payload: string }
