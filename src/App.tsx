import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import GoogleAuthLogin from './components/GoogleAuthLogin';
import ValidateAuth from './components/ValidateAuth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BusSchedule from './pages/BusSchedule';
import Checkout from './pages/Checkout';
import Demopage from './pages/DemoPage/demopage';
import UserProtectedRoute from './components/ProtectedRoutes';
import { Toaster } from 'react-hot-toast';
import AdminDashBoard from './pages/AdminDashBoard';
import ProfilePage from './pages/Profile';
import AdminProtectedRoute from './components/AdminProtectedRoutes';
import AdminSchedule from './pages/AdminSchedule';
import NotFoundPage from './pages/NotFoundPage';
import PricingPage from './pages/PricingPage/PricingPage';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndconditions/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import ContactUs from './pages/ContactUs/contactUs.tsx';
import AboutUs from './pages/AboutUs/AboutUs';
import { useState } from 'react';
import UserContext from './UserContext';

function App() {
  const location = useLocation();

  const [userData, setUserData] = useState( localStorage.getItem('storageData') !== null ? JSON.parse(localStorage.getItem('storageData')) : [
    {
      UserId: localStorage.getItem('UserId') !== null ? localStorage.getItem('UserId') : '',
      Username: localStorage.getItem('Username') !== null ? localStorage.getItem('Username') : '',
      CurrentDate: '',
      StartPlace: '',
      EndPlace: '',
      StartPlaceCode: '',
      EndPlaceCode: '',
      isLoading: true,
      Mobile: '',
      Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJkdG8iOiJ7XHJcbiAgXCIkaWRcIjogXCIxXCIsXHJcbiAgXCJGaXJzdE5hbWVcIjogXCJcIixcclxuICBcIkxhc3ROYW1lXCI6IFwiXCIsXHJcbiAgXCJQaG9uZVwiOiBcIjA5Mzk4NjkxNzMyXCIsXHJcbiAgXCJFbWFpbFwiOiBcIlwiLFxyXG4gIFwiQmFsYW5jZVwiOiAwLjAsXHJcbiAgXCJQcm9maWxlSW1hZ2VVcmxcIjogXCJcIixcclxuICBcIkxhc3RMb2dpblwiOiBcIjIwMjUtMDQtMjRUMTE6NDk6NTkuMzU4MzI2NVwiLFxyXG4gIFwiVmVyaWZpY2F0aW9uQ29kZVwiOiA3MzYzNixcclxuICBcIlN0YXR1c1wiOiAwLFxyXG4gIFwiVG9rZW5cIjogXCJSRUZSRVNIXCIsXHJcbiAgXCJJZFwiOiAyLFxyXG4gIFwiVXNlclVwZGF0ZWRcIjogZmFsc2UsXHJcbiAgXCJDcmVhdGVkQnlcIjogXCJTWVNURU1cIixcclxuICBcIlVwZGF0ZWRCeVwiOiBcIlNZU1RFTVwiLFxyXG4gIFwiQ3JlYXRlZEF0XCI6IFwiMjAyNS0wMy0xMFQxNDozNzozNS44MzU2ODg0XCIsXHJcbiAgXCJVcGRhdGVkQXRcIjogXCIyMDI1LTA0LTI5VDIwOjUyOjU1LjMyODgyMTVcIixcclxuICBcIklzQWN0aXZlXCI6IHRydWVcclxufSIsImV4cCI6MTc3NzQ4MzQwMSwiaXNzIjoiS2FsYW5Ib2xkaW5nIiwiYXVkIjoiS2FsYW5Ib2xkaW5nVXNlciJ9.F_Er9ao8xH5f1-8XtqHyukTZCmjMuRVr2vylTQAB4_M',
      RequestNumber: '',
      Name: ''
    }
  ]);

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <ValidateAuth />
        <CssBaseline />
        <Box margin={{ xs: '1rem', md: '3rem 5rem' }}>
          {!location.pathname.startsWith('/admin') && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/google" element={<GoogleAuthLogin />} />
            <Route path="/bus-schedule" element={<BusSchedule />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route
              path="/checkout"
              element={
                <UserProtectedRoute>
                  <Checkout />
                </UserProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <AdminProtectedRoute>
                  <AdminDashBoard />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin/schedule"
              element={
                <AdminProtectedRoute>
                  <AdminSchedule />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/demo-Page"
              element={
                <UserProtectedRoute>
                  <Demopage />
                </UserProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <UserProtectedRoute>
                  <ProfilePage />
                </UserProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <UserProtectedRoute>
                  <NotFoundPage />
                </UserProtectedRoute>
              }
            />
          </Routes>
          {!location.pathname.startsWith('/admin') && <Footer />}
        </Box>
      </UserContext.Provider>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;