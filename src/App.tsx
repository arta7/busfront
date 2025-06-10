import React from 'react';
import { ThemeProvider, CssBaseline, Box, createTheme } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // فایل پیکربندی i18n
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
import { useEffect, useState } from 'react';
import UserContext from './UserContext';
import Logins from './pages/Home/Login/index.tsx';
import MapList from './pages/Home/MapList.tsx';
import ChatinaWidget from './ChatinaWidget';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';


import PaymentSuccessPage from './pages/Home/PaymentSuccessPage.tsx';
import PaymentCancelPage from './pages/Home/PaymentCancelPage.tsx';

// Create RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  const location = useLocation();
  const [userData, setUserData] = useState(
    localStorage.getItem('storageData') !== null
      ? JSON.parse(localStorage.getItem('storageData'))
      : [{
        UserId: localStorage.getItem('UserId') || '',
        Username: localStorage.getItem('Username') || '',
        CurrentDate: '',
        StartPlace: '',
        EndPlace: '',
        StartPlaceCode: '',
        EndPlaceCode: '',
        isLoading: true,
        Mobile: '',
        Token: localStorage.getItem('Token') || '',
        RequestNumber: '',
        Name: '',
        sourcelat: '',
        sourcelong: '',
        deslat: '',
        deslong: '',
        radioType: '1'
      }]
  );

  // حالت زبان و جهت را از localStorage دریافت می‌کند یا پیش‌فرض انگلیسی (LTR) قرار می‌دهد
  const [language, setLanguage] = useState(localStorage.getItem('language'));
  const [isRTL, setIsRTL] = useState(['en', 'ru', 'he'].includes(language));
  

useEffect(() => {
    const setLanguage = async () => {
      const language = await localStorage.getItem("language");
      i18n.changeLanguage(language);
       setIsRTL(['en', 'ru', 'he'].includes(language));
    }
    setLanguage()
  }, [])
 

  // useEffect(()=>{
  //   console.log('language',language)
  //    i18n.changeLanguage(language);
      
  // },[])

  // تغییر زبان و جهت
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    setIsRTL(['en', 'ru', 'he'].includes(lng));
    localStorage.setItem('language', lng);
  };

  // تطبیق تم با جهت زبان
  const rtlTheme = createTheme({
    ...theme,
    direction: isRTL ? 'rtl' : 'ltr',
  });

  const showNavbarAndFooter = !location.pathname.startsWith('/Logins');

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={rtlTheme}>
            <div dir={!isRTL ? 'rtl' : 'ltr'}>
              <ChatinaWidget />
              <UserContext.Provider value={{ userData, setUserData, language, changeLanguage }}>
                <ValidateAuth />
                <CssBaseline />
                <Box margin={{ xs: '0.5rem', md: '1rem 1rem' }}>
                  {showNavbarAndFooter && <Navbar />}
                  <Routes>
                    <Route path="/Logins" element={<Logins />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/google" element={<GoogleAuthLogin />} />
                    <Route path="/bus-schedule" element={<BusSchedule />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/MapList" element={<MapList />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/refund-policy" element={<RefundPolicy />} />
                    <Route path="/contactus" element={<ContactUs />} />
                      <Route path="/PaymentSuccessPage" element={<PaymentSuccessPage />} />
                      <Route path="/PaymentCancelPage" element={<PaymentCancelPage />} />
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
                  {showNavbarAndFooter && <Footer />}
                </Box>
              </UserContext.Provider>
              <Toaster />
            </div>
          </ThemeProvider>
        </CacheProvider>
      </I18nextProvider>
    </React.StrictMode>
  );
}

export default App;
