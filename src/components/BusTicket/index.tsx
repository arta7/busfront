import {useEffect, useState} from 'react';
import { useTheme,
  Typography,

  Box,
  TextField,
  IconButton,} from '@mui/material';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import BusDetails from '../BusDetails';
import {BusTicketData} from '../../types';
import UserContext from './../../UserContext';
import bus from '../../assets/bus-icon-path.svg';





export default function BusTicket({
  // checkpoints,
  time,
  price,
  seatsLeft,
  from,
  to,
  scheduleId,
  disabled,
  originCity,
  destinationCity,
  originTerminal,
  destinationTerminal,
  carType,
  companyName,
  moveDateTime,
  description,
  data,
  requestNumber,props

}: any) {

 


 
  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: {xs: '1.5rem', sm: '2rem'},
        justifyContent: 'center',
        
       
      }}
      
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: {xs: '100%', lg: '80%'},
          height: {xs: '11rem', sm: '12rem', md: '14rem'},
          borderRadius: 2,
          border: '1px solid rgba(0, 0, 0, 0.2)',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'rgb(1,166,147,0.7)',
          
        }}
        
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            justifyContent: {xs: 'space-around', sm: 'space-evenly'},
            alignItems: 'flex-start',
            height: {xs: '11rem', sm: '12rem', md: '14rem'},
            padding: '0vw 1.5vw',
            
            // backgroundColor:'red'
          }}
        >
        
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              fontWeight: '400',
              fontSize: {xs: '10px', sm: '12px', md: '15px'},
              color: 'rgba(255, 255, 255, 0.9)',
              width:'80%',
              // width: '100%',

            }}
          >
             <Box
                sx={{
                 
                  borderRadius: 2,
                  // minWidth: 'fit-content',
                 
                  padding: '2px 8px',
                  marginRight: {xs: '3px', sm: '8px'},
                  marginBottom: {xs: '1.5rem', sm: '0px'},
                  whiteSpace: 'nowrap',   // Prevent text from wrapping
                    overflow: 'hidden',      // Hide overflow content
                    textOverflow: 'ellipsis',color:'black'
                  
                }}
              >
                 <Typography
            
              fontSize={{xs: '0.5rem', sm: '1rem', md: '1.5rem'}}
            >
              {companyName}
            </Typography>
                
              </Box>
             

          </Box>



          <Box className="time">
            <Typography
              fontWeight={300}
              fontSize={{xs: '1.2rem', sm: '2rem', md: '2.5rem'}}
            >
              {time}
            </Typography>
          </Box>
        </Box>
        <Box style={{width:'40%',height:'100%',}}>
          <Box style={{display:'flex',
          flexDirection:'row-reverse',justifyContent:'space-between',height:'50%',alignItems:'center'}}>

        <Typography
              sx={{
                fontSize: {xs: '23px', sm: '17px', md: '18px'},
                //  justifyContent:'center',alignItems:'center'
              }}
            >
                   {originCity} -  {originTerminal}
            </Typography>
           
            <Typography
              sx={{
                fontSize: {xs: '23px', sm: '17px', md: '18px'},
              }}
            >
              .......  <img
                  src={bus}
                  alt="bus"
                  style={{
                    width: '50px',
                    height: '50px',
                  }}
                /> ......
            </Typography>




            <Typography
              sx={{
                fontSize: {xs: '23px', sm: '17px', md: '18px'},
                //  marginTop: '25%',
              }}
            >
                 {destinationCity} -  {destinationTerminal}
            </Typography>
            </Box>

            <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                   maxWidth: 'fit-content',
                  padding: '2px 8px',
                  marginRight: {xs: '3px', sm: '8px'},
                  marginBottom: {xs: '1.5rem', sm: '0px'},
                  whiteSpace: 'nowrap',   // Prevent text from wrapping
                    overflow: 'hidden',      // Hide overflow content
                    textOverflow: 'ellipsis',color:'black'
                    ,justifyContentL:'center',alignItems:'center'
                  
                }}
              >
                {carType}
              </Box>
     

        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: {xs: 'space-around', sm: 'space-evenly'},
            height: {xs: '11rem', sm: '12rem', md: '14rem'},
            alignItems: 'flex-end',
            padding: '0vw 1.5vw',
            marginRight: {xs: '0.3rem', sm: '0rem'},
          }}
        >
          <Box className="Price" sx={{display: 'flex'}}>
            <Typography
              sx={{
                fontSize: {xs: '20px', sm: '27px', md: '30px'},
                paddingRight:1
                // marginTop: '1.4vw',
              }}
            >
                ریال  
            </Typography>
            <Typography
              className="bus--price"
              sx={{
                fontStyle: 'normal',
                // fontWeight: '400',
                fontSize: {xs: '20px', sm: '27px', md: '30px'},
                color: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              {price}
            </Typography>
          </Box>
          
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontWeight: '400',
              fontSize: {xs: '13px', sm: '17px', md: '19px'},
              color:  seatsLeft  > 3 ? 'rgba(0, 0, 0, 0.7)' : 'red',
            }}
          >
           باقیمانده  {seatsLeft}  
          </Typography>
          <BusDetails
            from={from}
            to={destinationCity}
            time={moveDateTime}
            disabled={seatsLeft  > 0 ? false:true}
            scheduleId={scheduleId}
            carType={carType}
            companyName={companyName}
            description={description}
            data ={data}
            requestNumber={requestNumber}
          />
          
        </Box>
      </Box>
    </Box>
  );
}
