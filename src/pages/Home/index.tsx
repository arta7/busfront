
import { useTheme, Box, Button, Grid, Typography, styled, Card, Link } from '@mui/material';
// import bgimg from '../../assets/bgimg.png';
import busimg from '../../assets/BusImage.jpg'
// import bus from '../../assets/busIcon.svg';
// import person from '../../assets/personIcon.svg';
// import ticket from '../../assets/ticketIcon.svg';
import { useNavigate } from 'react-router-dom';
import SearchCard from './SearchCard';
import { useContext, useEffect, useState } from 'react';
import { GetCities } from '../../Api/ApiMaster';
import UserContext from './../../UserContext';
// import Logo from '../../assets/iiitdmj-logo.png';
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Maps from './Maps';
// import Maps from './Maps';

delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

const position = [51.505, -0.09]
const Home = (props) => {

  const { userData, setUserData } = useContext(UserContext);
  const [Loading, setLoading] = useState(false);
  const [CityList, setCityList] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  useEffect(() => {

    const myNextList = [...userData];
    const DatesStep = myNextList;
    DatesStep[0].CurrentDate = new Date().toLocaleDateString();
    setUserData(myNextList)

    setLoading(true)
    if (userData[0]?.Token == "" || userData[0]?.Token == null) {

      setTimeout(() => {
        GetCities(setCityList, CityList, props, setLoading, {
          headers: {
            'accept': 'text/plain',
            "Access-Control-Allow-Origin": "*",
            'Authorization': userData[0]?.Token
          }
        })
      }, 4000);

    }
    else {
      GetCities(setCityList, CityList, props, setLoading, {
        headers: {
          'accept': 'text/plain',
          "Access-Control-Allow-Origin": "*",
          'Authorization': userData[0]?.Token
        }
      })

    }

  }, [])
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Grid container direction="column" marginTop="2rem">
      <Grid item>
        <HeroContainer
          height={{ xs: '18rem', sm: '20rem', md: '28rem', lg: '34rem' }}
        >
          <Typography
            variant="h2"
            color="white"
            fontSize={{ xs: '1.8rem', sm: '2.5rem', md: '3.3rem', lg: '3.6rem' }}
            maxWidth={{ xs: '90%', md: '60%' }}
            textAlign="center"
            fontWeight="700"
          >
          </Typography>

          <SearchCard CityList={CityList} userData={userData} setUserData={setUserData} Loading={Loading} />
        </HeroContainer>
        <Maps/>
        <Box marginBottom="4rem" style={{justifyContent:'center',alignItems:'center'}}>
         
           <Typography
            variant="h2"
            color={theme.palette.secondary.main}
            fontWeight="700"
            margin="2rem 0"
            textAlign="center"
          >
             Advertise
          </Typography>
          <Grid container  spacing={{xs: 2, md: 6}} padding={{md: '0 2rem'}}>
            <Grid item xs={12} md={6} >
              
              <Link style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                <img
                  src={busimg}
                  alt="bus"
                  style={{
                    width: '100%',
                    height: '132px',
                   
                  }}
                />
                <Typography variant="h4" fontWeight="600" marginTop="1rem" sx={{textAlign:'center'}}>
                   Advertising 1
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={2} md={6}>
              <Link style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                <img
                  src={busimg}
                  alt="ticket"
                  style={{
                    width: '100%',
                    height: '132px',
                  }}
                />
                <Typography variant="h4" fontWeight="600" marginTop="1rem" sx={{textAlign:'center'}}>
                   Advertising 2
                </Typography>
              </Link>
            </Grid>
         
          </Grid>




     
        </Box>
      </Grid>
    </Grid>
  );
};

const HeroContainer = styled(Box)({
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${busimg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 2,
  marginBottom: '4rem',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.2)',
});


export default Home;
