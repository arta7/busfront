import {toast} from 'react-hot-toast';
import {useAuthStore} from '../store/authStore';
import {Navigate} from 'react-router-dom';
import {Box, CircularProgress} from '@mui/material';
import UserContext from './../UserContext';
import { useContext, useEffect,useState } from 'react';

type UserProtectedRoutetypes = {
  children: React.ReactNode;
};

const UserProtectedRoute: React.FC<UserProtectedRoutetypes> = ({children}) => {
  const {isAuth, isloading} = useAuthStore();
   const { userData, setUserData } = useContext(UserContext);

  // if (isloading) {
  //   return (
  //     <Box
  //       sx={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         height: '70vh',
  //       }}
  //     >
  //       <CircularProgress size={100} />
  //     </Box>
  //   );
  // }


const isLoggedIn = userData[0].UserId == '' ? userData[0].UserId  : ''; 
console.log('isLoggedIn',isLoggedIn);
  if (isLoggedIn ) {
    toast.error('لطفا ابتدا لاگین کنید');
    return <Navigate to="/Logins" replace />;
  }
  return <>{children}</>;
};

export default UserProtectedRoute;
