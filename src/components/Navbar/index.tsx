// // // // // import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
// // // // // import {
// // // // //   Avatar,
// // // // //   Box,
// // // // //   Button,
// // // // //   IconButton,
// // // // //   Menu,
// // // // //   MenuItem,
// // // // //   Stack,
// // // // //   Typography,
// // // // //   styled,
// // // // //   useTheme,
// // // // // } from '@mui/material';
// // // // // import UserContext from './../../UserContext';
// // // // // import axios from 'axios';
// // // // // import React, {useRef} from 'react';
// // // // // import toast, {Toaster} from 'react-hot-toast';
// // // // // import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom';
// // // // // import googleIcon from '../../assets/googleIcon.svg';
// // // // // import helpIcon from '../../assets/helpIcon.svg';
// // // // // import {useScreen} from '../../customHooks/useScreen';
// // // // // import {useAuthStore} from '../../store/authStore';
// // // // // import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
// // // // // import Logo from '../../assets/iiitdmj-logo.png';

// // // // // const NavContainer = styled(Box)`
// // // // //   display: flex;
// // // // //   justify-content: space-between;
// // // // //   align-items: center;
// // // // // `;

// // // // // const HelpButton = styled(Box)`
// // // // //   align-items: center;
// // // // //   gap: 5px;
// // // // //   cursor: pointer;
// // // // // `;

// // // // // const ManageButton = styled(Box)`
// // // // //   display: flex;
// // // // //   align-items: center;
// // // // //   border-radius: 8px;
// // // // //   background-color: #fbbc05;
// // // // //   padding: 0.3rem 0.8rem 0.3rem 0.8rem;
// // // // //   border: 4px solid #fbbc05;
// // // // //   cursor: pointer;

// // // // //   &:hover {
// // // // //     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
// // // // //   }
// // // // // `;

// // // // // const GoogleButton = styled(Button)`
// // // // //   display: flex;
// // // // //   align-items: center;
// // // // //   gap: 1rem;
// // // // //   text-transform: none;
// // // // //   border: 4px solid rgba(66, 133, 244, 0.1);
// // // // //   border-radius: 8px;

// // // // //   &:hover {
// // // // //     border: 4px solid rgba(66, 133, 244, 0.1);
// // // // //     background-color: #fff;
// // // // //   }
// // // // // `;

// // // // // const ProfileContainer = styled(Box)`
// // // // //   display: flex;
// // // // //   align-items: center;
// // // // //   border-radius: 8px;
// // // // //   cursor: pointer;
// // // // //   &:hover {
// // // // //     border: 0.5px solid ${({theme}) => theme.palette.primary.main};
// // // // //     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
// // // // //   }
// // // // // `;

// // // // // const LinkContainer = styled(Link)`
// // // // //   text-decoration: none;
// // // // //   color: inherit;
// // // // // `;

// // // // // export default function Navbar() {
// // // // //   const currentScreen = useScreen();
// // // // //   const theme = useTheme();
// // // // //   const navigate = useNavigate();
// // // // //   const {isAuth, user, setIsAuth, setUser} = useAuthStore();
// // // // //   const { userData, setUserData } = React.useContext(UserContext);

// // // // //   const location = useLocation();

// // // // //   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
// // // // //   const open = Boolean(anchorEl);

// // // // //   const openmenu = (event: React.MouseEvent<HTMLDivElement>) => {
// // // // //     setAnchorEl(event.currentTarget);
// // // // //   };

// // // // //   const closeMenu = async (
// // // // //     event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
// // // // //   ) => {
// // // // //     event.stopPropagation();
// // // // //     setAnchorEl(null);
// // // // //   };

// // // // //   const handleLogout = async () => {
// // // // //     try {
// // // // //       // const response = await axios.get(
// // // // //       //   `${import.meta.env.VITE_SERVER_URL}/auth/logout`,
// // // // //       //   {
// // // // //       //     withCredentials: true,
// // // // //       //   }
// // // // //       // );

// // // // //       // if (response.status === 200) {
// // // // //       //   setIsAuth(false);
// // // // //       //   setUser(null);
// // // // //       //   window.location.replace('/');
// // // // //       // }

// // // // //       setUserData([{
// // // // //         UserId: '',
// // // // //         Username: '',
// // // // //         CurrentDate: '',
// // // // //         StartPlace: '',
// // // // //         EndPlace: '',
// // // // //         StartPlaceCode: '',
// // // // //         EndPlaceCode: '',
// // // // //         isLoading: true,
// // // // //         Mobile: '',
// // // // //         // Token: '',
// // // // //         RequestNumber: '',
// // // // //         Name: ''
// // // // //     }]);

// // // // //       // Clear user data from local storage
// // // // //       localStorage.removeItem('storageData');
// // // // //       localStorage.removeItem('UserId');
// // // // //       localStorage.removeItem('Username');
// // // // //        localStorage.removeItem('Token');

// // // // //       // Redirect to the login page
// // // // //       window.location.replace('/');
// // // // //     } catch (error) {
// // // // //       toast.error('Logout failed. Please try again', {
// // // // //         position: 'top-center',
// // // // //         duration: 3000,
// // // // //       });
// // // // //     }
// // // // //     setAnchorEl(null);
// // // // //   };

// // // // //   const profile_container = useRef<HTMLDivElement | null>(null);

// // // // //   return (
// // // // //     <NavContainer style={{backgroundColor:'rgba(1, 166, 147,0.2)',borderRadius:5,borderWidth:0.5,borderColor:'gray',padding:5}}>
// // // // //       {location.pathname.startsWith('/admin') && user?.role === 'admin' ? (
// // // // //         <Stack>
// // // // //           <Typography
// // // // //             variant="h1"
// // // // //             color={theme.palette.text.primary}
// // // // //             fontSize={{xs: '1.5rem', md: '2.5rem'}}
// // // // //           >
// // // // //             Manage Buses
// // // // //           </Typography>
// // // // //           <Typography
// // // // //             paddingTop={{sm: 0, md: 2}}
// // // // //             variant="h6"
// // // // //             color={theme.palette.secondary.light}
// // // // //           >
// // // // //             {new Date().toLocaleDateString('en-UK', {
// // // // //               weekday: 'long',
// // // // //               day: 'numeric',
// // // // //               month: 'long',
// // // // //               year: 'numeric',
// // // // //             })}
// // // // //           </Typography>
// // // // //         </Stack>
// // // // //       ) : (
// // // // //         <Typography
// // // // //           variant="h1"
// // // // //           color={theme.palette.primary.main}
// // // // //           fontSize={{xs: '1.25rem', md: '2.5rem'}}
// // // // //         >
// // // // //           <LinkContainer
// // // // //             to="/"
// // // // //             style={{textDecoration: 'none', color: '#117ef5'}}
// // // // //           >
// // // // //           <img src={Logo} alt="College-logo" width={138} />
// // // // //           </LinkContainer>
// // // // //         </Typography>
// // // // //       )}
// // // // //       <Box
// // // // //         sx={{
// // // // //           display: 'flex',
// // // // //           alignItems: 'center',
// // // // //           gap: '1.5rem',
// // // // //         }}
// // // // //       >
// // // // //           <HelpButton display={{xs: 'none', md: 'flex'}} onClick={()=>{
// // // // //             navigate('/')
// // // // //           }}>

