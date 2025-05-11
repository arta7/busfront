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
        <Typography variant="h6" color={theme.palette.secondary.main}>
        قیمت بلیط
        </Typography>
        <Box sx={{display: 'flex', gap: '2px'}}>
         
          <Typography variant="h6" color={theme.palette.secondary.main}>
            {price}
          </Typography>
          <Typography>ریال </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" color={theme.palette.secondary.main}>
         تعداد بلیط
        </Typography>
        <Box sx={{display: 'flex', gap: '2px'}}>
          <Typography variant="h6" color={theme.palette.secondary.main}>
            {counts}  عدد
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
        <Typography
          variant="h4"
          color={theme.palette.secondary.main}
          sx={{
            fontSize: {xs: '1.25rem', md: '1.5rem'},
            fontWeight: {xs: 600, md: 700},
          }}
        >
          قیمت نهایی
        </Typography>
        <Box sx={{display: 'flex', gap: '2px'}}>
         
          <Typography
            fontWeight={600}
          >
           {price * counts}
          </Typography>
          <Typography fontWeight={600}> ریال </Typography>
        </Box>
      </Box>
    </FareBreakdown>
  );
}
