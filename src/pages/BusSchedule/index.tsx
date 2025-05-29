// // import { Grid, Typography } from '@mui/material';
// // import BusTicket from '../../components/BusTicket';
// // import theme from '../../theme';
// // import { useScreen } from '../../customHooks/useScreen';
// // import { useEffect, useState, useContext } from 'react';
// // import { BusTicketType } from '../../types';
// // import axios from 'axios';
// // import { BusSearch } from '../../Api/ApiMaster';
// // import UserContext from './../../UserContext';
// // import moment from 'moment-jalaali';

// // import Skeleton from '@mui/material/Skeleton';
// // import Stack from '@mui/material/Stack';


// // let jalaliWeekdayNumber = (dayname) => {
// //   switch (dayname) {
// //     case 'Saturday':
// //       return 'شنبه';
// //       break;
// //     case 'Sunday':
// //       return 'یک شنبه';
// //       break;
// //     case 'Monday':
// //       return 'دوشنبه';
// //       break;
// //     case 'Tuesday':
// //       return 'سه شنبه';
// //       break;
// //     case 'Wednesday':
// //       return 'چهارشنبه';
// //       break;
// //     case 'Thursday':
// //       return 'پنج شنبه';
// //       break;
// //     case 'Friday':
// //       return 'جمعه';
// //       break;

// //     default:
// //       break;
// //   }
// // };

// // const BusSchedule = (props) => {
// //   const currentScreen = useScreen();
// //   const [selectedDay, setSelectedDay] = useState<string>('');
// //   const [schedule, setSchedule] = useState<BusTicketType[]>([]);
// //   const [today, setToday] = useState<Date>(new Date());
// //   const { userData, setUserData } = useContext(UserContext);
// //   const [Data, setData] = useState([])
// //   const [Loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const getScheduleData = async () => {
// //       // const res = await axios.get(
// //       //   `${import.meta.env.VITE_SERVER_URL}/bus/schedule/`,
// //       //   {
// //       //     withCredentials: true,
// //       //   }
// //       // );
// //       // if (res.status === 200) {
// //       //   setSchedule(res.data.schedule);
// //       //   setToday(new Date(res.data.today));
// //       //   setSelectedDay(weekDays[today.getDay()]);
// //       // }

// //       BusSearch(userData[0].StartPlaceCode, userData[0].EndPlaceCode,
// //         moment(new Date(userData[0].CurrentDate.toString())).format('jYYYY/jMM/jDD'), userData[0].Token
// //         , setLoading, setData, setUserData, userData, props)

// //     };
// //     getScheduleData();
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);

// //   return (
// //     <>
// //       <Grid
// //         container direction="column" alignItems="center"
// //       >

// //         <Grid

// //           justifyContent="space-between"
// //           alignItems="center"
// //           width={'40%'}
// //           // lg={10}
// //           sx={{
// //             // border: '1px solid rgba(0, 0, 0, 0.2)',
// //             // boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
// //             borderRadius: 2,
// //             marginTop: '2.5rem',

// //             // padding: currentScreen === 'xs' ? '1rem' : '1.5rem 3rem',
// //           }}
// //           height={60}
// //         >

// //           <div style={{
// //             flexDirection: 'row',
// //             width: '100%',
// //             justifyContent: 'space-between', alignItems: 'center', height: '100%', borderTopColor: 'gray', borderTopWidth: 0.5
// //             , display: 'flex',
// //           }} >

// //             <button className="dayButton" disabled={(new Date(userData[0].CurrentDate.toString())) < (new Date())} onClick={() => {


// //               var today = new Date(userData[0].CurrentDate);
// //               var tomorrow = new Date(today);
// //               tomorrow.setDate(today.getDate() - 1);
// //               const myNextList = [...userData];
// //               const DatesStep = myNextList;
// //               DatesStep[0].CurrentDate = tomorrow;
// //               setUserData(myNextList)
// //               setLoading(true)
// //               setData([])
// //               BusSearch(userData[0].StartPlaceCode, userData[0].EndPlaceCode, moment(new Date(tomorrow)).format('jYYYY/jMM/jDD'), userData[0].Token,
// //                 setLoading, setData, setUserData, userData, props)