// // // // //           <Typography variant='h7' color={'black'} 
// // // // //             fontFamily={theme.typography.fontFamily}>
// // // // //             Home
// // // // //           </Typography>
// // // // //         </HelpButton>

// // // // //               <HelpButton display={{xs: 'none', md: 'flex'}} onClick={()=>{
// // // // //             navigate('/about')
// // // // //           }}>

// // // // //          <Typography variant='h7' color={'black'} 
// // // // //             fontFamily={theme.typography.fontFamily}>
// // // // //             About Us
// // // // //           </Typography>
// // // // //         </HelpButton>

// // // // //           <HelpButton display={{xs: 'none', md: 'flex'}} onClick={()=>{
// // // // //             navigate('/MapList')
// // // // //           }}>

// // // // //            <Typography variant='h7' color={'black'} 
// // // // //             fontFamily={theme.typography.fontFamily}>
// // // // //              Stations
// // // // //           </Typography>
// // // // //         </HelpButton>
// // // // //         {/* <HelpButton display={{xs: 'none', md: 'flex'}}>
// // // // //           <img src={helpIcon} alt="help" />
// // // // //           <Typography variant="h6" color={theme.palette.common.black}>
// // // // //             Help
// // // // //           </Typography>
// // // // //         </HelpButton> */}

// // // // //         {isAuth ? (
// // // // //           <GoogleButton variant="outlined" href={getGoogleOAuthURL()}>
// // // // //             <img src={googleIcon} alt="google" />
// // // // //             <Typography variant="h6" color={theme.palette.common.black}>
// // // // //               Login with Google
// // // // //             </Typography>
// // // // //           </GoogleButton>
// // // // //         ) : (
// // // // //           <ProfileContainer
// // // // //             id="basic-button"
// // // // //             aria-controls={open ? 'basic-menu' : undefined}
// // // // //             aria-haspopup="true"
// // // // //             aria-expanded={open ? 'true' : undefined}
// // // // //             onClick={openmenu}
// // // // //             sx={{
// // // // //               cursor: 'pointer',
// // // // //               border: currentScreen === 'xs' ? 'none' : '0.5px solid #4f4f4f',
// // // // //             }}
// // // // //             ref={profile_container}
// // // // //           >
// // // // //             {currentScreen === 'xs' ? (
// // // // //               <IconButton>
// // // // //                 <Avatar
// // // // //                   alt={user?.name}
// // // // //                   src={user?.picture}
// // // // //                   sx={{width: '1.8rem', height: '1.8rem'}}
// // // // //                 />
// // // // //                 {<ArrowDropDown />}
// // // // //               </IconButton>
// // // // //             ) : (
// // // // //               <>
// // // // //                 <Avatar
// // // // //                   alt={user?.name}
// // // // //                   src={user?.picture}
// // // // //                   sx={{width: '1.5rem', height: '1.5rem', marginLeft: '.5em'}}
// // // // //                 />
// // // // //                 <Typography
// // // // //                   variant="h6"
// // // // //                   color={theme.palette.common.black}
// // // // //                   padding="0.5rem 1rem"
// // // // //                   textTransform={'none'}
// // // // //                 >
// // // // //                   Hi, {user?.name}!
// // // // //                 </Typography>
// // // // //               </>
// // // // //             )}

// // // // //             <Menu
// // // // //               id="basic-menu"
// // // // //               anchorEl={anchorEl}
// // // // //               open={open}
// // // // //               onClose={closeMenu}
// // // // //               MenuListProps={{
// // // // //                 'aria-labelledby': 'basic-button',
// // // // //                 style: {
// // // // //                   width:
// // // // //                     currentScreen === 'xs'
// // // // //                       ? 130
// // // // //                       : profile_container.current?.offsetWidth || 0,
// // // // //                 },
// // // // //               }}
// // // // //             >
// // // // //               <MenuItem>
// // // // //                 <LinkContainer to="/profile">Profile</LinkContainer>
// // // // //               </MenuItem>
// // // // //               <MenuItem onClick={handleLogout}>
// // // // //               { userData[0].Token &&
// // // // //                 <LinkContainer to="#">Logout</LinkContainer>
// // // // //                 // :
// // // // //                 // <LinkContainer to="/bus-schedule">Login</LinkContainer>

// // // // //               }
// // // // //               </MenuItem>
// // // // //             </Menu>
// // // // //           </ProfileContainer>
// // // // //         )}

// // // // //         {!location.pathname.startsWith('/admin') && user?.role === 'admin' ? (
// // // // //           currentScreen === 'lg' || currentScreen === 'xl' ? (
// // // // //             <ManageButton>
// // // // //               <Typography variant="h6" color={theme.palette.common.black}>
// // // // //                 Manage Buses
// // // // //               </Typography>
// // // // //             </ManageButton>
// // // // //           ) : (
// // // // //             <></>
// // // // //           )
// // // // //         ) : (
// // // // //           <></>
// // // // //         )}
// // // // //       </Box>
// // // // //       <Toaster position="top-center" />
// // // // //     </NavContainer>
// // // // //   );
// // // // // }


// // // // import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
// // // // import {
// // // //   Avatar,
// // // //   Box,
// // // //   Button,
// // // //   IconButton,
// // // //   Menu,
// // // //   MenuItem,
// // // //   Stack,
// // // //   Typography,
// // // //   styled,
// // // //   useTheme,
// // // // } from '@mui/material';
// // // // import UserContext from './../../UserContext';
// // // // import axios from 'axios';
// // // // import React, {useRef} from 'react';
// // // // import toast, {Toaster} from 'react-hot-toast';
// // // // import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom';
// // // // import googleIcon from '../../assets/googleIcon.svg';
// // // // import helpIcon from '../../assets/helpIcon.svg';
// // // // import {useScreen} from '../../customHooks/useScreen';
// // // // import {useAuthStore} from '../../store/authStore';
// // // // import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
// // // // import Logo from '../../assets/iiitdmj-logo.png';

