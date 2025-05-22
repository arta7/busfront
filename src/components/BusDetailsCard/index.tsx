import {useTheme, Typography, styled, Box} from '@mui/material';
import busIcon from '../../assets/bus-icon.svg';
import busIconsource from '../../assets/bus-icon-source.svg';
import busIcondestination from '../../assets/bus-icon-destination.svg';
import arrorIcon from '../../assets/arrowIcon.svg';
import scheduleIcon from '../../assets/schedule-icon.svg';
import Facilities from '../../assets/Facilities.svg';
import {useOrderStore} from '../../store/orderStore';


const Icon = styled('img')`
  width: 40px;
  height: 40px;
  
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
   
  }
  
`;

function BusDetailsCard({carType,companyName}) {
  const theme = useTheme();
  const time = useOrderStore(state => state.time);
  const source = useOrderStore(state => state.source);
  const destination = useOrderStore(state => state.destination);

  return (
    <>
    
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          // gap: {xs: '10px', sm: '2px', md: '10px'},
          // margin: {xs: '0', md: '0 0.5rem'},
          flexDirection:'row'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          
          }}
        >
          <Icon src={busIconsource} alt="Bus Icon" />
        
          <Box>
            <Typography
              variant="h6"
              fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}
              color={theme.palette.common.black}
            >
              Source
            </Typography>
            <Typography
              variant="h6"
              fontSize={{xs: '1rem', sm: '0.8rem', md: '1.3rem'}}
              color={theme.palette.secondary.main}
            >
              {source}
            </Typography>
          </Box>
        </Box>
        <img src={arrorIcon} alt="Arrow Icon"  style={{ transform: 'scaleX(-1)' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          
          <Icon src={busIcondestination} alt="Bus Icon" />
          <Box>
            <Typography
              variant="h6"
              fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}
              color={theme.palette.common.black}
            >
              Destination
            </Typography>
            <Typography
              variant="h6"
              fontSize={{xs: '1rem', sm: '0.8rem', md: '1.3rem'}}
              color={theme.palette.secondary.main}
            >
              {destination}
            </Typography>
          </Box>
        </Box>
      </Box>
    

      <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
        <Icon src={scheduleIcon} alt="Schedule Icon" />
        <Box>
          <Typography
            variant="h6"
            fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}
            color={theme.palette.common.black}
          >
           Date & Time
          </Typography>
          <Typography
            variant="h6"
            fontSize={{xs: '1.25rem', sm: '1rem', md: '1.3rem'}}
            color={theme.palette.secondary.main}
          >
            {time}
          </Typography>
        </Box>
      </Box>
      

      <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
        <Icon src={Facilities} alt="Facilities Icon" />
        <Box>
          <Typography
            variant="h6"
            fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}
            color={theme.palette.common.black}
          >
           Type :
          </Typography>
          <Typography
            variant="h6"
            fontSize={{xs: '1.25rem', sm: '1rem', md: '1.3rem'}}
            color={theme.palette.secondary.main}
          >
            {carType}
          </Typography>
        </Box>
      </Box>
    
     
    </>
  );
}

export default BusDetailsCard;
