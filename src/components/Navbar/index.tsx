




// // // import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
// // // import {
// // //   Avatar,
// // //   Box,
// // //   Button,
// // //   IconButton,
// // //   Menu,
// // //   MenuItem,
// // //   Stack,
// // //   Typography,
// // //   styled,
// // //   useTheme,
// // // } from '@mui/material';
// // // import UserContext from './../../UserContext';
// // // import React, { useRef } from 'react';
// // // import toast, { Toaster } from 'react-hot-toast';
// // // import { Link, useLocation, useNavigate } from 'react-router-dom';
// // // import googleIcon from '../../assets/googleIcon.svg';
// // // import { useScreen } from '../../customHooks/useScreen';
// // // import { useAuthStore } from '../../store/authStore';
// // // import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
// // // import Logo from '../../assets/iiitdmj-logo.png';
// // // import MenuIcon from '@mui/icons-material/Menu';
// // // import { useTranslation } from 'react-i18next';
// // // import LanguageIcon from '@mui/icons-material/Language';

// // // const NavContainer = styled(Box)(({ theme }) => ({
// // //   display: 'flex',
// // //   justifyContent: 'space-between',
// // //   alignItems: 'center',
// // //   backgroundColor: 'rgba(1, 166, 147, 0.2)',
// // //   borderRadius: 5,
// // //   border: '0.5px solid gray',
// // //   padding: 8,
// // //   [theme.breakpoints.down('sm')]: {
// // //     flexDirection: 'column',
// // //     gap: '1rem',
// // //     padding: '1rem',
// // //   },
// // // }));

// // // const LeftSection = styled(Box)(({ theme }) => ({
// // //   display: 'flex',
// // //   alignItems: 'center',
// // //   gap: '1rem',
// // //   [theme.breakpoints.down('sm')]: {
// // //     width: '100%',
// // //     justifyContent: 'space-between',
// // //   },
// // // }));

// // // const RightSection = styled(Box)(({ theme }) => ({
// // //   display: 'flex',
// // //   alignItems: 'center',
// // //   gap: '1.5rem',
// // //   [theme.breakpoints.down('sm')]: {
// // //     width: '100%',
// // //     justifyContent: 'flex-end',
// // //   },
// // // }));

// // // const NavLinksContainer = styled(Box)(({ theme }) => ({
// // //   display: 'flex',
// // //   alignItems: 'center',
// // //   gap: '1.5rem',
// // //   [theme.breakpoints.down('sm')]: {
// // //     display: 'none',
// // //   },
// // // }));

// // // const MobileMenuButton = styled(IconButton)(({ theme }) => ({
// // //   display: 'none',
// // //   [theme.breakpoints.down('sm')]: {
// // //     display: 'flex',
// // //   },
// // // }));

// // // const NavButton = styled(Button)(({ theme }) => ({
// // //   color: theme.palette.common.black,
// // //   textTransform: 'none',
// // //   fontWeight: 500,
// // //   '&:hover': {
// // //     backgroundColor: theme.palette.action.hover,
// // //   },
// // // }));

// // // const ProfileContainer = styled(Box)(({ theme }) => ({
// // //   display: 'flex',
// // //   alignItems: 'center',
// // //   borderRadius: '8px',
// // //   cursor: 'pointer',
// // //   '&:hover': {
// // //     border: `0.5px solid ${theme.palette.primary.main}`,
// // //     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
// // //   },
// // // }));

// // // const LanguageButton = styled(Button)(({ theme }) => ({
// // //   minWidth: 'auto',
// // //   padding: '12px 12px',
// // //   textTransform: 'uppercase',
// // // }));

// // // export default function Navbar() {
// // //   const { t, i18n } = useTranslation();
// // //   const currentScreen = useScreen();
// // //   const theme = useTheme();
// // //   const navigate = useNavigate();
// // //   const { isAuth, user } = useAuthStore();
// // //   const { userData, setUserData } = React.useContext(UserContext);
// // //   const location = useLocation();

// // //   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
// // //   const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState<null | HTMLElement>(null);
// // //   const [languageMenuAnchor, setLanguageMenuAnchor] = React.useState<null | HTMLElement>(null);
  
// // //   const open = Boolean(anchorEl);
// // //   const mobileMenuOpen = Boolean(mobileMenuAnchor);
// // //   const languageMenuOpen = Boolean(languageMenuAnchor);

// // //   const isPersian = i18n.language === 'fa';

// // //   const changeLanguage = (lng: string) => {
// // //     i18n.changeLanguage(lng);
// // //     localStorage.setItem('language', lng);
// // //     setLanguageMenuAnchor(null);
// // //   };

// // //   const openMenu = (event: React.MouseEvent<HTMLDivElement>) => {
// // //     setAnchorEl(event.currentTarget);
// // //   };

// // //   const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
// // //     setMobileMenuAnchor(event.currentTarget);
// // //   };

// // //   const openLanguageMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
// // //     setLanguageMenuAnchor(event.currentTarget);
// // //   };

// // //   const closeMenu = () => {
// // //     setAnchorEl(null);
// // //     setMobileMenuAnchor(null);
// // //     setLanguageMenuAnchor(null);
// // //   };

// // //   const handleLogout = async () => {
// // //     try {
// // //       setUserData([{
// // //         UserId: '',
// // //         Username: '',
// // //         CurrentDate: '',
// // //         StartPlace: '',
// // //         EndPlace: '',
// // //         StartPlaceCode: '',
// // //         EndPlaceCode: '',
// // //         isLoading: true,
// // //         Mobile: '',
// // //         RequestNumber: '',
// // //         Name: ''
// // //       }]);

// // //       localStorage.removeItem('storageData');
// // //       localStorage.removeItem('UserId');
// // //       localStorage.removeItem('Username');
// // //       localStorage.removeItem('Token');

// // //       window.location.replace('/');
// // //     } catch (error) {
// // //       toast.error(t('navbar.logoutError'), {
// // //         position: 'top-center',
// // //         duration: 3000,
// // //       });
// // //     }
// // //     closeMenu();
// // //   };

