// import {useTheme, Typography, styled, Box} from '@mui/material';
// import busIcon from '../../assets/bus-icon.svg';
// import busIconsource from '../../assets/bus-icon-source.svg';
// import busIcondestination from '../../assets/bus-icon-destination.svg';
// import arrorIcon from '../../assets/arrowIcon.svg';
// import scheduleIcon from '../../assets/schedule-icon.svg';
// import Facilities from '../../assets/Facilities.svg';
// import {useOrderStore} from '../../store/orderStore';


// const Icon = styled('img')`
//   width: 40px;
//   height: 40px;
  
//   @media (max-width: 600px) {
//     width: 30px;
//     height: 30px;
   
//   }
  
// `;

// function BusDetailsCard({carType,companyName,time,source,destination}) {
//   const theme = useTheme();
//   // const time = useOrderStore(state => state.time);
//   // const source = useOrderStore(state => state.source);
//   // const destination = useOrderStore(state => state.destination);

//   return (
//     <>
    
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           // gap: {xs: '10px', sm: '2px', md: '10px'},
//           // margin: {xs: '0', md: '0 0.5rem'},
//           flexDirection:'row'
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '5px',
          
//           }}
//         >
//           <Icon src={busIconsource} alt="Bus Icon" />
        
//           <Box>
//             <Typography
//               variant="h6"
//               // fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}
//               color={theme.palette.common.black}
//                fontFamily={theme.typography.fontFamily}
//             >
//               Source
//             </Typography>
//             <Typography
//               variant="h6"
//               // fontSize={{xs: '1rem', sm: '0.8rem', md: '1.3rem'}}
//               color={theme.palette.secondary.main}
//                 fontFamily={theme.typography.fontFamily}
//             >
//               {source}
//             </Typography>
//           </Box>
//         </Box>
//         <img src={arrorIcon} alt="Arrow Icon"  
//         //style={{ transform: 'scaleX(-1)' }}
//          />
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '5px',
//           }}
//         >
          
//           <Icon src={busIcondestination} alt="Bus Icon" />
//           <Box>
//             <Typography
//               variant="h6"
//               // fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}
//               color={theme.palette.common.black}
//                 fontFamily={theme.typography.fontFamily}
//             >
//               Destination
//             </Typography>
//             <Typography
//               variant="h6"
//               // fontSize={{xs: '1rem', sm: '0.8rem', md: '1.3rem'}}
//               color={theme.palette.secondary.main}
//                 fontFamily={theme.typography.fontFamily}
//             >
//               {destination}
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
    

//       <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
//         <Icon src={scheduleIcon} alt="Schedule Icon" />
//         <Box>
//           <Typography
//             variant="h6"
//             // fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}
//             color={theme.palette.common.black}
//               fontFamily={theme.typography.fontFamily}
//           >
//            Date & Time
//           </Typography>
//           <Typography
//             variant="h6"
//             // fontSize={{xs: '1.25rem', sm: '1rem', md: '1.3rem'}}
//             color={theme.palette.secondary.main}
//               fontFamily={theme.typography.fontFamily}
//           >
//             {time}
//           </Typography>
//         </Box>
//       </Box>
      

//       <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
//         <Icon src={Facilities} alt="Facilities Icon" />
//         <Box>
//           <Typography
//             variant="h6"
//             // fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}
//             color={theme.palette.common.black}
//               fontFamily={theme.typography.fontFamily}
//           >
//            Type :
//           </Typography>
//           <Typography
//             variant="h7"
//             // fontSize={{xs: '1.25rem', sm: '1rem', md: '1.3rem'}}
//             color={theme.palette.secondary.main}
//             fontFamily={theme.typography.fontFamily}
//           >
//             {carType}
//           </Typography>
//         </Box>
//       </Box>
    
     
//     </>
//   );
// }

// export default BusDetailsCard;


import { useTheme, Typography, styled, Box } from '@mui/material';
import busIconsource from '../../assets/bus-icon-source.svg';
import busIcondestination from '../../assets/bus-icon-destination.svg';
import arrorIcon from '../../assets/arrowIcon.svg';
import scheduleIcon from '../../assets/schedule-icon.svg';
import Facilities from '../../assets/Facilities.svg';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import getTheme from '../../theme';

const Icon = styled('img')`
  width: 40px;
  height: 40px;
  
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

function BusDetailsCard({ carType, companyName, time, source, destination }) {
 
  const { t ,i18n } = useTranslation();
 const theme = getTheme(i18n.language);
 
  useEffect(() => {
    console.log('Language changed to:', i18n.language);
  }, [i18n.language]);


  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <Icon src={busIconsource} alt={t('busDetails.sourceIconAlt')} />
          <Box>
            <Typography
              variant="h6"
              color={theme.palette.common.black}
              fontFamily={theme.typography.fontFamily}
            >
              {t('busDetails.source')}
            </Typography>
            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              fontFamily={theme.typography.fontFamily}
            >
              {source}
            </Typography>
          </Box>
        </Box>
        <img src={arrorIcon} alt={t('busDetails.arrowIconAlt')} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <Icon src={busIcondestination} alt={t('busDetails.destinationIconAlt')} />
          <Box>
            <Typography
              variant="h6"
              color={theme.palette.common.black}
              fontFamily={theme.typography.fontFamily}
            >
              {t('busDetails.destination')}
            </Typography>
            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              fontFamily={theme.typography.fontFamily}
            >
              {destination}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Icon src={scheduleIcon} alt={t('busDetails.scheduleIconAlt')} />
        <Box>
          <Typography
            variant="h6"
            color={theme.palette.common.black}
            fontFamily={theme.typography.fontFamily}
          >
            {t('busDetails.dateTime')}
          </Typography>
          <Typography
            variant="h6"
            color={theme.palette.secondary.main}
            fontFamily={theme.typography.fontFamily}
          >
            {time}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Icon src={Facilities} alt={t('busDetails.facilitiesIconAlt')} />
        <Box>
          <Typography
            variant="h6"
            color={theme.palette.common.black}
            fontFamily={theme.typography.fontFamily}
          >
            {t('busDetails.type')}
          </Typography>
          <Typography
            variant="h7"
            color={theme.palette.secondary.main}
            fontFamily={theme.typography.fontFamily}
          >
            {carType}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default BusDetailsCard;