// // // // const NavContainer = styled(Box)(({ theme }) => ({
// // // //   display: 'flex',
// // // //   justifyContent: 'space-between',
// // // //   alignItems: 'center',
// // // //   backgroundColor: 'rgba(1, 166, 147, 0.2)',
// // // //   borderRadius: 5,
// // // //   border: '0.5px solid gray',
// // // //   padding: 8,
// // // //   [theme.breakpoints.down('sm')]: {
// // // //     flexDirection: 'column',
// // // //     gap: '1rem',
// // // //     padding: '1rem',
// // // //   },
// // // // }));

// // // // const HelpButton = styled(Box)(({ theme }) => ({
// // // //   display: 'flex',
// // // //   alignItems: 'center',
// // // //   gap: '5px',
// // // //   cursor: 'pointer',
// // // //   padding: '8px 12px',
// // // //   borderRadius: '4px',
// // // //   '&:hover': {
// // // //     backgroundColor: theme.palette.action.hover,
// // // //   },
// // // // }));

// // // // const ManageButton = styled(Box)(({ theme }) => ({
// // // //   display: 'flex',
// // // //   alignItems: 'center',
// // // //   borderRadius: '8px',
// // // //   backgroundColor: '#fbbc05',
// // // //   padding: '0.3rem 0.8rem',
// // // //   border: '4px solid #fbbc05',
// // // //   cursor: 'pointer',
// // // //   '&:hover': {
// // // //     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
// // // //   },
// // // // }));

// // // // const GoogleButton = styled(Button)(({ theme }) => ({
// // // //   display: 'flex',
// // // //   alignItems: 'center',
// // // //   gap: '1rem',
// // // //   textTransform: 'none',
// // // //   border: '4px solid rgba(66, 133, 244, 0.1)',
// // // //   borderRadius: '8px',
// // // //   '&:hover': {
// // // //     border: '4px solid rgba(66, 133, 244, 0.1)',
// // // //     backgroundColor: '#fff',
// // // //   },
// // // // }));

// // // // const ProfileContainer = styled(Box)(({ theme }) => ({
// // // //   display: 'flex',
// // // //   alignItems: 'center',
// // // //   borderRadius: '8px',
// // // //   cursor: 'pointer',
// // // //   '&:hover': {
// // // //     border: `0.5px solid ${theme.palette.primary.main}`,
// // // //     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
// // // //   },
// // // // }));

// // // // const LinkContainer = styled(Link)(({ theme }) => ({
// // // //   textDecoration: 'none',
// // // //   color: 'inherit',
// // // // }));

// // // // const NavLinksContainer = styled(Box)(({ theme }) => ({
// // // //   display: 'flex',
// // // //   alignItems: 'center',
// // // //   gap: '1.5rem',
// // // //   [theme.breakpoints.down('sm')]: {
// // // //     width: '100%',
// // // //     justifyContent: 'space-between',
// // // //     flexWrap: 'wrap',
// // // //     gap: '0.5rem',
// // // //   },
// // // // }));

// // // // const MobileMenuButton = styled(IconButton)(({ theme }) => ({
// // // //   display: 'none',
// // // //   [theme.breakpoints.down('sm')]: {
// // // //     display: 'flex',
// // // //   },
// // // // }));

// // // // export default function Navbar() {
// // // //   const currentScreen = useScreen();
// // // //   const theme = useTheme();
// // // //   const navigate = useNavigate();
// // // //   const {isAuth, user, setIsAuth, setUser} = useAuthStore();
// // // //   const { userData, setUserData } = React.useContext(UserContext);
// // // //   const location = useLocation();

// // // //   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
// // // //   const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState<null | HTMLElement>(null);
// // // //   const open = Boolean(anchorEl);
// // // //   const mobileMenuOpen = Boolean(mobileMenuAnchor);

// // // //   const openMenu = (event: React.MouseEvent<HTMLDivElement>) => {
// // // //     setAnchorEl(event.currentTarget);
// // // //   };

// // // //   const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
// // // //     setMobileMenuAnchor(event.currentTarget);
// // // //   };

// // // //   const closeMenu = async (event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
// // // //     event.stopPropagation();
// // // //     setAnchorEl(null);
// // // //     setMobileMenuAnchor(null);
// // // //   };

// // // //   const handleLogout = async () => {
// // // //     try {
// // // //       setUserData([{
// // // //         UserId: '',
// // // //         Username: '',
// // // //         CurrentDate: '',
// // // //         StartPlace: '',
// // // //         EndPlace: '',
// // // //         StartPlaceCode: '',
// // // //         EndPlaceCode: '',
// // // //         isLoading: true,
// // // //         Mobile: '',
// // // //         RequestNumber: '',
// // // //         Name: ''
// // // //       }]);

// // // //       localStorage.removeItem('storageData');
// // // //       localStorage.removeItem('UserId');
// // // //       localStorage.removeItem('Username');
// // // //       localStorage.removeItem('Token');

// // // //       window.location.replace('/');
// // // //     } catch (error) {
// // // //       toast.error('Logout failed. Please try again', {
// // // //         position: 'top-center',
// // // //         duration: 3000,
// // // //       });
// // // //     }
// // // //     setAnchorEl(null);
// // // //     setMobileMenuAnchor(null);
// // // //   };

// // // //   const profile_container = useRef<HTMLDivElement | null>(null);

// // // //   return (
// // // //     <>
// // // //       <NavContainer>
// // // //         <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
// // // //           <Typography
// // // //             variant="h1"
// // // //             color={theme.palette.primary.main}
// // // //             fontSize={{xs: '1.25rem', md: '2rem'}}
// // // //           >
// // // //             <LinkContainer to="/" style={{textDecoration: 'none', color: '#117ef5'}}>
// // // //               <img src={Logo} alt="College-logo" width={currentScreen === 'xs' ? 100 : 138} />
// // // //             </LinkContainer>
// // // //           </Typography>

// // // //           <MobileMenuButton onClick={openMobileMenu}>
// // // //             <ArrowDropDown />
// // // //           </MobileMenuButton>
// // // //         </Box>

// // // //         <NavLinksContainer>
// // // //           <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '1.5rem' }}>
// // // //             <HelpButton onClick={() => navigate('/')}>
// // // //               <Typography variant='body1' color={'black'} fontFamily={theme.typography.fontFamily}>
// // // //                 Home
// // // //               </Typography>
// // // //             </HelpButton>