// // //   const profile_container = useRef<HTMLDivElement | null>(null);

// // //   return (
// // //     <>
// // //       <NavContainer>
// // //         {/* Left Section - Logo and Navigation Links */}
// // //         <LeftSection>
// // //           <Link to="/">
// // //             <img src={Logo} alt="College-logo" width={currentScreen === 'xs' ? 100 : 138} />
// // //           </Link>

// // //           <NavLinksContainer>
// // //             <NavButton onClick={() => navigate('/')}>{t('navbar.home')}</NavButton>
// // //             <NavButton onClick={() => navigate('/about')}>{t('navbar.about')}</NavButton>
// // //             <NavButton onClick={() => navigate('/MapList')}>{t('navbar.stations')}</NavButton>
// // //           </NavLinksContainer>

// // //           <MobileMenuButton onClick={openMobileMenu}>
// // //             <MenuIcon />
// // //           </MobileMenuButton>
// // //         </LeftSection>

// // //         {/* Right Section - Language, Profile/Auth */}
// // //         <RightSection>
// // //           {/* Language Selector Button */}
// // //           <LanguageButton
// // //             onClick={openLanguageMenu}
// // //             startIcon={<LanguageIcon  sx={{margin:1}}/>}
// // //             sx={{ textTransform: 'none',}}
// // //           >
// // //             {i18n.language.toUpperCase()}
// // //           </LanguageButton>

// // //           {isAuth ? (
// // //             <Button 
// // //               variant="outlined" 
// // //               href={getGoogleOAuthURL()}
// // //               startIcon={<img src={googleIcon} alt="google" width={20} />}
// // //               sx={{
// // //                 textTransform: 'none',
// // //                 border: '1px solid rgba(66, 133, 244, 0.1)',
// // //               }}
// // //             >
// // //               {t('navbar.loginWithGoogle')}
// // //             </Button>
// // //           ) : (
// // //             <ProfileContainer
// // //               onClick={openMenu}
// // //               ref={profile_container}
// // //               sx={{
// // //                 border: currentScreen === 'xs' ? 'none' : '0.5px solid #4f4f4f',
// // //                 padding: '0.5rem',
// // //               }}
// // //             >
// // //               <Avatar
// // //                 alt={user?.name}
// // //                 src={user?.picture}
// // //                 sx={{ width: 32, height: 32 }}
// // //               />
// // //               {currentScreen !== 'xs' && (
// // //                 <Typography
// // //                   variant="body1"
// // //                   color={theme.palette.common.black}
// // //                   padding="0 0.5rem"
// // //                 >
// // //                   {t('navbar.greeting', { name: user?.name || '' })}
// // //                 </Typography>
// // //               )}
// // //               <ArrowDropDown />
// // //             </ProfileContainer>
// // //           )}
// // //         </RightSection>
// // //       </NavContainer>

// // //       {/* Profile Menu */}
// // //       <Menu
// // //         anchorEl={anchorEl}
// // //         open={open}
// // //         onClose={closeMenu}
// // //         anchorOrigin={{
// // //           vertical: 'bottom',
// // //           horizontal: 'right',
// // //         }}
// // //         transformOrigin={{
// // //           vertical: 'top',
// // //           horizontal: 'right',
// // //         }}
// // //       >
// // //         <MenuItem onClick={() => { navigate('/profile'); closeMenu(); }}>
// // //            {t('navbar.profile')}
// // //         </MenuItem>
// // //         {userData[0]?.Token ? (
// // //           <MenuItem onClick={handleLogout}>{t('navbar.logout')}</MenuItem>
// // //         ) : (
// // //           <MenuItem onClick={() => { navigate('/profile'); closeMenu(); }}>
// // //               {t('navbar.login')}
// // //           </MenuItem>
// // //         )}
// // //       </Menu>

// // //       {/* Language Selection Menu */}
// // //       <Menu
// // //         anchorEl={languageMenuAnchor}
// // //         open={languageMenuOpen}
// // //         onClose={closeMenu}
// // //         anchorOrigin={{
// // //           vertical: 'bottom',
// // //           horizontal: 'right',
// // //         }}
// // //         transformOrigin={{
// // //           vertical: 'top',
// // //           horizontal: 'right',
// // //         }}
// // //       >
// // //         <MenuItem 
// // //           selected={i18n.language === 'en'} 
// // //           onClick={() => changeLanguage('en')}
// // //         >
// // //             English (EN)
// // //         </MenuItem>
// // //         <MenuItem 
// // //           selected={i18n.language === 'fa'} 
// // //           onClick={() => changeLanguage('fa')}
// // //         >
// // //              Persian (FA)
// // //           </MenuItem>

// // //             <MenuItem 
// // //           selected={i18n.language === 'ru'} 
// // //           onClick={() => changeLanguage('ru')}
// // //         >
// // //              Russia (RU)
// // //           </MenuItem>

// // //            <MenuItem 
// // //           selected={i18n.language === 'ar'} 
// // //           onClick={() => changeLanguage('ar')}
// // //         >
// // //              Arabia (AR)
// // //           </MenuItem>

// // //            <MenuItem 
// // //           selected={i18n.language === 'pa'} 
// // //           onClick={() => changeLanguage('pa')}
// // //         >
// // //              Pashto (PA)
// // //           </MenuItem>
// // //       </Menu>

// // //       {/* Mobile Menu */}
// // //       <Menu
// // //         anchorEl={mobileMenuAnchor}
// // //         open={mobileMenuOpen}
// // //         onClose={closeMenu}
// // //         PaperProps={{
// // //           style: {
// // //             width: '200px',
// // //           },
// // //         }}
// // //       >
// // //         <MenuItem onClick={() => { navigate('/'); closeMenu(); }}>
// // //           {t('navbar.home')}
// // //         </MenuItem>
// // //         <MenuItem onClick={() => { navigate('/about'); closeMenu(); }}>
// // //           {t('navbar.about')}
// // //         </MenuItem>
// // //         <MenuItem onClick={() => { navigate('/MapList'); closeMenu(); }}>
// // //           {t('navbar.stations')}
// // //         </MenuItem>
// // //         <MenuItem onClick={openLanguageMenu}>
// // //           {t('navbar.changeLanguage')}
// // //         </MenuItem>
// // //       </Menu>