// //             }} style={{
// //               width: '33%', height: '100%', justifyContent: 'center', alignItems: 'center'
// //               , borderWidth: 1, paddingTop: 5, borderColor: 'gray', flexDirection: 'column', backgroundColor: 'rgb(1,166,147,1)'
// //               , borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', borderRightWidth: 1, display: 'flex'
// //             }}>

// //               <span className="dayButtonText">
// //                 {moment(new Date(userData[0].CurrentDate.toString())).add(-1, 'day').format('jYYYY/jMM/jDD')}
// //               </span>
// //               <span className="dayButtonText">
// //                 {jalaliWeekdayNumber(moment(new Date(userData[0].CurrentDate.toString())).add(-1, 'day').format('dddd'))}
// //               </span>
// //             </button>

// //             <button
// //               style={{
// //                 width: '34%', height: '100%', justifyContent: 'center', borderColor: 'gray'
// //                 , alignItems: 'center', display: 'flex', backgroundColor: 'rgb(1,166,147,1)'
// //                 , borderBottomWidth: 3, borderBottomColor: 'green', flexDirection: 'column'
// //               }}


// //             >
// //               <span >
// //                 {moment(new Date(userData[0].CurrentDate.toString())).format('jYYYY/jMM/jDD')}
// //               </span>
// //               <span className="dayButtonText">
// //                 {jalaliWeekdayNumber(moment(new Date(userData[0].CurrentDate.toString())).format('dddd'))}
// //               </span>
// //             </button>

// //             <button className="dayButton" onClick={() => {
// //               var today = new Date(userData[0].CurrentDate);
// //               var tomorrow = new Date(today);
// //               tomorrow.setDate(today.getDate() + 1);

// //               const myNextList = [...userData];
// //               const DatesStep = myNextList;
// //               DatesStep[0].CurrentDate = tomorrow;
// //               setUserData(myNextList)
// //               setLoading(true)
// //               setData([])
// //               BusSearch(userData[0].StartPlaceCode, userData[0].EndPlaceCode, moment(new Date(tomorrow)).format('jYYYY/jMM/jDD'), userData[0].Token, setLoading, setData, setUserData, userData, props)


// //             }} style={{
// //               width: '33%', height: '100%', justifyContent: 'center', alignItems: 'center'
// //               , borderWidth: 1, paddingTop: 5, borderColor: 'gray', flexDirection: 'column', backgroundColor: 'rgb(1,166,147,1)',
// //               borderTopRightRadius: '8px', borderBottomRightRadius: '8px', borderLeftWidth: 1, display: 'flex'
// //             }}>
// //               <span className="dayButtonText">
// //                 {moment(new Date(userData[0].CurrentDate.toString())).add(1, 'day').format('jYYYY/jMM/jDD')}
// //               </span>
// //               <span className="dayButtonText">
// //                 {jalaliWeekdayNumber(moment(new Date(userData[0].CurrentDate.toString())).add(1, 'day').format('dddd'))}
// //               </span>

// //             </button>
// //           </div>
// //         </Grid>
// //         <Grid container direction="column" marginTop="2rem">
// //           <Grid item>

// //             {
// //             !Loading ? Data?.searchItems?.map((sche, index) => {
// //               // if (sche.days.includes(selectedDay)) 
// //               //   {
// //               return (
// //                 <BusTicket
// //                   // checkpoints={sche.checkpoints}
// //                   price={sche.price}
// //                   time={sche.timeMove}
// //                   // disabled={selectedDay !== weekDays[today.getDay()]}
// //                   seatsLeft={sche.countFreeChairs}
// //                   key={index}
// //                   to={sche.destinationCity + ' ' + sche.destinationTerminal}
// //                   from={sche.originCity}
// //                   scheduleId={sche.busCode}
// //                   originCity={sche.originCity}
// //                   destinationCity={sche.destinationCity}
// //                   originTerminal={sche.originTerminal}
// //                   destinationTerminal={sche.destinationTerminal != '' ? sche.destinationTerminal : sche.destinationCity}
// //                   carType={sche.carType}
// //                   companyName={sche.companyName}
// //                   moveDateTime={sche.moveDateTime}
// //                   description={sche.description}
// //                   data={sche}
// //                   requestNumber={Data?.requestNumber}