// // // //             <HelpButton onClick={() => navigate('/about')}>
// // // //               <Typography variant='body1' color={'black'} fontFamily={theme.typography.fontFamily}>
// // // //                 About Us
// // // //               </Typography>
// // // //             </HelpButton>

// // // //             <HelpButton onClick={() => navigate('/MapList')}>
// // // //               <Typography variant='body1' color={'black'} fontFamily={theme.typography.fontFamily}>
// // // //                 Stations
// // // //               </Typography>
// // // //             </HelpButton>
// // // //           </Box>

// // // //           {isAuth ? (
// // // //             <GoogleButton variant="outlined" href={getGoogleOAuthURL()}>
// // // //               <img src={googleIcon} alt="google" />
// // // //               <Typography variant="body1" color={theme.palette.common.black}>
// // // //                 Login with Google
// // // //               </Typography>
// // // //             </GoogleButton>
// // // //           ) : (
// // // //             <ProfileContainer
// // // //               id="basic-button"
// // // //               aria-controls={open ? 'basic-menu' : undefined}
// // // //               aria-haspopup="true"
// // // //               aria-expanded={open ? 'true' : undefined}
// // // //               onClick={openMenu}
// // // //               sx={{
// // // //                 cursor: 'pointer',
// // // //                 border: currentScreen === 'xs' ? 'none' : '0.5px solid #4f4f4f',
// // // //               }}
// // // //               ref={profile_container}
// // // //             >
// // // //               {currentScreen === 'xs' ? (
// // // //                 <IconButton>
// // // //                   <Avatar
// // // //                     alt={user?.name}
// // // //                     src={user?.picture}
// // // //                     sx={{width: '1.8rem', height: '1.8rem'}}
// // // //                   />
// // // //                   <ArrowDropDown />
// // // //                 </IconButton>
// // // //               ) : (
// // // //                 <>
// // // //                   <Avatar
// // // //                     alt={user?.name}
// // // //                     src={user?.picture}
// // // //                     sx={{width: '1.5rem', height: '1.5rem', marginLeft: '.5em'}}
// // // //                   />
// // // //                   <Typography
// // // //                     variant="body1"
// // // //                     color={theme.palette.common.black}
// // // //                     padding="0.5rem 1rem"
// // // //                     textTransform={'none'}
// // // //                   >
// // // //                     Hi, {user?.name}!
// // // //                   </Typography>
// // // //                 </>
// // // //               )}
// // // //             </ProfileContainer>
// // // //           )}

// // // //           {!location.pathname.startsWith('/admin') && user?.role === 'admin' && (
// // // //             <ManageButton sx={{ display: { xs: 'none', lg: 'flex' } }}>
// // // //               <Typography variant="body1" color={theme.palette.common.black}>
// // // //                 Manage Buses
// // // //               </Typography>
// // // //             </ManageButton>
// // // //           )}
// // // //         </NavLinksContainer>

// // // //         {/* Profile Menu */}
// // // //         <Menu
// // // //           id="basic-menu"
// // // //           anchorEl={anchorEl}
// // // //           open={open}
// // // //           onClose={closeMenu}
// // // //           MenuListProps={{
// // // //             'aria-labelledby': 'basic-button',
// // // //             style: {
// // // //               width: profile_container.current?.offsetWidth || 'auto',
// // // //             },
// // // //           }}
// // // //         >
// // // //           <MenuItem onClick={closeMenu}>
// // // //             <LinkContainer to="/profile">Profile</LinkContainer>
// // // //           </MenuItem>
// // // //           <MenuItem onClick={handleLogout}>
// // // //             {userData[0]?.Token ? (
// // // //               <LinkContainer to="#">Logout</LinkContainer>
// // // //             ) : (
// // // //               <LinkContainer to="/bus-schedule">Login</LinkContainer>
// // // //             )}
// // // //           </MenuItem>
// // // //         </Menu>

// // // //         {/* Mobile Menu */}
// // // //         <Menu
// // // //           anchorEl={mobileMenuAnchor}
// // // //           open={mobileMenuOpen}
// // // //           onClose={closeMenu}
// // // //           PaperProps={{
// // // //             style: {
// // // //               width: '200px',
// // // //             },
// // // //           }}
// // // //         >
// // // //           <MenuItem onClick={() => { navigate('/'); closeMenu(); }}>
// // // //             <Typography>Home</Typography>
// // // //           </MenuItem>
// // // //           <MenuItem onClick={() => { navigate('/about'); closeMenu(); }}>
// // // //             <Typography>About Us</Typography>
// // // //           </MenuItem>
// // // //           <MenuItem onClick={() => { navigate('/MapList'); closeMenu(); }}>
// // // //             <Typography>Stations</Typography>
// // // //           </MenuItem>
// // // //           {!location.pathname.startsWith('/admin') && user?.role === 'admin' && (
// // // //             <MenuItem onClick={() => { navigate('/admin'); closeMenu(); }}>
// // // //               <Typography>Manage Buses</Typography>
// // // //             </MenuItem>
// // // //           )}
// // // //         </Menu>
// // // //       </NavContainer>
// // // //       <Toaster position="top-center" />
// // // //     </>
// // // //   );
// // // // }

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
// // // import axios from 'axios';
// // // import React, {useRef} from 'react';
// // // import toast, {Toaster} from 'react-hot-toast';
// // // import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom';
// // // import googleIcon from '../../assets/googleIcon.svg';
// // // import helpIcon from '../../assets/helpIcon.svg';
// // // import {useScreen} from '../../customHooks/useScreen';
// // // import {useAuthStore} from '../../store/authStore';
// // // import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
// // // import Logo from '../../assets/iiitdmj-logo.png';

// // // const NavContainer = styled(Box)(({ theme }) => ({
// // //   display: 'flex',
// // //   justifyContent: 'space-between',
// // //   alignItems: 'center',
// // //   backgroundColor: 'rgba(1, 166, 147, 0.2)',
// // //   borderRadius: 5,
// // //   border: '0.5px solid gray',
// // //   padding: 8,
// // //   flexDirection: 'row-reverse', // Added row-reverse here
// // //   [theme.breakpoints.down('sm')]: {
// // //     flexDirection: 'column-reverse', // Reverse for mobile too
// // //     gap: '1rem',
// // //     padding: '1rem',
// // //   },
// // // }));