// // //       <Toaster position="top-center" />
// // //     </>
// // //   );
// // // }


// // import React from 'react';
// // import { useTranslation } from 'react-i18next';
// // import { 
// //   Avatar,
// //   Box,
// //   Button,
// //   IconButton,
// //   Menu,
// //   MenuItem,
// //   Typography,
// //   styled,
// //   useTheme
// // } from '@mui/material';
// // import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import LanguageIcon from '@mui/icons-material/Language';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { Toaster } from 'react-hot-toast';
// // import Logo from '../../assets/iiitdmj-logo.png';
// // import googleIcon from '../../assets/googleIcon.svg';
// // import { useScreen } from '../../customHooks/useScreen';
// // import { useAuthStore } from '../../store/authStore';
// // import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
// // import UserContext from '../../UserContext';

// // // استایل‌های کامپوننت
// // const NavContainer = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   justifyContent: 'space-between',
// //   alignItems: 'center',
// //   backgroundColor: 'rgba(1, 166, 147, 0.2)',
// //   borderRadius: 5,
// //   border: '0.5px solid gray',
// //   padding: 8,
// //   [theme.breakpoints.down('sm')]: {
// //     flexDirection: 'column',
// //     gap: '1rem',
// //     padding: '1rem',
// //   },
// // }));

// // const LeftSection = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   gap: '1rem',
// //   [theme.breakpoints.down('sm')]: {
// //     width: '100%',
// //     justifyContent: 'space-between',
// //   },
// // }));

// // const RightSection = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   gap: '1.5rem',
// //   [theme.breakpoints.down('sm')]: {
// //     width: '100%',
// //     justifyContent: 'flex-end',
// //   },
// // }));

// // const NavLinksContainer = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   gap: '1.5rem',
// //   [theme.breakpoints.down('sm')]: {
// //     display: 'none',
// //   },
// // }));

// // const MobileMenuButton = styled(IconButton)(({ theme }) => ({
// //   display: 'none',
// //   [theme.breakpoints.down('sm')]: {
// //     display: 'flex',
// //   },
// // }));

// // const NavButton = styled(Button)(({ theme }) => ({
// //   color: theme.palette.common.black,
// //   textTransform: 'none',
// //   fontWeight: 500,
// //   '&:hover': {
// //     backgroundColor: theme.palette.action.hover,
// //   },
// // }));

// // const TravelMenuButton = styled(Button)(({ theme }) => ({
// //   color: theme.palette.common.black,
// //   textTransform: 'none',
// //   fontWeight: 500,
// //   '&:hover': {
// //     backgroundColor: theme.palette.action.hover,
// //   },
// // }));

// // const ProfileContainer = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   borderRadius: '8px',
// //   cursor: 'pointer',
// //   '&:hover': {
// //     border: `0.5px solid ${theme.palette.primary.main}`,
// //     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
// //   },
// // }));

// // const LanguageButton = styled(Button)(({ theme }) => ({
// //   minWidth: 'auto',
// //   padding: '12px 12px',
// //   textTransform: 'uppercase',
// // }));

// // const Navbar = () => {
// //   const { t, i18n } = useTranslation();
// //   const currentScreen = useScreen();
// //   const theme = useTheme();
// //   const navigate = useNavigate();
// //   const { isAuth, user } = useAuthStore();
// //   const { userData, setUserData } = React.useContext(UserContext);

// //   // State برای منوها
// //   const [anchorEl, setAnchorEl] = React.useState(null);
// //   const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);
// //   const [languageMenuAnchor, setLanguageMenuAnchor] = React.useState(null);
// //   const [travelMenuAnchor, setTravelMenuAnchor] = React.useState(null);

// //   const open = Boolean(anchorEl);
// //   const mobileMenuOpen = Boolean(mobileMenuAnchor);
// //   const languageMenuOpen = Boolean(languageMenuAnchor);
// //   const travelMenuOpen = Boolean(travelMenuAnchor);

// //   // هندلرهای منو
// //   const changeLanguage = (lng) => {
// //     i18n.changeLanguage(lng);
// //     localStorage.setItem('language', lng);
// //     setLanguageMenuAnchor(null);
// //   };

// //   const openMenu = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const openMobileMenu = (event) => {
// //     setMobileMenuAnchor(event.currentTarget);
// //   };

// //   const openLanguageMenu = (event) => {
// //     setLanguageMenuAnchor(event.currentTarget);
// //   };

// //   const openTravelMenu = (event) => {
// //     setTravelMenuAnchor(event.currentTarget);
// //   };

