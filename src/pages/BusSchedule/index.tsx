
import { Grid, Typography, useMediaQuery, Button, Box } from '@mui/material';
import BusTicket from '../../components/BusTicket';
import getTheme from '../../theme';
import { useScreen } from '../../customHooks/useScreen';
import { useEffect, useState, useContext } from 'react';
import { BusTicketType } from '../../types';
import axios from 'axios';
import { BusSearch } from '../../Api/ApiMaster';
import UserContext from './../../UserContext';
import moment from 'moment-jalaali';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';

const BusSchedule = (props) => {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [schedule, setSchedule] = useState<BusTicketType[]>([]);
  const [today, setToday] = useState<Date>(new Date());
  const { userData, setUserData } = useContext(UserContext);
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const isPersian = ['fa', 'ar', 'pa'].includes(i18n.language ) ;
  //i18n.language === 'fa';
    const theme = getTheme(i18n.language);

  // تابع تبدیل نام روزهای هفته
  const jalaliWeekdayNumber = (dayname) => {
    const days = {
      'Saturday': t('busSchedule.days.saturday'),
      'Sunday': t('busSchedule.days.sunday'),
      'Monday': t('busSchedule.days.monday'),
      'Tuesday': t('busSchedule.days.tuesday'),
      'Wednesday': t('busSchedule.days.wednesday'),
      'Thursday': t('busSchedule.days.thursday'),
      'Friday': t('busSchedule.days.friday')
    };
    return days[dayname] || '';
  };

  useEffect(() => {
    const getScheduleData = async () => {
      BusSearch(
        userData[0].StartPlaceCode, 
        userData[0].EndPlaceCode,
        // isPersian 
        //   ? 
          moment(new Date(userData[0].CurrentDate.toString())).format('jYYYY/jMM/jDD'),
          // : moment(new Date(userData[0].CurrentDate.toString())).format('YYYY/MM/DD'), 
        userData[0].Token,
        setLoading, 
        setData, 
        setUserData, 
        userData, 
        props
      );
    };
    getScheduleData();
  }, [isPersian]);

  const handleDateChange = (daysToAdd) => {
    const today = new Date(userData[0].CurrentDate);
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + daysToAdd);

    const myNextList = [...userData];
    const DatesStep = myNextList;
    DatesStep[0].CurrentDate = newDate;
    setUserData(myNextList);
    setLoading(true);
    setData([]);
    
    BusSearch(
      userData[0].StartPlaceCode, 
      userData[0].EndPlaceCode, 
      // isPersian 
      //   ? 
        moment(newDate).format('jYYYY/jMM/jDD'),
        // : moment(newDate).format('YYYY/MM/DD'), 
      userData[0].Token,
      setLoading, 
      setData, 
      setUserData, 
      userData, 
      props
    );
  };

  // تابع فرمت تاریخ بر اساس زبان انتخاب شده
  const formatDate = (date, format) => {
    return isPersian 
      ? moment(date).format(format)
      : moment(date).locale('en').format(format);
  };

  return (
    <Box sx={{ px: isMobile ? 1 : 3, py: 2 }} >
      {/* Date Selector */}
      <Grid container justifyContent="center" sx={{ mt: isMobile ? 1 : 3 }}>
        <Grid item xs={12} md={8} lg={6}>
          <Box sx={{ 
            display: 'flex', 
            height: 60,
            borderRadius: 1,
            overflow: 'hidden',
            boxShadow: 1
          }}>
            <Button
              fullWidth
              disabled={new Date(userData[0].CurrentDate.toString()) < new Date()}
              onClick={() => handleDateChange(-1)}
              sx={{
                bgcolor: 'rgba(1,166,147,0.5)',
                color: 'black',
                borderRadius: 0,
                borderRight: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                flexDirection: 'column',
                py: 1,
                '&:hover': { bgcolor: 'rgb(1,146,127)' }
              }}
            >
              <Typography variant="body2" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
                  {moment(new Date(userData[0].CurrentDate.toString())).add(-1, 'day').format(isPersian ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                {/* {formatDate((new Date(userData[0].CurrentDate.toString())), isPersian ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')} */}
              </Typography>
              <Typography variant="caption" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
                {jalaliWeekdayNumber((moment(new Date(userData[0].CurrentDate.toString())).add(-1, 'day').format('dddd')))}
              </Typography>
            </Button>

            <Button
              fullWidth
              sx={{
                bgcolor: 'rgba(1,166,147,0.8)',
                color: 'black',
                borderRadius: 0,
                borderBottom: '3px solid',
                borderColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                py: 1
              }}
            >
              <Typography variant="body2" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
                {formatDate(new Date(userData[0].CurrentDate.toString()), isPersian ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
              </Typography>
              <Typography variant="caption" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
                {jalaliWeekdayNumber((moment(new Date(userData[0].CurrentDate.toString())).format('dddd')))}
              </Typography>
            </Button>

            <Button
              fullWidth
              onClick={() => handleDateChange(1)}
              sx={{
                bgcolor: 'rgba(1,166,147,0.5)',
                color: 'black',
                borderRadius: 0,
                borderLeft: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                flexDirection: 'column',
                py: 1,
                '&:hover': { bgcolor: 'rgb(1,146,127)' }
              }}
            >
              <Typography variant="body2" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
                {/* {formatDate(new Date(userData[0].CurrentDate.toString()), isPersian ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')} */}
                 {(moment(new Date(userData[0].CurrentDate.toString())).add(1, 'day').format(isPersian ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD'))}
              </Typography>
              <Typography variant="caption" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
               {jalaliWeekdayNumber((moment(new Date(userData[0].CurrentDate.toString())).add(1, 'day').format('dddd')))}
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Bus Tickets */}
      <Grid container sx={{ mt: isMobile ? 2 : 4 }}>
        {!Loading ? (
          Data?.searchItems?.map((sche, index) => (
            <Grid item xs={12} key={index} sx={{ mb: 2, px: isMobile ? 0 : 2 }}>
              <BusTicket
                price={sche.price}
                time={sche.timeMove}
                seatsLeft={sche.countFreeChairs}
                to={`${sche.destinationCity} ${sche.destinationTerminal}`}
                from={sche.originCity}
                scheduleId={sche.busCode}
                originCity={sche.originCity}
                destinationCity={sche.destinationCity}
                originTerminal={sche.originTerminal}
                destinationTerminal={sche.destinationTerminal || sche.destinationCity}
                carType={sche.carType}
                companyName={sche.companyName}
                moveDateTime={sche.moveDateTime}
                description={sche.description}
                data={sche}
                requestNumber={Data?.requestNumber}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Stack spacing={2} sx={{ px: isMobile ? 1 : 4 }}>
              {[1, 2, 3].map((item) => (
                <Skeleton 
                  key={item} 
                  variant="rectangular" 
                  width="100%" 
                  height={isMobile ? 150 : 200} 
                  sx={{ borderRadius: 2 }}
                />
              ))}
            </Stack>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default BusSchedule;