// // // const HelpButton = styled(Box)(({ theme }) => ({
// // //   display: 'flex',
// // //   alignItems: 'center',
// // //   gap: '5px',
// // //   cursor: 'pointer',
// // //   padding: '8px 12px',
// // //   borderRadius: '4px',
// // //   '&:hover': {
// // //     backgroundColor: theme.palette.action.hover,
// // //   },
// // // }));

// // // const ManageButton = styled(Box)(({ theme }) => ({
// // //   display: 'flex',
// // //   alignItems: 'center',
// // //   borderRadius: '8px',
// // //   backgroundColor: '#fbbc05',
// // //   padding: '0.3rem 0.8rem',
// // //   border: '4px solid #fbbc05',
// // //   cursor: 'pointer',
// // //   '&:hover': {
// // //     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
// // //   },
// // // }));

// // // const GoogleButton = styled(Button)(({ theme }) => ({
// // //   display: 'flex',
// // //   alignItems: 'center',
// // //   gap: '1rem',
// // //   textTransform: 'none',
// // //   border: '4px solid rgba(66, 133, 244, 0.1)',
// // //   borderRadius: '8px',
// // //   '&:hover': {
// // //     border: '4px solid rgba(66, 133, 244, 0.1)',
// // //     backgroundColor: '#fff',
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

// // // const LinkContainer = styled(Link)(({ theme }) => ({
// // //   textDecoration: 'none',
// // //   color: 'inherit',
// // // }));

// // // const NavLinksContainer = styled(Box)(({ theme }) => ({
// // //   display: 'flex',
// // //   alignItems: 'center',
// // //   gap: '1.5rem',
// // //   flexDirection: 'row-reverse', // Added row-reverse here
// // //   [theme.breakpoints.down('sm')]: {
// // //     width: '100%',
// // //     justifyContent: 'space-between',
// // //     flexWrap: 'wrap',
// // //     gap: '0.5rem',
// // //     flexDirection: 'row-reverse', // Keep reversed on mobile
// // //   },
// // // }));

// // // const MobileMenuButton = styled(IconButton)(({ theme }) => ({
// // //   display: 'none',
// // //   [theme.breakpoints.down('sm')]: {
// // //     display: 'flex',
// // //   },
// // // }));

// // // export default function Navbar() {
// // //   const currentScreen = useScreen();
// // //   const theme = useTheme();
// // //   const navigate = useNavigate();
// // //   const {isAuth, user, setIsAuth, setUser} = useAuthStore();
// // //   const { userData, setUserData } = React.useContext(UserContext);
// // //   const location = useLocation();

// // //   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
// // //   const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState<null | HTMLElement>(null);
// // //   const open = Boolean(anchorEl);
// // //   const mobileMenuOpen = Boolean(mobileMenuAnchor);

// // //   const openMenu = (event: React.MouseEvent<HTMLDivElement>) => {
// // //     setAnchorEl(event.currentTarget);
// // //   };

// // //   const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
// // //     setMobileMenuAnchor(event.currentTarget);
// // //   };

// // //   const closeMenu = async (event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
// // //     event.stopPropagation();
// // //     setAnchorEl(null);
// // //     setMobileMenuAnchor(null);
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
// // //       toast.error('Logout failed. Please try again', {
// // //         position: 'top-center',
// // //         duration: 3000,
// // //       });
// // //     }
// // //     setAnchorEl(null);
// // //     setMobileMenuAnchor(null);
// // //   };

// // //   const profile_container = useRef<HTMLDivElement | null>(null);

// // //   return (
// // //     <>
// // //       <NavContainer>
// // //         <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', flexDirection: 'row-reverse' }}>
// // //           <Typography
// // //             variant="h1"
// // //             color={theme.palette.primary.main}
// // //             fontSize={{xs: '1.25rem', md: '2rem'}}
// // //           >
// // //             <LinkContainer to="/" style={{textDecoration: 'none', color: '#117ef5'}}>
// // //               <img src={Logo} alt="College-logo" width={currentScreen === 'xs' ? 100 : 138} />
// // //             </LinkContainer>
// // //           </Typography>

// // //           <MobileMenuButton onClick={openMobileMenu}>
// // //             <ArrowDropDown />
// // //           </MobileMenuButton>
// // //         </Box>

// // //         <NavLinksContainer>
// // //           <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '1.5rem', flexDirection: 'row-reverse' }}>
// // //             <HelpButton onClick={() => navigate('/MapList')}>
// // //               <Typography variant='body1' color={'black'} fontFamily={theme.typography.fontFamily}>
// // //                 Stations
// // //               </Typography>
// // //             </HelpButton>

// // //             <HelpButton onClick={() => navigate('/about')}>
// // //               <Typography variant='body1' color={'black'} fontFamily={theme.typography.fontFamily}>
// // //                 About Us
// // //               </Typography>
// // //             </HelpButton>

// // //             <HelpButton onClick={() => navigate('/')}>
// // //               <Typography variant='body1' color={'black'} fontFamily={theme.typography.fontFamily}>
// // //                 Home
// // //               </Typography>
// // //             </HelpButton>
// // //           </Box>

// // //           {isAuth ? (
// // //             <GoogleButton variant="outlined" href={getGoogleOAuthURL()}>
// // //               <img src={googleIcon} alt="google" />
// // //               <Typography variant="body1" color={theme.palette.common.black}>
// // //                 Login with Google
// // //               </Typography>
// // //             </GoogleButton>
// // //           ) : (
// // //             <ProfileContainer
// // //               id="basic-button"
// // //               aria-controls={open ? 'basic-menu' : undefined}
// // //               aria-haspopup="true"
// // //               aria-expanded={open ? 'true' : undefined}
// // //               onClick={openMenu}
// // //               sx={{
// // //                 cursor: 'pointer',
// // //                 border: currentScreen === 'xs' ? 'none' : '0.5px solid #4f4f4f',
// // //               }}
// // //               ref={profile_container}
// // //             >
// // //               {currentScreen === 'xs' ? (
// // //                 <IconButton>
// // //                   <Avatar
// // //                     alt={user?.name}
// // //                     src={user?.picture}
// // //                     sx={{width: '1.8rem', height: '1.8rem'}}
// // //                   />
// // //                   <ArrowDropDown />
// // //                 </IconButton>
// // //               ) : (
// // //                 <>
// // //                   <Avatar
// // //                     alt={user?.name}
// // //                     src={user?.picture}
// // //                     sx={{width: '1.5rem', height: '1.5rem', marginLeft: '.5em'}}
// // //                   />
// // //                   <Typography
// // //                     variant="body1"
// // //                     color={theme.palette.common.black}
// // //                     padding="0.5rem 1rem"
// // //                     textTransform={'none'}
// // //                   >
// // //                     Hi, {user?.name}!
// // //                   </Typography>
// // //                 </>
// // //               )}
// // //             </ProfileContainer>
// // //           )}