// //                 />
// //               );

// //             })
// //               :
        
// //                <Stack spacing={1} style={{justifyContent:'center',alignItems:'center'}}>
// //       {/* For variant="text", adjust the height via font-size */}
    

// //       {/* For other variants, adjust the size with `width` and `height` */}
      
// //       <Skeleton variant="rectangular" width={'80%'} height={200} />

// //          <Skeleton variant="rectangular" width={'80%'} height={200} />

// //             <Skeleton variant="rectangular" width={'80%'} height={200} />
// //       {/* <Skeleton variant="rounded" width={210} height={60} /> */}
// //     </Stack>
           
// //             }

// //           </Grid>
// //         </Grid>


// //       </Grid>
// //     </>
// //   );
// // };

// // export default BusSchedule;


// import { Grid, Typography, useMediaQuery, Button, Box } from '@mui/material';
// import BusTicket from '../../components/BusTicket';
// import theme from '../../theme';
// import { useScreen } from '../../customHooks/useScreen';
// import { useEffect, useState, useContext } from 'react';
// import { BusTicketType } from '../../types';
// import axios from 'axios';
// import { BusSearch } from '../../Api/ApiMaster';
// import UserContext from './../../UserContext';
// import moment from 'moment-jalaali';
// import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';

// const jalaliWeekdayNumber = (dayname) => {
//   const days = {
//     'Saturday': 'شنبه',
//     'Sunday': 'یک شنبه',
//     'Monday': 'دوشنبه',
//     'Tuesday': 'سه شنبه',
//     'Wednesday': 'چهارشنبه',
//     'Thursday': 'پنج شنبه',
//     'Friday': 'جمعه'
//   };
//   return days[dayname] || '';
// };

// const BusSchedule = (props) => {
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const [selectedDay, setSelectedDay] = useState<string>('');
//   const [schedule, setSchedule] = useState<BusTicketType[]>([]);
//   const [today, setToday] = useState<Date>(new Date());
//   const { userData, setUserData } = useContext(UserContext);
//   const [Data, setData] = useState([]);
//   const [Loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getScheduleData = async () => {
//       BusSearch(
//         userData[0].StartPlaceCode, 
//         userData[0].EndPlaceCode,
//         moment(new Date(userData[0].CurrentDate.toString())).format('jYYYY/jMM/jDD'), 
//         userData[0].Token,
//         setLoading, 
//         setData, 
//         setUserData, 
//         userData, 
//         props
//       );
//     };
//     getScheduleData();
//   }, []);

//   const handleDateChange = (daysToAdd) => {
//     const today = new Date(userData[0].CurrentDate);
//     const newDate = new Date(today);
//     newDate.setDate(today.getDate() + daysToAdd);

//     const myNextList = [...userData];
//     const DatesStep = myNextList;
//     DatesStep[0].CurrentDate = newDate;
//     setUserData(myNextList);
//     setLoading(true);
//     setData([]);
    
//     BusSearch(
//       userData[0].StartPlaceCode, 
//       userData[0].EndPlaceCode, 
//       moment(newDate).format('jYYYY/jMM/jDD'), 
//       userData[0].Token,
//       setLoading, 
//       setData, 
//       setUserData, 
//       userData, 
//       props
//     );
//   };

