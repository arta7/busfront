import { Grid, Typography } from '@mui/material';
import BusTicket from '../../components/BusTicket';
import theme from '../../theme';
import { useScreen } from '../../customHooks/useScreen';
import { useEffect, useState, useContext } from 'react';
import { BusTicketType } from '../../types';
import axios from 'axios';
import { BusSearch } from '../../Api/ApiMaster';
import UserContext from './../../UserContext';
import moment from 'moment-jalaali';




let jalaliWeekdayNumber = (dayname)=>{
  switch (dayname) {
    case 'Saturday':
      return 'شنبه';
      break;
      case 'Sunday':
        return 'یک شنبه';
        break;
        case 'Monday':
          return 'دوشنبه';
          break;
          case 'Tuesday':
            return 'سه شنبه';
            break;
            case 'Wednesday':
              return 'چهارشنبه';
              break;
              case 'Thursday':
                return 'پنج شنبه';
                break;
                case 'Friday':
                  return 'جمعه';
                  break;
  
    default:
      break;
  }
};

const BusSchedule = (props) => {
  const currentScreen = useScreen();
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [schedule, setSchedule] = useState<BusTicketType[]>([]);
  const [today, setToday] = useState<Date>(new Date());
  const { userData, setUserData } = useContext(UserContext);
  const [Data, setData] = useState([])
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const getScheduleData = async () => {
      // const res = await axios.get(
      //   `${import.meta.env.VITE_SERVER_URL}/bus/schedule/`,
      //   {
      //     withCredentials: true,
      //   }
      // );
      // if (res.status === 200) {
      //   setSchedule(res.data.schedule);
      //   setToday(new Date(res.data.today));
      //   setSelectedDay(weekDays[today.getDay()]);
      // }

      BusSearch(userData[0].StartPlaceCode, userData[0].EndPlaceCode,
        moment(new Date(userData[0].CurrentDate.toString())).format('jYYYY/jMM/jDD'), userData[0].Token
        , setLoading, setData, setUserData, userData, props)

    };
    getScheduleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid
       container direction="column" alignItems="center"
      >
        
        <Grid
          
          justifyContent="space-between"
          alignItems="center"
          width={'40%'}
          // lg={10}
          sx={{
            // border: '1px solid rgba(0, 0, 0, 0.2)',
            // boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            marginTop: '2.5rem',
            
            // padding: currentScreen === 'xs' ? '1rem' : '1.5rem 3rem',
          }}
          height={60}
        >
         
                  <div style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between', alignItems: 'center', height: '100%', borderTopColor: 'gray', borderTopWidth: 0.5
          ,  display: 'flex',
        }} >

          <button className="dayButton" onClick={() => {


            var today = new Date(userData[0].CurrentDate);
            var tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() - 1);
            const myNextList = [...userData];
            const DatesStep = myNextList;
            DatesStep[0].CurrentDate = tomorrow;
            setUserData(myNextList)
            setLoading(true)
            setData([])
            BusSearch(userData[0].StartPlaceCode, userData[0].EndPlaceCode, moment(new Date(tomorrow)).format('jYYYY/jMM/jDD'), userData[0].Token,
              setLoading, setData, setUserData, userData, props)

          }} style={{
            width: '33%', height: '100%', justifyContent: 'center', alignItems: 'center'
            , borderWidth: 1, paddingTop: 5, borderColor: 'gray', flexDirection: 'column',backgroundColor:'#e6f2ff'
            ,borderTopLeftRadius:'8px',borderBottomLeftRadius:'8px',borderRightWidth:1,display:'flex'
          }}>
           
            <span className="dayButtonText">
            {moment(new Date(userData[0].CurrentDate.toString())).add(-1, 'day').format('jYYYY/jMM/jDD')}
            </span>
            <span className="dayButtonText">
            {jalaliWeekdayNumber(moment(new Date(userData[0].CurrentDate.toString())).add(-1, 'day').format('dddd'))}
            </span>
          </button>

          <button 
          style={{
            width: '34%', height: '100%', justifyContent: 'center',borderColor:'gray'
            , alignItems: 'center', display: 'flex',backgroundColor:'#e6f2ff'
            ,borderBottomWidth:3,borderBottomColor:'green',flexDirection:'column'
          }}
          
          
          >
            <span >
              {moment(new Date(userData[0].CurrentDate.toString())).format('jYYYY/jMM/jDD')}
            </span>
            <span className="dayButtonText">
            {jalaliWeekdayNumber(moment(new Date(userData[0].CurrentDate.toString())).format('dddd'))}
            </span>
          </button>

          <button className="dayButton" onClick={() => {
            var today = new Date(userData[0].CurrentDate);
            var tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
         
            const myNextList = [...userData];
            const DatesStep = myNextList;
            DatesStep[0].CurrentDate = tomorrow;
            setUserData(myNextList)
            setLoading(true)
            setData([])
            BusSearch(userData[0].StartPlaceCode, userData[0].EndPlaceCode, moment(new Date(tomorrow)).format('jYYYY/jMM/jDD'), userData[0].Token, setLoading, setData, setUserData, userData, props)


          }} style={{
            width: '33%', height: '100%', justifyContent: 'center', alignItems: 'center'
            , borderWidth: 1, paddingTop: 5, borderColor: 'gray', flexDirection: 'column',backgroundColor:'#e6f2ff',
            borderTopRightRadius:'8px',borderBottomRightRadius:'8px',borderLeftWidth:1,display:'flex'
          }}>
            <span className="dayButtonText">
            {moment(new Date(userData[0].CurrentDate.toString())).add(1, 'day').format('jYYYY/jMM/jDD')}
            </span>
            <span className="dayButtonText">
            {jalaliWeekdayNumber(moment(new Date(userData[0].CurrentDate.toString())).add(1, 'day').format('dddd'))}
            </span>
            
          </button>
        </div>
        </Grid>
        <Grid container direction="column" marginTop="2rem">
          <Grid item>
            {Data?.searchItems?.map((sche, index) => {
              // if (sche.days.includes(selectedDay)) 
              //   {
              return (
                <BusTicket
                  // checkpoints={sche.checkpoints}
                  price={sche.price}
                  time={sche.timeMove}
                  // disabled={selectedDay !== weekDays[today.getDay()]}
                  seatsLeft={sche.countFreeChairs}
                  key={index}
                  to={sche.destinationCity + ' ' + sche.destinationTerminal}
                  from={sche.originCity}
                  scheduleId={sche.busCode}
                  originCity={sche.originCity}
                  destinationCity={sche.destinationCity}
                  originTerminal={sche.originTerminal}
                  destinationTerminal={sche.destinationTerminal != '' ? sche.destinationTerminal  : sche.destinationCity}
                  carType={sche.carType}
                  companyName={sche.companyName}
                  moveDateTime={sche.moveDateTime}
                  description={sche.description}
                  data={sche}
                  requestNumber={Data?.requestNumber}

                />
              );

            })}
          </Grid>
        </Grid>


      </Grid>
    </>
  );
};

export default BusSchedule;