// // //           {!location.pathname.startsWith('/admin') && user?.role === 'admin' && (
// // //             <ManageButton sx={{ display: { xs: 'none', lg: 'flex' } }}>
// // //               <Typography variant="body1" color={theme.palette.common.black}>
// // //                 Manage Buses
// // //               </Typography>
// // //             </ManageButton>
// // //           )}
// // //         </NavLinksContainer>

// // //         {/* Profile Menu */}
// // //         <Menu
// // //           id="basic-menu"
// // //           anchorEl={anchorEl}
// // //           open={open}
// // //           onClose={closeMenu}
// // //           MenuListProps={{
// // //             'aria-labelledby': 'basic-button',
// // //             style: {
// // //               width: profile_container.current?.offsetWidth || 'auto',
// // //             },
// // //           }}
// // //         >
// // //           <MenuItem onClick={closeMenu}>
// // //             <LinkContainer to="/profile">Profile</LinkContainer>
// // //           </MenuItem>
// // //           <MenuItem onClick={handleLogout}>
// // //              {userData[0]?.Token && (
// // //               <LinkContainer to="#">Logout</LinkContainer>
// // //             ) 
// // //           }
// // //             {/* // : (
// // //             //   <LinkContainer to="/bus-schedule">Login</LinkContainer>
// // //             // )} */}
// // //           </MenuItem>
// // //         </Menu>

// // //         {/* Mobile Menu */}
// // //         <Menu
// // //           anchorEl={mobileMenuAnchor}
// // //           open={mobileMenuOpen}
// // //           onClose={closeMenu}
// // //           PaperProps={{
// // //             style: {
// // //               width: '200px',
// // //             },
// // //           }}
// // //         >
// // //           <MenuItem onClick={() => { navigate('/MapList'); closeMenu(); }}>
// // //             <Typography>Stations</Typography>
// // //           </MenuItem>
// // //           <MenuItem onClick={() => { navigate('/about'); closeMenu(); }}>
// // //             <Typography>About Us</Typography>
// // //           </MenuItem>
// // //           <MenuItem onClick={() => { navigate('/'); closeMenu(); }}>
// // //             <Typography>Home</Typography>
// // //           </MenuItem>
// // //           {!location.pathname.startsWith('/admin') && user?.role === 'admin' && (
// // //             <MenuItem onClick={() => { navigate('/admin'); closeMenu(); }}>
// // //               <Typography>Manage Buses</Typography>
// // //             </MenuItem>
// // //           )}
// // //         </Menu>
// // //       </NavContainer>
// // //       <Toaster position="top-center" />
// // //     </>
// // //   );
// // // }

// // import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
// // import {
// //   Avatar,
// //   Box,
// //   Button,
// //   IconButton,
// //   Menu,
// //   MenuItem,
// //   Stack,
// //   Typography,
// //   styled,
// //   useTheme,
// // } from '@mui/material';
// // import UserContext from './../../UserContext';
// // import axios from 'axios';
// // import React, { useRef } from 'react';
// // import toast, { Toaster } from 'react-hot-toast';
// // import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
// // import googleIcon from '../../assets/googleIcon.svg';
// // import helpIcon from '../../assets/helpIcon.svg';
// // import { useScreen } from '../../customHooks/useScreen';
// // import { useAuthStore } from '../../store/authStore';
// // import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
// // import Logo from '../../assets/iiitdmj-logo.png';
// // import { Logout } from '@mui/icons-material';

// // const NavContainer = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   justifyContent: 'flex-start', // Changed from space-between to flex-start
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

// // const HelpButton = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   gap: '5px',
// //   cursor: 'pointer',
// //   padding: '8px 12px',
// //   borderRadius: '4px',
// //   '&:hover': {
// //     backgroundColor: theme.palette.action.hover,
// //   },
// // }));

// // const ManageButton = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   borderRadius: '8px',
// //   backgroundColor: '#fbbc05',
// //   padding: '0.3rem 0.8rem',
// //   border: '4px solid #fbbc05',
// //   cursor: 'pointer',
// //   '&:hover': {
// //     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
// //   },
// // }));

// // const GoogleButton = styled(Button)(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   gap: '1rem',
// //   textTransform: 'none',
// //   border: '4px solid rgba(66, 133, 244, 0.1)',
// //   borderRadius: '8px',
// //   '&:hover': {
// //     border: '4px solid rgba(66, 133, 244, 0.1)',
// //     backgroundColor: '#fff',
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

// // const LinkContainer = styled(Link)(({ theme }) => ({
// //   textDecoration: 'none',
// //   color: 'inherit',
// // }));

// // const NavLinksContainer = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   gap: '1.5rem',
// //   marginLeft: '1rem', // Added margin to separate from logo
// //   [theme.breakpoints.down('sm')]: {
// //     width: '100%',
// //     justifyContent: 'flex-start',
// //     flexWrap: 'wrap',
// //     gap: '0.5rem',
// //   },
// // }));

// // const MobileMenuButton = styled(IconButton)(({ theme }) => ({
// //   display: 'none',
// //   [theme.breakpoints.down('sm')]: {
// //     display: 'flex',
// //   },
// // }));

// // export default function Navbar() {
// //   const currentScreen = useScreen();
// //   const theme = useTheme();
// //   const navigate = useNavigate();
// //   const { isAuth, user, setIsAuth, setUser } = useAuthStore();
// //   const { userData, setUserData } = React.useContext(UserContext);
// //   const location = useLocation();

// //   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
// //   const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState<null | HTMLElement>(null);
// //   const open = Boolean(anchorEl);
// //   const mobileMenuOpen = Boolean(mobileMenuAnchor);

// //   const openMenu = (event: React.MouseEvent<HTMLDivElement>) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
// //     setMobileMenuAnchor(event.currentTarget);
// //   };

// //   const closeMenu = async (event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
// //     event.stopPropagation();
// //     setAnchorEl(null);
// //     setMobileMenuAnchor(null);
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
// //       toast.error('Logout failed. Please try again', {
// //         position: 'top-center',
// //         duration: 3000,
// //       });
// //     }
// //     setAnchorEl(null);
// //     setMobileMenuAnchor(null);
// //   };

