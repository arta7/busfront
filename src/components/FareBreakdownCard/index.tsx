import {useTheme, Typography, styled, Box} from '@mui/material';
import {useOrderStore} from '../../store/orderStore';

const FareBreakdown = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 2rem 0;
  padding: 1rem;
  direction:ltr
`;

export default function FareBreakdownCard({price,counts,totalPrice}) {
  const theme = useTheme();
  // const {price, ticketQuantity} = useOrderStore();
  return (
    <FareBreakdown>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
       <Typography variant="h5"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
        Ticket Price
        </Typography>
        <Box sx={{display: 'flex', gap: '2px'}}>
         
        <Typography variant="h6"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
            {price}
          </Typography>
          <Typography>Rial </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
       <Typography variant="h5"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
       Ticket Counts
        </Typography>
        <Box sx={{display: 'flex', gap: '2px'}}>
       <Typography variant="h6"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
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
       <Typography variant="h2"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
         End Price
        </Typography>
        <Box sx={{display: 'flex', gap: '2px'}}>
         
          <Typography
            fontWeight={600}
          >
           {price * counts}
          </Typography>
         <Typography variant="h6"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}> Rial </Typography>
        </Box>
      </Box>
    </FareBreakdown>
  );
}
