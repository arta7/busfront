// import {Breakpoint, useMediaQuery} from '@mui/material';
// import theme from '../theme';

// export const useScreen = (): Breakpoint => {
//   const isXs = useMediaQuery(theme.breakpoints.only('xs'));
//   const isSm = useMediaQuery(theme.breakpoints.only('sm'));
//   const isMd = useMediaQuery(theme.breakpoints.only('md'));
//   const isLg = useMediaQuery(theme.breakpoints.only('lg'));
//   const isXl = useMediaQuery(theme.breakpoints.only('xl'));

//   if (isXs) return 'xs';
//   if (isSm) return 'sm';
//   if (isMd) return 'md';
//   if (isLg) return 'lg';
//   if (isXl) return 'xl';

//   return 'xs';
// };


import { Breakpoint, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import getTheme from '../theme'; // Import the getTheme function

export const useScreen = (): Breakpoint => {
  // Get the current language using useTranslation
  const { i18n } = useTranslation();
  
  // Generate the theme based on the current language
  const theme = getTheme(i18n.language);

  // Use media queries based on the dynamically generated theme breakpoints
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.only('xl'));

  if (isXs) return 'xs';
  if (isSm) return 'sm';
  if (isMd) return 'md';
  if (isLg) return 'lg';
  if (isXl) return 'xl';

  return 'xs';
};