import { FC } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';

import { darkTheme } from '../config';


interface ThemeProviderProps {
  children: JSX.Element;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      { children }
    </MuiThemeProvider>
  )
}