// //   const closeMenu = () => {
// //     setAnchorEl(null);
// //     setMobileMenuAnchor(null);
// //     setLanguageMenuAnchor(null);
// //     setTravelMenuAnchor(null);
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       setUserData([{
// //         UserId: '',
// //         Username: '',
// //         CurrentDate: '',
// //         StartPlace: '',
// //         EndPlace: '',
// //         StartPlaceCode: '',
// //         EndPlaceCode: '',
// //         isLoading: true,
// //         Mobile: '',
// //         RequestNumber: '',
// //         Name: ''
// //       }]);

// //       localStorage.removeItem('storageData');
// //       localStorage.removeItem('UserId');
// //       localStorage.removeItem('Username');
// //       localStorage.removeItem('Token');

// //       window.location.replace('/');
// //     } catch (error) {
// //       toast.error(t('navbar.logoutError'), {
// //         position: 'top-center',
// //         duration: 3000,
// //       });
// //     }
// //     closeMenu();
// //   };

// //   return (
// //     <>
// //       <NavContainer>
// //         {/* بخش سمت چپ - لوگو و لینک‌ها */}
// //         <LeftSection>
// //           <Link to="/">
// //             <img src={Logo} alt="College-logo" width={currentScreen === 'xs' ? 100 : 138} />
// //           </Link>

// //           <NavLinksContainer>
// //             <NavButton onClick={() => navigate('/')}>{t('navbar.home')}</NavButton>
// //             <NavButton onClick={() => navigate('/about')}>{t('navbar.about')}</NavButton>
// //             <NavButton onClick={() => navigate('/MapList')}>{t('navbar.stations')}</NavButton>
            
// //             {/* منوی خدمات سفر برای دسکتاپ */}
// //             <TravelMenuButton
// //               id="travel-menu-button"
// //               aria-controls={travelMenuOpen ? 'travel-menu' : undefined}
// //               aria-haspopup="true"
// //               aria-expanded={travelMenuOpen ? 'true' : undefined}
// //               onClick={openTravelMenu}
// //             >
// //               {t('navbar2.travelServices')}
// //             </TravelMenuButton>
// //           </NavLinksContainer>

// //           <MobileMenuButton onClick={openMobileMenu}>
// //             <MenuIcon />
// //           </MobileMenuButton>
// //         </LeftSection>

// //         {/* بخش سمت راست - زبان و پروفایل */}
// //         <RightSection>
// //           {/* انتخاب زبان */}
// //           <LanguageButton
// //             onClick={openLanguageMenu}
// //             startIcon={<LanguageIcon sx={{ margin: 1 }} />}
// //             sx={{ textTransform: 'none' }}
// //           >
// //             {i18n.language.toUpperCase()}
// //           </LanguageButton>

// //           {isAuth ? (
// //             <Button 
// //               variant="outlined" 
// //               href={getGoogleOAuthURL()}
// //               startIcon={<img src={googleIcon} alt="google" width={20} />}
// //               sx={{
// //                 textTransform: 'none',
// //                 border: '1px solid rgba(66, 133, 244, 0.1)',
// //               }}
// //             >
// //               {t('navbar.loginWithGoogle')}
// //             </Button>
// //           ) : (
// //             <ProfileContainer
// //               onClick={openMenu}
// //               sx={{
// //                 border: currentScreen === 'xs' ? 'none' : '0.5px solid #4f4f4f',
// //                 padding: '0.5rem',
// //               }}
// //             >
// //               <Avatar
// //                 alt={user?.name}
// //                 src={user?.picture}
// //                 sx={{ width: 32, height: 32 }}
// //               />
// //               {currentScreen !== 'xs' && (
// //                 <Typography
// //                   variant="body1"
// //                   color={theme.palette.common.black}
// //                   padding="0 0.5rem"
// //                 >
// //                   {t('navbar.greeting', { name: user?.name || '' })}
// //                 </Typography>
// //               )}
// //               <ArrowDropDown />
// //             </ProfileContainer>
// //           )}
// //         </RightSection>
// //       </NavContainer>

// //       {/* منوی خدمات سفر برای دسکتاپ */}
// //       <Menu
// //         id="travel-menu"
// //         anchorEl={travelMenuAnchor}
// //         open={travelMenuOpen}
// //         onClose={closeMenu}
// //         MenuListProps={{
// //           'aria-labelledby': 'travel-menu-button',
// //         }}
// //       >
// //         <MenuItem onClick={() => { navigate('/'); closeMenu(); }}>
// //           {t('navbar2.busTicket')}
// //         </MenuItem>
// //         <MenuItem onClick={() => { navigate('/Taxi'); closeMenu(); }}>
// //           {t('navbar2.TaxiTicket')}
// //         </MenuItem>
// //         <MenuItem onClick={() => { navigate('/Taxi'); closeMenu(); }}>
// //           {t('navbar2.VanTicket')}
// //         </MenuItem>
// //         <MenuItem onClick={() => { navigate('/Taxi'); closeMenu(); }}>
// //           {t('navbar2.Cargo')}
// //         </MenuItem>
// //         {/* <MenuItem onClick={() => { navigate('/ride-tickets'); closeMenu(); }}>
// //           {t('navbar.rideTickets')}
// //         </MenuItem> */}
// //       </Menu>

// //       {/* منوی موبایل */}
// //       <Menu
// //         anchorEl={mobileMenuAnchor}
// //         open={mobileMenuOpen}
// //         onClose={closeMenu}
// //         PaperProps={{
// //           style: {
// //             width: '200px',
// //           },
// //         }}
// //       >
// //         <MenuItem onClick={() => { navigate('/'); closeMenu(); }}>
// //           {t('navbar.home')}
// //         </MenuItem>
// //         <MenuItem onClick={() => { navigate('/about'); closeMenu(); }}>
// //           {t('navbar.about')}
// //         </MenuItem>
// //         <MenuItem onClick={() => { navigate('/MapList'); closeMenu(); }}>
// //           {t('navbar.stations')}
// //         </MenuItem>
        
// //         {/* زیرمنوی خدمات سفر در موبایل */}
// //         <MenuItem onClick={openTravelMenu}>
// //           {t('navbar2.travelServices')}
// //           <ArrowDropDown />
// //         </MenuItem>
        
// //         <MenuItem onClick={openLanguageMenu}>
// //           {t('navbar.changeLanguage')}
// //         </MenuItem>
// //       </Menu>

// //       {/* منوی زبان */}
// //       <Menu
// //         anchorEl={languageMenuAnchor}
// //         open={languageMenuOpen}
// //         onClose={closeMenu}
// //       >
// //         <MenuItem onClick={() => changeLanguage('en')}>
// //           English (EN)
// //         </MenuItem>
// //         <MenuItem onClick={() => changeLanguage('fa')}>
// //           فارسی (FA)
// //         </MenuItem>
// //         <MenuItem onClick={() => changeLanguage('ru')}>
// //           Русский (RU)
// //         </MenuItem>
// //         <MenuItem onClick={() => changeLanguage('ar')}>
// //           العربية (AR)
// //         </MenuItem>
// //         <MenuItem onClick={() => changeLanguage('pa')}>
// //           پښتو (PA)
// //         </MenuItem>
// //       </Menu>

// //       {/* منوی پروفایل */}
// //       <Menu
// //         anchorEl={anchorEl}
// //         open={open}
// //         onClose={closeMenu}
// //       >
// //         <MenuItem onClick={() => { navigate('/profile'); closeMenu(); }}>
// //           {t('navbar.profile')}
// //         </MenuItem>
// //         {userData[0]?.Token ? (
// //           <MenuItem onClick={handleLogout}>{t('navbar.logout')}</MenuItem>
// //         ) : (
// //           <MenuItem onClick={() => { navigate('/profile'); closeMenu(); }}>
// //             {t('navbar.login')}
// //           </MenuItem>
// //         )}
// //       </Menu>

// //       <Toaster position="top-center" />
// //     </>
// //   );
// // };

// // export default Navbar;

// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { 
//   Avatar,
//   Box,
//   Button,
//   IconButton,
//   Menu,
//   MenuItem,
//   Typography,
//   styled,
//   useTheme
// } from '@mui/material';
// import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
// import MenuIcon from '@mui/icons-material/Menu';
// import LanguageIcon from '@mui/icons-material/Language';
// import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
// import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
// import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import { Link, useNavigate } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import Logo from '../../assets/iiitdmj-logo.png';
// import googleIcon from '../../assets/googleIcon.svg';
// import { useScreen } from '../../customHooks/useScreen';
// import { useAuthStore } from '../../store/authStore';
// import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
// import UserContext from '../../UserContext';
// import getTheme from '../../theme';

// // استایل‌های کامپوننت
// const NavContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   backgroundColor: 'rgba(1, 166, 147, 0.2)',
//   borderRadius: 5,
//   border: '0.5px solid gray',
//   padding: 8,
//   [theme.breakpoints.down('sm')]: {
//     flexDirection: 'column',
//     gap: '1rem',
//     padding: '1rem',
//   },
// }));

// const LeftSection = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '1rem',
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     justifyContent: 'space-between',
//   },
// }));

// const RightSection = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '1.5rem',
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     justifyContent: 'flex-end',
//   },
// }));

// const NavLinksContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '1.5rem',
//   [theme.breakpoints.down('sm')]: {
//     display: 'none',
//   },
// }));

// const MobileMenuButton = styled(IconButton)(({ theme }) => ({
//   display: 'none',
//   [theme.breakpoints.down('sm')]: {
//     display: 'flex',
//   },
// }));

// const NavButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.common.black,
//   textTransform: 'none',
//   fontWeight: 500,
//   '&:hover': {
//     backgroundColor: theme.palette.action.hover,
//   },
// }));

// const TravelMenuButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.common.black,
//   textTransform: 'none',
//   fontWeight: 500,
//   '&:hover': {
//     backgroundColor: theme.palette.action.hover,
//   },
// }));

// const ProfileContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   borderRadius: '8px',
//   cursor: 'pointer',
//   '&:hover': {
//     border: `0.5px solid ${theme.palette.primary.main}`,
//     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
//   },
// }));

// const LanguageButton = styled(Button)(({ theme }) => ({
//   minWidth: 'auto',
//   padding: '12px 12px',
//   textTransform: 'uppercase',
// }));

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const currentScreen = useScreen();
  
//  const theme = getTheme(i18n.language);
//   const navigate = useNavigate();
//   const { isAuth, user } = useAuthStore();
//   const { userData, setUserData } = React.useContext(UserContext);

//   // State برای منوها
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);
//   const [languageMenuAnchor, setLanguageMenuAnchor] = React.useState(null);
//   const [travelMenuAnchor, setTravelMenuAnchor] = React.useState(null);

//   const open = Boolean(anchorEl);
//   const mobileMenuOpen = Boolean(mobileMenuAnchor);
//   const languageMenuOpen = Boolean(languageMenuAnchor);
//   const travelMenuOpen = Boolean(travelMenuAnchor);

//   // هندلرهای منو
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     localStorage.setItem('language', lng);
//     setLanguageMenuAnchor(null);
//   };

//   const openMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const openMobileMenu = (event) => {
//     setMobileMenuAnchor(event.currentTarget);
//   };

//   const openLanguageMenu = (event) => {
//     setLanguageMenuAnchor(event.currentTarget);
//   };

//   const openTravelMenu = (event) => {
//     setTravelMenuAnchor(event.currentTarget);
//   };

//   const closeMenu = () => {
//     setAnchorEl(null);
//     setMobileMenuAnchor(null);
//     setLanguageMenuAnchor(null);
//     setTravelMenuAnchor(null);
//   };

//   const handleLogout = async () => {
//     try {
//       setUserData([{
//         UserId: '',
//         Username: '',
//         CurrentDate: '',
//         StartPlace: '',
//         EndPlace: '',
//         StartPlaceCode: '',
//         EndPlaceCode: '',
//         isLoading: true,
//         Mobile: '',
//         RequestNumber: '',
//         Name: ''
//       }]);

//       localStorage.removeItem('storageData');
//       localStorage.removeItem('UserId');
//       localStorage.removeItem('Username');
//       localStorage.removeItem('Token');

//       window.location.replace('/');
//     } catch (error) {
//       toast.error(t('navbar.logoutError'), {
//         position: 'top-center',
//         duration: 3000,
//       });
//     }
//     closeMenu();
//   };

//   return (
//     <>
//       <NavContainer>
//         {/* بخش سمت چپ - لوگو و لینک‌ها */}
//         <LeftSection>
//           <Link to="/">
//             <img src={Logo} alt="College-logo" width={currentScreen === 'xs' ? 100 : 138} />
//           </Link>

//           <NavLinksContainer>
//             <NavButton onClick={() => navigate('/')}>{t('navbar.home')}</NavButton>
//             <NavButton onClick={() => navigate('/about')}>{t('navbar.about')}</NavButton>
//             <NavButton onClick={() => navigate('/MapList')}>{t('navbar.stations')}</NavButton>
            
//             {/* منوی خدمات سفر برای دسکتاپ */}
//             <TravelMenuButton
//               id="travel-menu-button"
//               aria-controls={travelMenuOpen ? 'travel-menu' : undefined}
//               aria-haspopup="true"
//               aria-expanded={travelMenuOpen ? 'true' : undefined}
//               onClick={openTravelMenu}
//               endIcon={<ArrowDropDown />}
//             >
//               {t('navbar2.travelServices')}
//             </TravelMenuButton>
//           </NavLinksContainer>

//           <MobileMenuButton onClick={openMobileMenu}>
//             <MenuIcon />
//           </MobileMenuButton>
//         </LeftSection>

//         {/* بخش سمت راست - زبان و پروفایل */}
//         <RightSection>
//           {/* انتخاب زبان */}
//           <LanguageButton
//             onClick={openLanguageMenu}
//             startIcon={<LanguageIcon sx={{ margin: 1 }} />}
//             sx={{ textTransform: 'none' }}
//           >
//             {i18n.language.toUpperCase()}
//           </LanguageButton>

//           {isAuth ? (
//             <Button 
//               variant="outlined" 
//               href={getGoogleOAuthURL()}
//               startIcon={<img src={googleIcon} alt="google" width={20} />}
//               sx={{
//                 textTransform: 'none',
//                 border: '1px solid rgba(66, 133, 244, 0.1)',
//               }}
//             >
//               {t('navbar.loginWithGoogle')}
//             </Button>
//           ) : (
//             <ProfileContainer
//               onClick={openMenu}
//               sx={{
//                 border: currentScreen === 'xs' ? 'none' : '0.5px solid #4f4f4f',
//                 padding: '0.5rem',
//               }}
//             >
//               <Avatar
//                 alt={user?.name}
//                 src={user?.picture}
//                 sx={{ width: 32, height: 32 }}
//               />
//               {currentScreen !== 'xs' && (
//                 <Typography
//                   variant="body1"
//                   color={theme.palette.common.black}
//                   padding="0 0.5rem"
//                 >
//                   {t('navbar.greeting', { name: user?.name || '' })}
//                 </Typography>
//               )}
//               <ArrowDropDown />
//             </ProfileContainer>
//           )}
//         </RightSection>
//       </NavContainer>

//       {/* منوی خدمات سفر برای دسکتاپ */}
//       <Menu
//         id="travel-menu"
//         anchorEl={travelMenuAnchor}
//         open={travelMenuOpen}
//         onClose={closeMenu}
//         MenuListProps={{
//           'aria-labelledby': 'travel-menu-button',
//         }}
//       >
//         <MenuItem 
//           onClick={() => { navigate('/'); closeMenu(); }}
//           sx={{ gap: 2 }}
//         >
//           <DirectionsBusIcon color="primary" />
//           {t('navbar2.busTicket')}
//         </MenuItem>
//         <MenuItem 
//           onClick={() => { navigate('/taxi-tickets'); closeMenu(); }}
//           sx={{ gap: 2 }}
//         >
//           <LocalTaxiIcon color="primary" />
//           {t('navbar2.TaxiTicket')}
//         </MenuItem>
//         <MenuItem 
//           onClick={() => { navigate('/van-tickets'); closeMenu(); }}
//           sx={{ gap: 2 }}
//         >
//           <AirlineSeatReclineExtraIcon color="primary" />
//           {t('navbar2.VanTicket')}
//         </MenuItem>
//         <MenuItem 
//           onClick={() => { navigate('/cargo-services'); closeMenu(); }}
//           sx={{ gap: 2 }}
//         >
//           <LocalShippingIcon color="primary" />
//           {t('navbar2.Cargo')}
//         </MenuItem>
//       </Menu>

//       {/* منوی موبایل */}
//       <Menu
//         anchorEl={mobileMenuAnchor}
//         open={mobileMenuOpen}
//         onClose={closeMenu}
//         PaperProps={{
//           style: {
//             width: '200px',
//           },
//         }}
//       >
//         <MenuItem onClick={() => { navigate('/'); closeMenu(); }}>
//           {t('navbar.home')}
//         </MenuItem>
//         <MenuItem onClick={() => { navigate('/about'); closeMenu(); }}>
//           {t('navbar.about')}
//         </MenuItem>
//         <MenuItem onClick={() => { navigate('/MapList'); closeMenu(); }}>
//           {t('navbar.stations')}
//         </MenuItem>
        
//         {/* زیرمنوی خدمات سفر در موبایل */}
//         <MenuItem onClick={openTravelMenu}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
//             <DirectionsBusIcon color="primary" />
//             {t('navbar2.travelServices')}
//             <ArrowDropDown sx={{ marginLeft: 'auto' }} />
//           </Box>
//         </MenuItem>
        
//         <MenuItem onClick={openLanguageMenu}>
//           {t('navbar.changeLanguage')}
//         </MenuItem>
//       </Menu>

//       {/* منوی زبان */}
//       <Menu
//         anchorEl={languageMenuAnchor}
//         open={languageMenuOpen}
//         onClose={closeMenu}
//       >
//         <MenuItem onClick={() => {changeLanguage('en') 
//            window.location.reload()} }>
//           English (EN)
//         </MenuItem>
//         <MenuItem onClick={() => {changeLanguage('fa')  
//           window.location.reload()} }>
//           فارسی (FA)
//         </MenuItem>
//         <MenuItem onClick={() => {changeLanguage('ru') 
//            window.location.reload()} 
//         }>
//           Русский (RU)
//         </MenuItem>
//         <MenuItem onClick={() => {changeLanguage('ar') 
//            window.location.reload()} 
//         }>
//           العربية (AR)
//         </MenuItem>
//         <MenuItem onClick={() => {changeLanguage('pa') 
//            window.location.reload()} 
//         }>
//           پښتو (PA)
//         </MenuItem>
//       </Menu>

//       {/* منوی پروفایل */}
//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={closeMenu}
//       >
//         <MenuItem onClick={() => { navigate('/profile'); closeMenu(); }}>
//           {t('navbar.profile')}
//         </MenuItem>
//         {userData[0]?.Token ? (
//           <MenuItem onClick={handleLogout}>{t('navbar.logout')}</MenuItem>
//         ) : (
//           <MenuItem onClick={() => { navigate('/profile'); closeMenu(); }}>
//             {t('navbar.login')}
//           </MenuItem>
//         )}
//       </Menu>

//       <Toaster position="top-center" />
//     </>
//   );
// };

// export default Navbar;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  styled,
  useTheme
} from '@mui/material';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Logo from '../../assets/iiitdmj-logo.png';
import googleIcon from '../../assets/googleIcon.svg';
import { useScreen } from '../../customHooks/useScreen';
import { useAuthStore } from '../../store/authStore';
import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
import UserContext from '../../UserContext';
import getTheme from '../../theme';

// Styled Components
const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgba(1, 166, 147, 0.2)',
  borderRadius: 5,
  border: '0.5px solid gray',
  padding: 8,
  fontFamily: theme.typography.fontFamily, // Set fontFamily here
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem',
  },
}));

const LeftSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  fontFamily: theme.typography.fontFamily,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'space-between',
  },
}));

const RightSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  fontFamily: theme.typography.fontFamily,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'flex-end',
  },
}));

const NavLinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  fontFamily: theme.typography.fontFamily,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  fontFamily: theme.typography.fontFamily,
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.black,
  textTransform: 'none',
  fontWeight: 500,
  fontFamily: theme.typography.fontFamily,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const TravelMenuButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.black,
  textTransform: 'none',
  fontWeight: 500,
  fontFamily: theme.typography.fontFamily,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  cursor: 'pointer',
  fontFamily: theme.typography.fontFamily,
  '&:hover': {
    border: `0.5px solid ${theme.palette.primary.main}`,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
  },
}));

const LanguageButton = styled(Button)(({ theme }) => ({
  minWidth: 'auto',
  padding: '12px 12px',
  textTransform: 'uppercase',
  fontFamily: theme.typography.fontFamily,
}));

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentScreen = useScreen();
  const theme = getTheme(i18n.language); // Get the theme based on current language
  const navigate = useNavigate();
  const { isAuth, user } = useAuthStore();
  const { userData, setUserData } = React.useContext(UserContext);

  // State for menus
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);
  const [languageMenuAnchor, setLanguageMenuAnchor] = React.useState(null);
  const [travelMenuAnchor, setTravelMenuAnchor] = React.useState(null);

  const open = Boolean(anchorEl);
  const mobileMenuOpen = Boolean(mobileMenuAnchor);
  const languageMenuOpen = Boolean(languageMenuAnchor);
  const travelMenuOpen = Boolean(travelMenuAnchor);

  // Menu handlers
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setLanguageMenuAnchor(null);
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openMobileMenu = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const openLanguageMenu = (event) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const openTravelMenu = (event) => {
    setTravelMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setMobileMenuAnchor(null);
    setLanguageMenuAnchor(null);
    setTravelMenuAnchor(null);
  };

  const handleLogout = async () => {
    try {
      setUserData([{
        UserId: '',
        Username: '',
        CurrentDate: '',
        StartPlace: '',
        EndPlace: '',
        StartPlaceCode: '',
        EndPlaceCode: '',
        isLoading: true,
        Mobile: '',
        RequestNumber: '',
        Name: ''
      }]);

      localStorage.removeItem('storageData');
      localStorage.removeItem('UserId');
      localStorage.removeItem('Username');
      localStorage.removeItem('Token');

      window.location.replace('/');
    } catch (error) {
      toast.error(t('navbar.logoutError'), {
        position: 'top-center',
        duration: 3000,
      });
    }
    closeMenu();
  };

  return (
    <>
      <NavContainer>
        {/* Left Section - Logo and Links */}
        <LeftSection>
          <Link to="/">
            <img src={Logo} alt="College-logo" width={currentScreen === 'xs' ? 100 : 138} />
          </Link>

          <NavLinksContainer>
            <NavButton onClick={() => navigate('/')}  sx={{ fontFamily: theme.typography.fontFamily }}>{t('navbar.home')}</NavButton>
            <NavButton onClick={() => navigate('/about')}  sx={{ fontFamily: theme.typography.fontFamily }}>{t('navbar.about')}</NavButton>
            <NavButton onClick={() => navigate('/MapList')}  sx={{ fontFamily: theme.typography.fontFamily }}>{t('navbar.stations')}</NavButton>
            
            {/* Travel Services Menu for Desktop */}
            <TravelMenuButton
              id="travel-menu-button"
              aria-controls={travelMenuOpen ? 'travel-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={travelMenuOpen ? 'true' : undefined}
              onClick={openTravelMenu}
              endIcon={<ArrowDropDown />}
               sx={{ fontFamily: theme.typography.fontFamily }}
            >
              {t('navbar2.travelServices')}
            </TravelMenuButton>
          </NavLinksContainer>

          <MobileMenuButton onClick={openMobileMenu}  sx={{ fontFamily: theme.typography.fontFamily }}>
            <MenuIcon />
          </MobileMenuButton>
        </LeftSection>

        {/* Right Section - Language and Profile */}
        <RightSection>
          {/* Language Selector */}
          <LanguageButton
            onClick={openLanguageMenu}
            startIcon={<LanguageIcon sx={{ margin: 1 }} />}
            sx={{ textTransform: 'none' }}
          >
            {i18n.language.toUpperCase()}
          </LanguageButton>

          {isAuth ? (
            <Button 
              variant="outlined" 
              href={getGoogleOAuthURL()}
              startIcon={<img src={googleIcon} alt="google" width={20} />}
              sx={{
                textTransform: 'none',
                border: '1px solid rgba(66, 133, 244, 0.1)',
              }}
            >
              {t('navbar.loginWithGoogle')}
            </Button>
          ) : (
            <ProfileContainer
              onClick={openMenu}
              sx={{
                border: currentScreen === 'xs' ? 'none' : '0.5px solid #4f4f4f',
                padding: '0.5rem',
              }}
            >
              <Avatar
                alt={user?.name}
                src={user?.picture}
                sx={{ width: 32, height: 32 }}
              />
              {currentScreen !== 'xs' && (
                <Typography
                  variant="body1"
                  color={theme.palette.common.black}
                  padding="0 0.5rem"
                >
                  {t('navbar.greeting', { name: user?.name || '' })}
                </Typography>
              )}
              <ArrowDropDown />
            </ProfileContainer>
          )}
        </RightSection>
      </NavContainer>

      {/* Travel Menu for Desktop */}
      <Menu
        id="travel-menu"
        anchorEl={travelMenuAnchor}
        open={travelMenuOpen}
        onClose={closeMenu}
        MenuListProps={{
          'aria-labelledby': 'travel-menu-button',
        }}
         sx={{ fontFamily: theme.typography.fontFamily }}
      >
        <MenuItem 
          onClick={() => { navigate('/'); closeMenu(); }} 
          sx={{ fontFamily: theme.typography.fontFamily, gap: 2 }} // Set fontFamily here
        >
          <DirectionsBusIcon color="primary" />
          {t('navbar2.busTicket')}
        </MenuItem>
        <MenuItem 
          onClick={() => { navigate('/taxi-tickets'); closeMenu(); }} 
          sx={{ fontFamily: theme.typography.fontFamily, gap: 2 }} // Set fontFamily here
        >
          <LocalTaxiIcon color="primary" />
          {t('navbar2.TaxiTicket')}
        </MenuItem>
        <MenuItem 
          onClick={() => { navigate('/van-tickets'); closeMenu(); }} 
          sx={{ fontFamily: theme.typography.fontFamily, gap: 2 }} // Set fontFamily here
        >
          <AirlineSeatReclineExtraIcon color="primary" />
          {t('navbar2.VanTicket')}
        </MenuItem>
        <MenuItem 
          onClick={() => { navigate('/cargo-services'); closeMenu(); }} 
          sx={{ fontFamily: theme.typography.fontFamily, gap: 2 }} // Set fontFamily here
        >
          <LocalShippingIcon color="primary" />
          {t('navbar2.Cargo')}
        </MenuItem>
      </Menu>

      {/* Mobile Menu */}
      <Menu
        anchorEl={mobileMenuAnchor}
        open={mobileMenuOpen}
        onClose={closeMenu}
        PaperProps={{
          style: {
            width: '200px',
          },
        }}
        sx={{ fontFamily: theme.typography.fontFamily }}
      >
        <MenuItem onClick={() => { navigate('/'); closeMenu(); }}  sx={{ fontFamily: theme.typography.fontFamily }}>
          {t('navbar.home')}
        </MenuItem>
        <MenuItem onClick={() => { navigate('/about'); closeMenu(); }}  sx={{ fontFamily: theme.typography.fontFamily }}>
          {t('navbar.about')}
        </MenuItem>
        <MenuItem onClick={() => { navigate('/MapList'); closeMenu(); }}  sx={{ fontFamily: theme.typography.fontFamily }}>
          {t('navbar.stations')}
        </MenuItem>
        
        {/* Sub-Menu for Travel Services in Mobile */}
        <MenuItem onClick={openTravelMenu}  sx={{ fontFamily: theme.typography.fontFamily }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }} >
            <DirectionsBusIcon color="primary" />
            {t('navbar2.travelServices')}
            <ArrowDropDown sx={{ marginLeft: 'auto' }} />
          </Box>
        </MenuItem>
        
        <MenuItem onClick={openLanguageMenu}  sx={{ fontFamily: theme.typography.fontFamily }}>
          {t('navbar.changeLanguage')}
        </MenuItem>
      </Menu>

      {/* Language Menu */}
      <Menu
        anchorEl={languageMenuAnchor}
        open={languageMenuOpen}
        onClose={closeMenu}
      >
        <MenuItem onClick={() => {changeLanguage('en') 
           window.location.reload()} }  sx={{ fontFamily: theme.typography.fontFamily }}>
          English (EN)
        </MenuItem>
        <MenuItem onClick={() => {changeLanguage('fa') 
          window.location.reload()} }  sx={{ fontFamily: theme.typography.fontFamily }}>
          فارسی (FA)
        </MenuItem>
        <MenuItem onClick={() => {changeLanguage('ru') 
           window.location.reload()} }  sx={{ fontFamily: theme.typography.fontFamily }}>
          Русский (RU)
        </MenuItem>
        <MenuItem onClick={() => {changeLanguage('ar') 
           window.location.reload()} }  sx={{ fontFamily: theme.typography.fontFamily }}>
          العربية (AR)
        </MenuItem>
        <MenuItem onClick={() => {changeLanguage('pa') 
           window.location.reload()} }  sx={{ fontFamily: theme.typography.fontFamily }}>
          پښتو (PA)
        </MenuItem>
      </Menu>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
         sx={{ fontFamily: theme.typography.fontFamily }}
      >
        <MenuItem onClick={() => { navigate('/profile'); closeMenu(); }}  sx={{ fontFamily: theme.typography.fontFamily }}>
          {t('navbar.profile')}
        </MenuItem>
        {userData[0]?.Token ? (
          <MenuItem onClick={handleLogout}  sx={{ fontFamily: theme.typography.fontFamily }}>{t('navbar.logout')}</MenuItem>
        ) : (
          <MenuItem onClick={() => { navigate('/profile'); closeMenu(); }}  sx={{ fontFamily: theme.typography.fontFamily }}>
            {t('navbar.login')}
          </MenuItem>
        )}
      </Menu>

      <Toaster position="top-center" />
    </>
  );
};

export default Navbar;