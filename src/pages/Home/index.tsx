
import { useTheme, Box, Button, Grid, Typography, styled, Card, Link, useMediaQuery } from '@mui/material';
import busimg from '../../assets/BusImage.jpeg';
import vanimg from '../../assets/VanImage.jpeg';
import { useNavigate } from 'react-router-dom';
import SearchCard from './SearchCard';
import { useContext, useEffect, useState } from 'react';
import { GetCities } from '../../Api/ApiMaster';
import UserContext from './../../UserContext';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Maps from './Maps';
import { useTranslation } from 'react-i18next';
import moment from 'moment-jalaali';
import getTheme from '../../theme';

delete L.Icon.Default.prototype._getIconUrl;

const Home = (props) => {
  const { userData, setUserData } = useContext(UserContext);
  const [Loading, setLoading] = useState(false);
  const [CityList, setCityList] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();
  
   const { t ,i18n } = useTranslation();
 const theme = getTheme(i18n.language);


  useEffect(() => {
  if (userData.length > 0) {
    const currentDate = new Date();
    const storedDate = userData[0]?.CurrentDate ? new Date(userData[0].CurrentDate) : null;
    
    // Only update if:
    // 1. No date exists, or
    // 2. The stored date is in the past
    if (!storedDate || storedDate < currentDate) {
      const updatedData = [...userData];
      updatedData[0].CurrentDate = currentDate.toISOString();
      setUserData(updatedData);
      localStorage.setItem('storageData', JSON.stringify(updatedData));
    }
  }
}, [userData]); 

  useEffect(() => {

  

console.log('moment().toDate()',new Date().toISOString(),'current date : ',new Date(userData[0]?.CurrentDate)?.toISOString())

    setLoading(true);
    if (userData[0]?.Token == "" || userData[0]?.Token == null) {
      
      setTimeout(() => {
        GetCities(setCityList, CityList, props, setLoading, {
          headers: {
            'accept': 'text/plain',
            "Access-Control-Allow-Origin": "*",
            'Authorization': userData[0]?.Token
          }
        });
      }, 4000);
    }
    else {
      GetCities(setCityList, CityList, props, setLoading, {
        headers: {
          'accept': 'text/plain',
          "Access-Control-Allow-Origin": "*",
          'Authorization': userData[0]?.Token
        }
      });
    }
  }, []);

  return (
    <Grid container direction="column" marginTop={isMobile ? '1rem' : '2rem'}>
      <Grid item>
        {/* Hero Section */}
        <Box
          sx={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), 
                 url(${userData[0]?.radioType == '1' ? busimg : vanimg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: {
              xs: isMobile ? '22rem' : '18rem',
              sm: '22rem',
              md: '28rem',
              lg: '34rem'
            },
            padding: isMobile ? '1rem' : '0 1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            marginBottom: 4,
            boxShadow: 3,
            width: '100%'
          }}
        >
          <SearchCard
            CityList={CityList}
            userData={userData}
            setUserData={setUserData}
            Loading={Loading}
          />
        </Box>

        {/* Map Section */}
        <Box mt={isMobile ? 2 : 4} mb={isMobile ? 2 : 4}>
          <Maps />
        </Box>

        {/* Advertise Section */}
        <Box marginBottom={isMobile ? '2rem' : '4rem'} px={isMobile ? 1 : 0}>
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            fontWeight="700"
            margin={isMobile ? '1rem 0' : '2rem 0'}
            textAlign="center"
            color={theme.palette.secondary.main} 
            fontFamily={theme.typography.fontFamily}
          >
            {t('home.advertise')}
          </Typography>

          <Grid
            container
            spacing={isMobile ? 1 : 4}
            px={isMobile ? 1 : 4}
            justifyContent="center"
          >
            <Grid item xs={12} sm={6} md={6}>
              <AdCard>
                <img
                  src={busimg}
                  alt={t('home.ad1Alt')}
                  style={{
                    width: '100%',
                    height: isMobile ? '120px' : '180px',
                    objectFit: 'cover',
                    borderRadius: '4px 4px 0 0'
                  }}
                />
                <Typography
                  variant={isMobile ? 'h5' : 'h4'}
                  fontWeight="600"
                  padding={1}
                  textAlign="center"
                  color={theme.palette.secondary.main} 
                  fontFamily={theme.typography.fontFamily}
                >
                  {t('home.ad1Title')}
                </Typography>
              </AdCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <AdCard>
                <img
                  src={busimg}
                  alt={t('home.ad2Alt')}
                  style={{
                    width: '100%',
                    height: isMobile ? '120px' : '180px',
                    objectFit: 'cover',
                    borderRadius: '4px 4px 0 0'
                  }}
                />
                <Typography
                  variant={isMobile ? 'h5' : 'h4'}
                  fontWeight="600"
                  padding={1}
                  textAlign="center"
                  color={theme.palette.secondary.main} 
                  fontFamily={theme.typography.fontFamily}
                >
                  {t('home.ad2Title')}
                </Typography>
              </AdCard>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

// Styled Components
const HeroContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${busimg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(4),
  boxShadow: theme.shadows[4],
  width: '100%',
  padding: theme.spacing(2),
}));

const AdCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

export default Home;