//   return (
//     <Box sx={{ px: isMobile ? 1 : 3, py: 2 }}>
//       {/* Date Selector */}
//       <Grid container justifyContent="center" sx={{ mt: isMobile ? 1 : 3 }}>
//         <Grid item xs={12} md={8} lg={6}>
//           <Box sx={{ 
//             display: 'flex', 
//             height: 60,
//             borderRadius: 1,
//             overflow: 'hidden',
//             boxShadow: 1
//           }}>
//             <Button
//               fullWidth
//               disabled={new Date(userData[0].CurrentDate.toString()) < new Date()}
//               onClick={() => handleDateChange(-1)}
//               sx={{
//                 bgcolor: 'rgba(1,166,147,0.5)',
//                 color: 'black',
//                 borderRadius: 0,
//                 borderRight: '1px solid rgba(255,255,255,0.2)',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 py: 1,
//                 '&:hover': { bgcolor: 'rgb(1,146,127)' }
//               }}
//             >
//              <Typography variant="h8"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//                 {moment(new Date(userData[0].CurrentDate.toString())).add(-1, 'day').format('YYYY/MM/DD')}
//               </Typography>
//             <Typography variant="h8"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//                 {(moment(new Date(userData[0].CurrentDate.toString())).add(-1, 'day').format('dddd'))}
//               </Typography>
//             </Button>

//             <Button
//               fullWidth
//               sx={{
//                 bgcolor: 'rgba(1,166,147,0.8)',
//                 color: 'black',
//                 borderRadius: 0,
//                 borderBottom: '3px solid',
//                 borderColor: 'white',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 py: 1
//               }}
//             >
//             <Typography variant="h8"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//                 {moment(new Date(userData[0].CurrentDate.toString())).format('YYYY/MM/DD')}
//               </Typography>
//              <Typography variant="h8"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//                 {(moment(new Date(userData[0].CurrentDate.toString())).format('dddd'))}
//               </Typography>
//             </Button>

//             <Button
//               fullWidth
//               onClick={() => handleDateChange(1)}
//               sx={{
//                 bgcolor: 'rgba(1,166,147,0.5)',
//                 color: 'black',
//                 borderRadius: 0,
//                 borderLeft: '1px solid rgba(255,255,255,0.2)',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 py: 1,
//                 '&:hover': { bgcolor: 'rgb(1,146,127)' }
//               }}
//             >
//               <Typography variant="h8"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//                 {moment(new Date(userData[0].CurrentDate.toString())).add(1, 'day').format('YYYY/MM/DD')}
//               </Typography>
//           <Typography variant="h8"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//                 {(moment(new Date(userData[0].CurrentDate.toString())).add(1, 'day').format('dddd'))}
//               </Typography>
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>

//       {/* Bus Tickets */}
//       <Grid container sx={{ mt: isMobile ? 2 : 4 }}>
//         {!Loading ? (
//           Data?.searchItems?.map((sche, index) => (
//             <Grid item xs={12} key={index} sx={{ mb: 2, px: isMobile ? 0 : 2 }}>
//               <BusTicket
//                 price={sche.price}
//                 time={sche.timeMove}
//                 seatsLeft={sche.countFreeChairs}
//                 to={`${sche.destinationCity} ${sche.destinationTerminal}`}
//                 from={sche.originCity}
//                 scheduleId={sche.busCode}
//                 originCity={sche.originCity}
//                 destinationCity={sche.destinationCity}
//                 originTerminal={sche.originTerminal}
//                 destinationTerminal={sche.destinationTerminal || sche.destinationCity}
//                 carType={sche.carType}
//                 companyName={sche.companyName}
//                 moveDateTime={sche.moveDateTime}
//                 description={sche.description}
//                 data={sche}
//                 requestNumber={Data?.requestNumber}
//               />
//             </Grid>
//           ))
//         ) : (
//           <Grid item xs={12}>
//             <Stack spacing={2} sx={{ px: isMobile ? 1 : 4 }}>
//               {[1, 2, 3].map((item) => (
//                 <Skeleton 
//                   key={item} 
//                   variant="rectangular" 
//                   width="100%" 
//                   height={isMobile ? 150 : 200} 
//                   sx={{ borderRadius: 2 }}
//                 />
//               ))}
//             </Stack>
//           </Grid>
//         )}
//       </Grid>
//     </Box>
//   );
// };

// export default BusSchedule;


import { Grid, Typography, useMediaQuery, Button, Box } from '@mui/material';
import BusTicket from '../../components/BusTicket';
import theme from '../../theme';
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
  const isPersian = i18n.language === 'fa';

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