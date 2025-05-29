import {createTheme} from '@mui/material';

const theme = createTheme({
  palette: {
    common: {
      black: 'rgba(0, 0, 0, 0.5)',
    },
    primary: {
      main: 'rgba(1,166,147,1)',
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.7)',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
       fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
       fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: '1.75rem',
    },
    h4: {
       fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: '1.5rem',
    },
    h5: {
       fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: '1.25rem',
    },
    h6: {
       fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
