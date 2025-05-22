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
import axios from 'axios';
import React, {useRef} from 'react';
import toast, {Toaster} from 'react-hot-toast';
import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom';
import googleIcon from '../../assets/googleIcon.svg';
import helpIcon from '../../assets/helpIcon.svg';
import {useScreen} from '../../customHooks/useScreen';
import {useAuthStore} from '../../store/authStore';
import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
import Logo from '../../assets/iiitdmj-logo.png';

const NavContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HelpButton = styled(Box)`
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const ManageButton = styled(Box)`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #fbbc05;
  padding: 0.3rem 0.8rem 0.3rem 0.8rem;
  border: 4px solid #fbbc05;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  }
`;

const GoogleButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: none;
  border: 4px solid rgba(66, 133, 244, 0.1);
  border-radius: 8px;

  &:hover {
    border: 4px solid rgba(66, 133, 244, 0.1);
    background-color: #fff;
  }
`;

const ProfileContainer = styled(Box)`
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    border: 0.5px solid ${({theme}) => theme.palette.primary.main};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  }
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function Navbar() {
  const currentScreen = useScreen();
  const theme = useTheme();
  const navigate = useNavigate();
  const {isAuth, user, setIsAuth, setUser} = useAuthStore();
  const { userData, setUserData } = React.useContext(UserContext);
  
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openmenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = async (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      // const response = await axios.get(
      //   `${import.meta.env.VITE_SERVER_URL}/auth/logout`,
      //   {
      //     withCredentials: true,
      //   }
      // );

      // if (response.status === 200) {
      //   setIsAuth(false);
      //   setUser(null);
      //   window.location.replace('/');
      // }

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
        // Token: '',
        RequestNumber: '',
        Name: ''
    }]);
  
      // Clear user data from local storage
      localStorage.removeItem('storageData');
      localStorage.removeItem('UserId');
      localStorage.removeItem('Username');
       localStorage.removeItem('Token');
  
      // Redirect to the login page
      window.location.replace('/');
    } catch (error) {
      toast.error('Logout failed. Please try again', {
        position: 'top-center',
        duration: 3000,
      });
    }
    setAnchorEl(null);
  };

  const profile_container = useRef<HTMLDivElement | null>(null);

  return (
    <NavContainer style={{backgroundColor:'rgba(1, 166, 147,0.2)',borderRadius:5,borderWidth:0.5,borderColor:'gray',padding:5}}>
      {location.pathname.startsWith('/admin') && user?.role === 'admin' ? (
        <Stack>
          <Typography
            variant="h1"
            color={theme.palette.text.primary}
            fontSize={{xs: '1.5rem', md: '2.5rem'}}
          >
            Manage Buses
          </Typography>
          <Typography
            paddingTop={{sm: 0, md: 2}}
            variant="h6"
            color={theme.palette.secondary.light}
          >
            {new Date().toLocaleDateString('en-UK', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </Typography>
        </Stack>
      ) : (
        <Typography
          variant="h1"
          color={theme.palette.primary.main}
          fontSize={{xs: '1.25rem', md: '2.5rem'}}
        >
          <LinkContainer
            to="/"
            style={{textDecoration: 'none', color: '#117ef5'}}
          >
          <img src={Logo} alt="College-logo" width={138} />
          </LinkContainer>
        </Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
          <HelpButton display={{xs: 'none', md: 'flex'}} onClick={()=>{
            navigate('/')
          }}>
        
          <Typography variant="h6" color={'black'}>
            Home
          </Typography>
        </HelpButton>

              <HelpButton display={{xs: 'none', md: 'flex'}} onClick={()=>{
            navigate('/about')
          }}>
        
          <Typography variant="h6" color={'black'}>
            About Us
          </Typography>
        </HelpButton>
        {/* <HelpButton display={{xs: 'none', md: 'flex'}}>
          <img src={helpIcon} alt="help" />
          <Typography variant="h6" color={theme.palette.common.black}>
            Help
          </Typography>
        </HelpButton> */}

        {isAuth ? (
          <GoogleButton variant="outlined" href={getGoogleOAuthURL()}>
            <img src={googleIcon} alt="google" />
            <Typography variant="h6" color={theme.palette.common.black}>
              Login with Google
            </Typography>
          </GoogleButton>
        ) : (
          <ProfileContainer
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={openmenu}
            sx={{
              cursor: 'pointer',
              border: currentScreen === 'xs' ? 'none' : '0.5px solid #4f4f4f',
            }}
            ref={profile_container}
          >
            {currentScreen === 'xs' ? (
              <IconButton>
                <Avatar
                  alt={user?.name}
                  src={user?.picture}
                  sx={{width: '1.8rem', height: '1.8rem'}}
                />
                {<ArrowDropDown />}
              </IconButton>
            ) : (
              <>
                <Avatar
                  alt={user?.name}
                  src={user?.picture}
                  sx={{width: '1.5rem', height: '1.5rem', marginLeft: '.5em'}}
                />
                <Typography
                  variant="h6"
                  color={theme.palette.common.black}
                  padding="0.5rem 1rem"
                  textTransform={'none'}
                >
                  Hi, {user?.name}!
                </Typography>
              </>
            )}

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={closeMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
                style: {
                  width:
                    currentScreen === 'xs'
                      ? 130
                      : profile_container.current?.offsetWidth || 0,
                },
              }}
            >
              <MenuItem>
                <LinkContainer to="/profile">Profile</LinkContainer>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
              { userData[0].Token &&
                <LinkContainer to="#">Logout</LinkContainer>
                // :
                // <LinkContainer to="/bus-schedule">Login</LinkContainer>

              }
              </MenuItem>
            </Menu>
          </ProfileContainer>
        )}

        {!location.pathname.startsWith('/admin') && user?.role === 'admin' ? (
          currentScreen === 'lg' || currentScreen === 'xl' ? (
            <ManageButton>
              <Typography variant="h6" color={theme.palette.common.black}>
                Manage Buses
              </Typography>
            </ManageButton>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </Box>
      <Toaster position="top-center" />
    </NavContainer>
  );
}