// //   const profile_container = useRef<HTMLDivElement | null>(null);

// //   return (
// //     <>
// //       <NavContainer>
// //         <Box sx={{ display: 'flex', alignItems: 'center' }}>
// //           <Typography
// //             variant="h1"
// //             color={theme.palette.primary.main}
// //             fontSize={{ xs: '1.25rem', md: '2rem' }}
// //           >
// //             <LinkContainer to="/" style={{ textDecoration: 'none', color: '#117ef5' }}>
// //               <img src={Logo} alt="College-logo" width={currentScreen === 'xs' ? 100 : 138} />
// //             </LinkContainer>
// //           </Typography>

// //           <MobileMenuButton onClick={openMobileMenu}>
// //             <ArrowDropDown />
// //           </MobileMenuButton>
// //         </Box>

// //         <NavLinksContainer>
// //           <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '1.5rem' }}>
// //             <HelpButton onClick={() => navigate('/')}>
// //               <Typography variant='body1' color={'black'} fontFamily={theme.typography.fontFamily}>
// //                 Home
// //               </Typography>
// //             </HelpButton>



// //             <HelpButton onClick={() => navigate('/about')}>
// //               <Typography variant='body1' color={'black'} fontFamily={theme.typography.fontFamily}>
// //                 About Us
// //               </Typography>
// //             </HelpButton>

// //             <HelpButton onClick={() => navigate('/MapList')}>
// //               <Typography variant='body1' color={'black'} fontFamily={theme.typography.fontFamily}>
// //                 Stations
// //               </Typography>
// //             </HelpButton>


// //           </Box>

// //           {isAuth ? (
// //             <GoogleButton variant="outlined" href={getGoogleOAuthURL()}>
// //               <img src={googleIcon} alt="google" />
// //               <Typography variant="body1" color={theme.palette.common.black}>
// //                 Login with Google
// //               </Typography>
// //             </GoogleButton>
// //           ) : (
// //             <ProfileContainer
// //               id="basic-button"
// //               aria-controls={open ? 'basic-menu' : undefined}
// //               aria-haspopup="true"
// //               aria-expanded={open ? 'true' : undefined}
// //               onClick={openMenu}
// //               sx={{
// //                 cursor: 'pointer',
// //                 border: currentScreen === 'xs' ? 'none' : '0.5px solid #4f4f4f',
// //               }}
// //               ref={profile_container}
// //             >
// //               {currentScreen === 'xs' ? (
// //                 <IconButton>
// //                   <Avatar
// //                     alt={user?.name}
// //                     src={user?.picture}
// //                     sx={{ width: '1.8rem', height: '1.8rem' }}
// //                   />
// //                   <ArrowDropDown />
// //                 </IconButton>
// //               ) : (
// //                 <>
// //                   <Avatar
// //                     alt={user?.name}
// //                     src={user?.picture}
// //                     sx={{ width: '1.5rem', height: '1.5rem', marginLeft: '.5em' }}
// //                   />
// //                   <Typography
// //                     variant="body1"
// //                     color={theme.palette.common.black}
// //                     padding="0.5rem 1rem"
// //                     textTransform={'none'}
// //                   >
// //                     Hi, {user?.name}!
// //                   </Typography>
// //                 </>
// //               )}
// //             </ProfileContainer>
// //           )}

// //           {!location.pathname.startsWith('/admin') && user?.role === 'admin' && (
// //             <ManageButton sx={{ display: { xs: 'none', lg: 'flex' } }}>
// //               <Typography variant="body1" color={theme.palette.common.black}>
// //                 Manage Buses
// //               </Typography>
// //             </ManageButton>
// //           )}
// //         </NavLinksContainer>
// //       </NavContainer>

// //       {/* Profile Menu */}
// //       <Menu
// //         id="basic-menu"
// //         anchorEl={anchorEl}
// //         open={open}
// //         onClose={closeMenu}
// //         MenuListProps={{
// //           'aria-labelledby': 'basic-button',
// //           style: {
// //             width: profile_container.current?.offsetWidth || 'auto',
// //           },
// //         }}
// //       >
// //         <MenuItem onClick={closeMenu}>
// //           <LinkContainer to="/profile">Profile</LinkContainer>
// //         </MenuItem>


// //         {userData[0]?.Token ?
// //           <MenuItem onClick={handleLogout}>

// //             <LinkContainer to="#">Logout</LinkContainer>

// //           </MenuItem>

// //           :
// //           <MenuItem>

// //             <LinkContainer to="/profile"> Login </LinkContainer>
// //           </MenuItem>
// //         }
// //       </Menu>

// //       {/* Mobile Menu */}
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
// //         <MenuItem onClick={() => { navigate('/MapList'); closeMenu(); }}>
// //           <Typography>Stations</Typography>
// //         </MenuItem>
// //         <MenuItem onClick={() => { navigate('/about'); closeMenu(); }}>
// //           <Typography>About Us</Typography>
// //         </MenuItem>
// //         <MenuItem onClick={() => { navigate('/'); closeMenu(); }}>
// //           <Typography>Home</Typography>
// //         </MenuItem>
// //         {!location.pathname.startsWith('/admin') && user?.role === 'admin' && (
// //           <MenuItem onClick={() => { navigate('/admin'); closeMenu(); }}>
// //             <Typography>Manage Buses</Typography>
// //           </MenuItem>
// //         )}
// //       </Menu>
// //       <Toaster position="top-center" />
// //     </>
// //   );
// // }

// import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
// import {
//   Avatar,
//   Box,
//   Button,
//   IconButton,
//   Menu,
//   MenuItem,
//   Stack,
//   Typography,
//   styled,
//   useTheme,
// } from '@mui/material';
// import UserContext from './../../UserContext';
// import React, { useRef } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import googleIcon from '../../assets/googleIcon.svg';
// import { useScreen } from '../../customHooks/useScreen';
// import { useAuthStore } from '../../store/authStore';
// import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
// import Logo from '../../assets/iiitdmj-logo.png';
// import MenuIcon from '@mui/icons-material/Menu';

// const NavContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between', // Space between left and right sections
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

// export default function Navbar() {
//   const currentScreen = useScreen();
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const { isAuth, user } = useAuthStore();
//   const { userData, setUserData } = React.useContext(UserContext);
//   const location = useLocation();

//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const mobileMenuOpen = Boolean(mobileMenuAnchor);

//   const openMenu = (event: React.MouseEvent<HTMLDivElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setMobileMenuAnchor(event.currentTarget);
//   };

