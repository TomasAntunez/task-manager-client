
export enum AlertActionTypes {
  HIDE = 'alert/hide',
  SHOW_ERROR = 'alert/show-error'
}


export type AlertAction =
  | { type: AlertActionTypes.HIDE }
  | { type: AlertActionTypes.SHOW_ERROR, payload?: string }
