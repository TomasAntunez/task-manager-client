import { createTheme } from '@mui/material';


export const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        style: {
          textTransform: 'none'
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        style: {
          marginBottom: 25
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        style:{
          boxShadow: 'none'
        }
      }
    }
  }
});