//   const closeMenu = () => {
//     setAnchorEl(null);
//     setMobileMenuAnchor(null);
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
//       toast.error('Logout failed. Please try again', {
//         position: 'top-center',
//         duration: 3000,
//       });
//     }
//     closeMenu();
//   };

//   const profile_container = useRef<HTMLDivElement | null>(null);

//   return (
//     <>
//       <NavContainer>
//         {/* Left Section - Logo and Navigation Links */}
//         <LeftSection>
//           <Link to="/">
//             <img src={Logo} alt="College-logo" width={currentScreen === 'xs' ? 100 : 138} />
//           </Link>

//           <NavLinksContainer>
//             <NavButton onClick={() => navigate('/')}>Home</NavButton>
//             <NavButton onClick={() => navigate('/about')}>About Us</NavButton>
//             <NavButton onClick={() => navigate('/MapList')}>Stations</NavButton>
//           </NavLinksContainer>

//           <MobileMenuButton onClick={openMobileMenu}>
//             <MenuIcon />
//           </MobileMenuButton>
//         </LeftSection>

//         {/* Right Section - Profile/Auth */}
//         <RightSection>
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
//               Login with Google
//             </Button>
//           ) : (
//             <ProfileContainer
//               onClick={openMenu}
//               ref={profile_container}
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
//                   Hi, {user?.name || 'User'}!
//                 </Typography>
//               )}
//               <ArrowDropDown />
//             </ProfileContainer>
//           )}
//         </RightSection>
//       </NavContainer>

//       {/* Profile Menu */}
//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={closeMenu}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'right',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'right',
//         }}
//       >
//         <MenuItem onClick={() => { navigate('/profile'); closeMenu(); }}>
//           Profile
//         </MenuItem>
//         {userData[0]?.Token ? (
//           <MenuItem onClick={handleLogout}>Logout</MenuItem>
//         ) : (
//           <MenuItem onClick={() => { navigate('/profile'); closeMenu(); }}>
//             Login
//           </MenuItem>
//         )}
//       </Menu>

//       {/* Mobile Menu */}
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
//           Home
//         </MenuItem>
//         <MenuItem onClick={() => { navigate('/about'); closeMenu(); }}>
//           About Us
//         </MenuItem>
//         <MenuItem onClick={() => { navigate('/MapList'); closeMenu(); }}>
//           Stations
//         </MenuItem>
//       </Menu>

//       <Toaster position="top-center" />
//     </>
//   );
// }

import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import UserContext from './../../UserContext';
import React, { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../assets/googleIcon.svg';
import { useScreen } from '../../customHooks/useScreen';
import { useAuthStore } from '../../store/authStore';
import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
import Logo from '../../assets/iiitdmj-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgba(1, 166, 147, 0.2)',
  borderRadius: 5,
  border: '0.5px solid gray',
  padding: 8,
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
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'space-between',
  },
}));

const RightSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'flex-end',
  },
}));

const NavLinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.black,
  textTransform: 'none',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  cursor: 'pointer',
  '&:hover': {
    border: `0.5px solid ${theme.palette.primary.main}`,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
  },
}));

const LanguageButton = styled(Button)(({ theme }) => ({
  minWidth: 'auto',
  padding: '12px 12px',
  textTransform: 'uppercase',
}));

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const currentScreen = useScreen();
  const theme = useTheme();
  const navigate = useNavigate();
  const { isAuth, user } = useAuthStore();
  const { userData, setUserData } = React.useContext(UserContext);
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState<null | HTMLElement>(null);
  const [languageMenuAnchor, setLanguageMenuAnchor] = React.useState<null | HTMLElement>(null);
  
  const open = Boolean(anchorEl);
  const mobileMenuOpen = Boolean(mobileMenuAnchor);
  const languageMenuOpen = Boolean(languageMenuAnchor);

  const isPersian = i18n.language === 'fa';

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setLanguageMenuAnchor(null);
  };

  const openMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const openLanguageMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setMobileMenuAnchor(null);
    setLanguageMenuAnchor(null);
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

  const profile_container = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <NavContainer>
        {/* Left Section - Logo and Navigation Links */}
        <LeftSection>
          <Link to="/">
            <img src={Logo} alt="College-logo" width={currentScreen === 'xs' ? 100 : 138} />
          </Link>

          <NavLinksContainer>
            <NavButton onClick={() => navigate('/')}>{t('navbar.home')}</NavButton>
            <NavButton onClick={() => navigate('/about')}>{t('navbar.about')}</NavButton>
            <NavButton onClick={() => navigate('/MapList')}>{t('navbar.stations')}</NavButton>
          </NavLinksContainer>

          <MobileMenuButton onClick={openMobileMenu}>
            <MenuIcon />
          </MobileMenuButton>
        </LeftSection>

        {/* Right Section - Language, Profile/Auth */}
        <RightSection>
          {/* Language Selector Button */}
          <LanguageButton
            onClick={openLanguageMenu}
            startIcon={<LanguageIcon  sx={{margin:1}}/>}
            sx={{ textTransform: 'none',}}
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
              ref={profile_container}
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

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => { navigate('/profile'); closeMenu(); }}>
           {t('navbar.profile')}
        </MenuItem>
        {userData[0]?.Token ? (
          <MenuItem onClick={handleLogout}>{t('navbar.logout')}</MenuItem>
        ) : (
          <MenuItem onClick={() => { navigate('/profile'); closeMenu(); }}>
              {t('navbar.login')}
          </MenuItem>
        )}
      </Menu>

      {/* Language Selection Menu */}
      <Menu
        anchorEl={languageMenuAnchor}
        open={languageMenuOpen}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem 
          selected={i18n.language === 'en'} 
          onClick={() => changeLanguage('en')}
        >
            English (EN)
        </MenuItem>
        <MenuItem 
          selected={i18n.language === 'fa'} 
          onClick={() => changeLanguage('fa')}
        >
             فارسی (FA)
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
      >
        <MenuItem onClick={() => { navigate('/'); closeMenu(); }}>
          {t('navbar.home')}
        </MenuItem>
        <MenuItem onClick={() => { navigate('/about'); closeMenu(); }}>
          {t('navbar.about')}
        </MenuItem>
        <MenuItem onClick={() => { navigate('/MapList'); closeMenu(); }}>
          {t('navbar.stations')}
        </MenuItem>
        <MenuItem onClick={openLanguageMenu}>
          {t('navbar.changeLanguage')}
        </MenuItem>
      </Menu>

      <Toaster position="top-center" />
    </>
  );
}