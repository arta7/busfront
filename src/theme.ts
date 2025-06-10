// import {createTheme} from '@mui/material';
// import { useTranslation } from 'react-i18next';

//  const {  i18n } = useTranslation();
// const theme = createTheme({
  
//   palette: {
//     common: {
//       black: 'rgba(0, 0, 0, 0.5)',
//     },
//     primary: {
//       main: 'rgba(1,166,147,1)',
//     },
//     secondary: {
//       main: 'rgba(0, 0, 0, 0.7)',
//     },
//   },
//   typography: {
//     fontFamily: i18n.language == 'fa' ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
//     h1: {
//      fontFamily: i18n.language == 'fa' ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
//       fontSize: '2.5rem',
//       fontWeight: 700,
//     },
//     h2: {
//        fontFamily: i18n.language == 'fa' ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
//       fontSize: '2rem',
//       fontWeight: 500,
//     },
//     h3: {
//        fontFamily: i18n.language == 'fa' ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
//       fontSize: '1.75rem',
//     },
//     h4: {
//        fontFamily: i18n.language == 'fa' ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
//       fontSize: '1.5rem',
//     },
//     h5: {
//        fontFamily: i18n.language == 'fa' ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
//       fontSize: '1.25rem',
//     },
//     h6: {
//         fontFamily: i18n.language == 'fa' ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
//       fontSize: '1rem',
//     },
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// export default theme;


import { createTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import IranianSans from './assets/fonts/IranianSans.ttf';

const getTheme = (language) => {
  return createTheme({
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
      fontFamily: ['fa', 'ar', 'pa'].includes(language )  ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
      h1: {
        fontFamily: ['fa', 'ar', 'pa'].includes(language ) ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontFamily: ['fa', 'ar', 'pa'].includes(language ) ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
        fontSize: '2rem',
        fontWeight: 500,
      },
      h3: {
        fontFamily: ['fa', 'ar', 'pa'].includes(language ) ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
        fontSize: '1.75rem',
      },
      h4: {
        fontFamily: ['fa', 'ar', 'pa'].includes(language ) ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
        fontSize: '1.5rem',
      },
      h5: {
        fontFamily: ['fa', 'ar', 'pa'].includes(language ) ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
        fontSize: '1.25rem',
      },
      h6: {
        fontFamily: ['fa', 'ar', 'pa'].includes(language ) ? ['IranianSans'].join(',') : ['Inter', 'sans-serif'].join(','),
        fontSize: '1rem',
      },
    },
    components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'IranianSans';
          src: url(${IranianSans}) format('truetype');
          font-display: swap;
        }
      `,
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
};

// export const ThemeProviderComponent = ({ children }) => {
//   const { i18n } = useTranslation();
//   const theme = getTheme(i18n.language);

//   return (
//     <ThemeProvider theme={theme}>
//       {children}
//     </ThemeProvider>
//   );
// };

export default getTheme;