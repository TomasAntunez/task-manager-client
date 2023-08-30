import { AlertColor } from '@mui/material';


export interface AlertState {
  open      : boolean;
  msg       : string;
  severity? : AlertColor;
}

export const alertInitialState: AlertState = {
  open: false,
  msg: ''
}
