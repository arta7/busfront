import { useEffect, useContext, useState } from 'react';
import { useAuthStore } from '../store/authStore';
import axios from 'axios';
import UserContext from './../UserContext';
import { Navigate, useNavigate,useLocation } from 'react-router-dom';

const ValidateAuth: React.FC = () => {
  const { setIsAuth, setUser, setIsLoading } = useAuthStore();
  const { userData, setUserData } = useContext(UserContext);
  const [shouldRedirect, setShouldRedirect] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()

  // const checkAuth = async () => {
    // try {
    //   const isLoggedIn =  await Array.isArray(userData) && userData.length > 0 ? userData[0].Token : '';
    //   console.log('isLoggedIn', isLoggedIn);

    //   if (isLoggedIn == '') { // Check for empty token (user not logged in)
    //     // console.log('test login - redirecting');
    //     setShouldRedirect(true); // Set state to trigger redirect
    //   } else {
    //     console.log('User is logged in');
    //     // Optionally, you might want to fetch user data or perform other actions here
    //   }
    // } catch (error) {
    //   console.error("Error checking authentication:", error);
    //   // Handle the error appropriately, e.g., set an error state or display a message
    //   setIsLoading(false); // Stop loading
    // } finally {
    //   setIsLoading(false); // Stop loading
    // }
    useEffect(() => {
      const isAuthenticated = Array.isArray(userData) && userData.length > 0 && userData[0].Token;

      // Check if the user is authenticated. If not, navigate to login.
      if (!isAuthenticated  && location.pathname != '/'  && location.pathname != '/about' 
        && location.pathname != '/privacy-policy'  && location.pathname != '/contactus' && location.pathname != '/refund-policy'
       && location.pathname != '/terms-and-conditions'  && location.pathname != '/MapList' 
      ) {
        navigate('/Logins');
      }
    }, [userData, navigate]); // Effect runs whenever userData changes

    return null; // Or a loading spinner until the authentication check is complete
  };

// useEffect(() => {


//   checkAuth();
// }, []);
// if (shouldRedirect) {
//   return <Navigate to="/Logins" replace />;
// }


export default ValidateAuth;
