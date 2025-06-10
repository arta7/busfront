// import {useTheme, Typography, styled, Box} from '@mui/material';
// import {useOrderStore} from '../../store/orderStore';
// import { useTranslation } from 'react-i18next';
// import getTheme from '../../theme';

// const FareBreakdown = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
//   border-radius: 8px;
//   margin: 2rem 0;
//   padding: 1rem;
//   direction:ltr
// `;

// export default function FareBreakdownCard({price,counts,totalPrice}) {
  
//     const { t, i18n } = useTranslation();
//   const theme = getTheme(i18n.language);
//   // const {price, ticketQuantity} = useOrderStore();
//   return (
//     <FareBreakdown>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//       >
//        <Typography variant="h5"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//         Ticket Price
//         </Typography>
//         <Box sx={{display: 'flex', gap: '2px'}}>
         
//         <Typography variant="h6"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//             {price}
//           </Typography>
//           <Typography>Rial </Typography>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//       >
//        <Typography variant="h5"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//        Ticket Counts
//         </Typography>
//         <Box sx={{display: 'flex', gap: '2px'}}>
//        <Typography variant="h6"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//             {counts}  
//           </Typography>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginTop: '1rem',
//         }}
//       >
//        <Typography variant="h2"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//          End Price
//         </Typography>
//         <Box sx={{display: 'flex', gap: '2px'}}>
         
//           <Typography
//             fontWeight={600}
//           >
//            {price * counts}
//           </Typography>
//          <Typography variant="h6"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}> Rial </Typography>
//         </Box>
//       </Box>
//     </FareBreakdown>
//   );
// }


import { useTheme, Typography, styled, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import getTheme from '../../theme';

// Styled component for Fare Breakdown Card
const FareBreakdown = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 2rem 0;
  padding: 1rem;
  direction: ltr; // Adjust this if you want to support RTL
`;

export default function FareBreakdownCard({ price, counts, totalPrice }) {
  const { t, i18n } = useTranslation();
  const theme = getTheme(i18n.language);

  return (
    <FareBreakdown>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
          {t('fareBreakdown.ticketPrice')} {/* Translated Text */}
        </Typography>
        <Box sx={{ display: 'flex', gap: '2px' }}>
          <Typography variant="h6" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
            {price}
          </Typography>
          <Typography>{t('fareBreakdown.rial')}</Typography> {/* Translated Text */}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
          {t('fareBreakdown.ticketCounts')} {/* Translated Text */}
        </Typography>
        <Box sx={{ display: 'flex', gap: '2px' }}>
          <Typography variant="h6" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
            {counts}  
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem',
        }}
      >
        <Typography variant="h4" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
          {t('fareBreakdown.endPrice')} {/* Translated Text */}
        </Typography>
        <Box sx={{ display: 'flex', gap: '2px' }}>
          <Typography fontWeight={600}>
            {price * counts}
          </Typography>
          <Typography variant="h6" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
            {t('fareBreakdown.rial')} {/* Translated Text */}
          </Typography>
        </Box>
      </Box>
    </FareBreakdown>
  );
}