import { useEffect, useState } from 'react';
import {
  useTheme,
  Typography,
  Drawer,
  Button,
  styled,
  Box,
  TextField,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { BusDetailsType } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useOrderStore } from '../../store/orderStore';
import React from 'react';
import BusDetailsCard from '../BusDetailsCard';
import FareBreakDownCard from '../FareBreakdownCard';
import { useAuthStore } from '../../store/authStore';
import { notify } from '../../utils/notify';
import descriptions from '../../assets/description.svg';
import company from '../../assets/company.svg';
import BusSeats from './BusSeats';
import UserContext from './../../UserContext';
import { BusDetailss, busPreReserves } from '../../Api/ApiMaster';
import { Height } from '@mui/icons-material';
import FlatList from 'flatlist-react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useForm, Controller } from 'react-hook-form';

import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const Details = styled(Box)`
  display: flex;
 
  gap: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 2rem 0;
  padding: 1.5rem;
`;
const Icon = styled('img')`
  width: 40px;
  height: 40px;
  
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
   
  }
  
`;
const PassengersContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 2rem 0;
  padding: 1rem;
  min-height: 20vh;
`;

const CustomTextField = styled(TextField)`
  .MuiInput-underline:after {
    border-bottom-color: rgba(0, 0, 0, 0.5);
  }

  .MuiFormLabel-root.Mui-focused {
    color: rgba(0, 0, 0, 0.7);
  }

  .MuiFormLabel-root {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    .MuiFormLabel-root {
      font-size: 12px;
    }
  }

  margin: 0;
`;

const CrossIcon = styled(CloseIcon)`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 2px;
`;

const AddPassengerIcon = styled(AddIcon)`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 2px;
`;

const AddPassengerButton = styled(Button)`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  min-width: max-content;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
    background-color: transparent;
  }
`;

const BusDetails = ({ time, from, to, disabled, scheduleId, carType, companyName, description, data, requestNumber, props }: BusDetailsType) => {
  const addPassenger = useOrderStore(state => state.addPassenger);
  const { passengerDetail, removePassenger } = useOrderStore();
  const theme = useTheme();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAddingPassenger, setIsAddingPassenger] = useState(false);
  const { isAuth } = useAuthStore();

  const { userData, setUserData } = React.useContext(UserContext);
  const [Loading, setLoading] = useState(true);
  const [ReturnData, setReturnData] = useState(true);
  const [Data, setData] = useState([])
  const [BusPerson, setBusPerson] = useState([])
  const [ReturnLinking, setReturnLinking] = useState('')





  const schema = yup.object().shape({
   

    items: yup.array().of(
      yup.object().shape({
        name: yup
          .string()
          .required('نام را وارد کنید'),
        family: yup
          .string()
          .required('نام خانوادگی را وارد کنید'),
        mobile: yup
          .string().min(11, 'شماره موبایل باید 11 عدد باشد')
          .required('شماره موبایل را وارد کنید'),
        code: yup
          .string().min(10, 'کد ملی باید 10 کاراکتر باشد')
          .required('کد ملی را وارد کنید')

      })
    )
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),

    initialValues: {
      // Initial values for the array
      items: BusPerson
      //   name: '', family: '', mobile: '', birthDate: '', codemelli: ''
      // ... other initial items

    }

  });

  const onPressSend = () => {

    {
      var passengers = []
      for (let i = 0; i < BusPerson.length; i++) {
        passengers.push({
          "firstName": BusPerson[i].name,
          "lastName": BusPerson[i].family,
          "nationalIdentification": BusPerson[i].code,
          "seatNumber": BusPerson[i].chairNumber,
          "birthDate": BusPerson[i].date,
          "gender": BusPerson[i].gender
        })

      }
      console.log('passengers', passengers)
      var telephone = { "phoneNumber": BusPerson[0].mobile };
      var contact = { "name": "", "email": "" };
      var clientUserTelephone = { "phoneNumber": BusPerson[0].mobile }
      var clientUserEmail = "";


      busPreReserves(requestNumber, data?.sourceCode, data?.busCode, userData[0].Token,
        passengers, data.price * BusPerson.length, telephone,
        contact, clientUserTelephone, clientUserEmail, setLoading, {
        headers: {
          'accept': 'text/plain',
          "Access-Control-Allow-Origin": "*",
          'Authorization': userData[0]?.Token
        }
      }, setReturnLinking, props)

    }

  };



  const drawerstyle = {
    width: { xs: '100%', sm: '66.6667%' },
    padding: '2rem',
    direction: 'rtl',
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handleAddPassenger = (event: React.FormEvent) => {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    const emailID = input.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailID)) {
      notify('Invalid email address', 'error');
      return;
    }

    if (
      emailID !== '' &&
      passengerDetail.length < 4 &&
      !passengerDetail.some(p => p.emailID === emailID) &&
      !emailID.includes(' ')
    ) {
      addPassenger(emailID);
      input.value = '';
      setIsAddingPassenger(false);
      useOrderStore.setState(state => ({
        ticketQuantity: state.ticketQuantity + 1,
      }));
    }
  };

  const handleRemovePassenger = (emailID: string) => {
    removePassenger(emailID);
    useOrderStore.setState(state => ({
      ticketQuantity: state.ticketQuantity - 1,
    }));
  };



  useEffect(() => {
    // console.log('request number',requestNumber)
    // console.log('data',data.sourceCode)
    // if(isDrawerOpen)
    {
       console.log('requestNumber', data)
      BusDetailss(requestNumber, data?.sourceCode, data?.busCode,
        userData[0].Token, setLoading, setData, props, setReturnData)
    }
  }, [])


  const renderPerson = (item, index) => {
    const itemErrors =   errors.items?.[index];
    // const { errors } = control;
    // console.log('item',item)
    return (
      <div key={index} style={{
        width: '100%', height: 'auto', padding: 10,
        backgroundColor: 'rgba(190,240,250,0.5)', borderRadius: 10, borderWidth: 0.5, marginBottom: '3%'
      }}
      >
        <div>
          <Typography style={{
            color: 'black', fontSize: '12'
            // , fontFamily: Fonts.Poppins_Italic 
          }}>مسافر صندلی  {item.chairNumber} :  </Typography>
        </div>
        
        <div style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, alignItems: 'center',display:'flex' }}>
          <div style={{
            width: '40%', height: 70, color: 'black',
            marginRight: '2%',
          }}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}

              name={`items.${index}.name`}
              // name={`items.${index}.name`}

              //   error={error}
              render={({ field: { onChange, value } }) => (
                <>
                  <TextField
                    style={{
                      height: 50, borderRadius: 10, textAlign: 'right',width:'98%'
                      //    , fontFamily: Fonts.Poppins_Italic 
                    }}
                    onChange={(text) => {

                      const myNextList = [...BusPerson];
                      const DatesStep = myNextList;
                      console.log('DatesStep', DatesStep)
                      const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                      seatToUpdate[0].name = text.target.value;
                      setBusPerson(myNextList)
                     
                      onChange(text)
                    }}
                    value={value}
                    // onChangeText={onChange}
                    // mode='outlined'
                    label={'نام '}
                  // placeholderTextColor={'black'}
                  />


                </>

              )}


            />
            {itemErrors?.name && <Typography style={{ color: 'red' }}>* {itemErrors.name.message}</Typography>}
          </div>
          <div style={{
            width: '55%', height: 70, color: 'black',
          }}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name={`items.${index}.family`}
              render={({ field: { onChange, value } }) => (

                <TextField
                  style={{ height: 50, color: 'black', borderRadius: 10, textAlign: 'right',width:'98%'}}
                  onChange={(text) => {
                    const myNextList = [...BusPerson];
                    const DatesStep = myNextList;
                    console.log('DatesStep', DatesStep)
                    const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                    seatToUpdate[0].family = text.target.value;
                    setBusPerson(myNextList)
                    console.log('BusPerson', BusPerson)
                    onChange(text)

                  }}
                  value={item.family}
                  // mode='outlined'
                  label={'نام خانوادگی '}
                // placeholderTextColor={'black'}
                />

              )}

            />

            {itemErrors?.family && <Typography style={{
              color: 'red'
              //, fontFamily: Fonts.Poppins_Italic 
            }}>* {itemErrors.family.message}</Typography>}
          </div>


        </div>



        <div style={{ padding: 5, justifyContent: 'center', alignItems: 'center' ,flexDirection:'row',display:'flex'}}>

        <div style={{
            width: '40%', height: 70, color: 'black',
            marginRight: '2%',
          }}>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                style={{ width: '98%', height: 50, color: 'black', borderRadius: 10, textAlign: 'right'}}
                onChange={(text) => {
                  const myNextList = [...BusPerson];
                  const DatesStep = myNextList;
                  console.log('DatesStep', DatesStep)
                  const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                  seatToUpdate[0].mobile = text.target.value;
                  setBusPerson(myNextList)
                  
                  onChange(text)
                }}
                // mode='outlined'
                value={item.mobile}
                label={'شماره موبایل'}
                // placeholderTextColor={'black'}
                 type='number'
              />
            )}
            name={`items.${index}.mobile`}
          />


          {itemErrors?.mobile && (<Typography style={{
            color: 'red', textAlign: 'right'
            // , fontFamily: Fonts.Poppins_Italic 
          }}>* {itemErrors?.mobile.message}</Typography>)}

</div>

<div style={{
          width: '55%', height: 70, color: 'black',
          marginRight: '2%'
          }}>

<Controller
  control={control}
  rules={{
    required: true,
  }}
  render={({ field: { onChange, value } }) => (
    <Button style={{ padding: 5, justifyContent: 'center', alignItems: 'center',width: '98%', }}
      onClick={() => { setDatePickerVisibility({ status: true, id: item.chairNumber }) }}>
      <TextField
        style={{  height: 50, color: 'black', borderRadius: 10, textAlign: 'center' }}
        onChange={(text) => {

          onChange(text)
        }}
        value={item.date}
        disabled={false}
        label={'تاریخ تولد'}
      // mode='outlined'
      // placeholderTextColor={'black'}
      />
    </Button>
  )}

  name={`items.${index}.date`}
/>
{
  itemErrors?.date && (
    <Typography style={{
      color: 'red', textAlign: 'right'
      // , fontFamily: Fonts.Poppins_Italic
    }}>* {itemErrors.date.message}</Typography>
  )
}

</div>

        </div>
        <div style={{ flexDirection: 'row', justifyContent: 'space-between',
          padding: 5, alignItems: 'center' ,display:'flex'}}>

 

          <div style={{ width: '55%', height: 50, marginRight: '2%', }}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}

              render={({ field: { onChange, value } }) => (
                <TextField
                  style={{ height: 50, color: 'black', borderRadius: 10, textAlign: 'right',width:'98%' }}
                  onChange={(text) => {
                    const myNextList = [...BusPerson];
                    const DatesStep = myNextList;
                    const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                    seatToUpdate[0].code = text.target.value;
                    setBusPerson(myNextList)
                    onChange(text)
                  }}
                  value={item.code}
                  // mode='outlined'
                  label={'کد ملی'}
                  // placeholderTextColor={'black'}
                  type='number'
                // ={10}
                />
              )}

              name={`items.${index}.code`}
            />

            {
              itemErrors?.code && (
                <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <Typography style={{
                    color: 'red', textAlign: 'right'
                    // , fontFamily: Fonts.Poppins_Italic  
                  }}>* {itemErrors.code.message}</Typography>
                </div>
              )
            }

          </div>

          <div style={{ width: '30%', height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={item.gender}
              style={{width:'98%',color:'black'}}
              label="جنسیت"
              
              onChange={(itemValue, itemIndex) => {
                const myNextList = [...BusPerson];
                const DatesStep = myNextList;
                const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                seatToUpdate[0].gender = itemValue.target.value;
                setBusPerson(myNextList)
              }
              }
            >


              <MenuItem value="2"> آقا</MenuItem>
              <MenuItem value="3">خانم</MenuItem>
            </Select>
          </div>
        </div>


      </div >
    )
  }

// const renderPerson = (item, index) => {
//   const itemErrors = errors.items?.[index];

//   return (
//     <div key={index} style={{
//       width: '100%', height: 'auto', padding: 10,
//       backgroundColor: 'rgba(190,240,250,0.5)', borderRadius: 10, borderWidth: 0.5, marginBottom: '3%'
//     }}
//     >
//       <div>
//         <Typography style={{
//           color: 'black', fontSize: '12'
//         }}>مسافر صندلی  {item.chairNumber} :  </Typography>
//       </div>
//       <div style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, alignItems: 'center', display: 'flex' }}>
//         <div style={{
//           width: '40%', height: 70, color: 'black',
//           marginRight: '2%',
//         }}>
//           <Controller
//             control={control}
//             rules={{
//               required: true,
//             }}
//             name={`items.${index}.name`}
//             render={({ field: { onChange, value } }) => (
//               <TextField
//                 style={{
//                   height: 50, borderRadius: 10, textAlign: 'right'
//                 }}
//                 onChange={(e) => onChange(e.target.value)}
//                 value={value}
//                 label={'نام '}
//               />
//             )}
//           />
//           {itemErrors?.name && <Typography style={{ color: 'red' }}>* {itemErrors.name.message}</Typography>}
//         </div>
//         <div style={{
//           width: '55%', height: 70, color: 'black',
//         }}>
//           <Controller
//             control={control}
//             rules={{
//               required: true,
//             }}
//             name={`items.${index}.family`}
//             render={({ field: { onChange, value } }) => (
//               <TextField
//                 style={{ height: 50, color: 'black', borderRadius: 10, textAlign: 'right' }}
//                 onChange={(e) => onChange(e.target.value)}
//                 value={value}
//                 label={'نام خانوادگی '}
//               />
//             )}
//           />
//           {itemErrors?.family && <Typography style={{ color: 'red' }}>* {itemErrors.family.message}</Typography>}
//         </div>
//       </div>

//       <div style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}>
//         <Controller
//           control={control}
//           rules={{
//             required: true,
//           }}
//           name={`items.${index}.mobile`}
//           render={({ field: { onChange, value } }) => (
//             <TextField
//               style={{ width: '97%', height: 50, color: 'black', borderRadius: 10, textAlign: 'right' }}
//               onChange={(e) => onChange(e.target.value)}
//               value={value}
//               label={'شماره موبایل'}
//               maxLength={11}
//             />
//           )}
//         />
//         {itemErrors?.mobile && (<Typography style={{ color: 'red', textAlign: 'right' }}>* {itemErrors?.mobile.message}</Typography>)}
//       </div>

//       <div style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, alignItems: 'center', display: 'flex' }}>
//         <Controller
//           control={control}
//           rules={{
//             required: true,
//           }}
//           name={`items.${index}.date`}
//           render={({ field: { onChange, value } }) => (
//             <Button style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}
//               onClick={() => { setDatePickerVisibility({ status: true, id: item.chairNumber }) }}>
//               <TextField
//                 style={{ width: '97%', height: 50, color: 'black', borderRadius: 10, textAlign: 'center' }}
//                 onChange={(e) => onChange(e.target.value)}
//                 value={value}
//                 disabled={false}
//                 label={'تاریخ تولد'}
//               />
//             </Button>
//           )}
//         />
//         {itemErrors?.date && (
//           <Typography style={{ color: 'red', textAlign: 'right' }}>* {itemErrors.date.message}</Typography>
//         )}
//         <div style={{ width: '65%', height: 70, marginRight: '2%', }}>
//           <Controller
//             control={control}
//             rules={{
//               required: true,
//             }}
//             name={`items.${index}.code`}
//             render={({ field: { onChange, value } }) => (
//               <TextField
//                 style={{ height: 50, color: 'black', borderRadius: 10, textAlign: 'right' }}
//                 onChange={(e) => onChange(e.target.value)}
//                 value={value}
//                 label={'کد ملی'}
//                 // type=''
//               />
//             )}
//           />
//           {itemErrors?.code && (
//             <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
//               <Typography style={{ color: 'red', textAlign: 'right' }}>* {itemErrors.code.message}</Typography>
//             </div>
//           )}
//         </div>

//         <div style={{ width: '30%', height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}>
//           <Controller
//             name={`items.${index}.gender`}
//             control={control}
//             rules={{
//               required: true,
//             }}
//             render={({ field }) => (
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={field.value || ''} // Ensure a default value
//                 label="Gender"
//                 onChange={field.onChange}
//               >
//                 <MenuItem value="2"> آقا</MenuItem>
//                 <MenuItem value="3">خانم</MenuItem>
//               </Select>
//             )}
//           />
//         </div>
//       </div>
//     </div >
//   )
// }




  const bookTicketHandler = () => {
    // if (!isAuth) {
    //   notify('Please login to book a ticket', 'error');
    //   return;
    // }
    useOrderStore.setState(state => ({
      ...state,
      source: from,
      destination: to,
      time: time,
      scheduleId: scheduleId,
    })),
      openDrawer();
  };

  return (
    <>
      <Button
        variant="contained"
        disabled={disabled}
        startIcon={<ConfirmationNumberIcon />}
        onClick={bookTicketHandler}
        sx={{
          padding: '0.5vw 1.2vw',
          fontSize: { xs: '10px', sm: '12px', md: '15px' },
          minWidth: 'max-content',
          '&:hover': {
            backgroundColor: '#e6f2ff',
          },

        }}

      >
        جزییات
      </Button>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => {
          closeDrawer();
          passengerDetail.map(value => {
            removePassenger(value.emailID);
          });
          useOrderStore.setState(() => ({
            ticketQuantity: 0,
          }));
        }}
        PaperProps={{
          sx: drawerstyle,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={closeDrawer}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
            size="small"
          >
            <CrossIcon sx={{ fontSize: { md: '1rem' } }} />
          </IconButton>
        </Box>
        <Box>
          <Typography
            variant="h2"
            fontSize={{ xs: '1.5rem', sm: '1.75rem', md: '2rem' }}
            color={theme.palette.secondary.main}
          >
            جزییات بلیط
          </Typography>
          <Details sx={{ flexDirection: { xs: 'column', sm: 'row' } }} >
            <div style={{ width: '50%', justifyContent: 'center', alignItems: 'flex-start', gap: '20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <BusDetailsCard carType={carType} companyName={companyName} />
            </div>

            <div style={{ width: '50%', justifyContent: 'center', alignItems: 'flex-start', gap: '20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <Icon src={company} alt="Schedule Icon" />
                <Box>
                  <Typography
                    variant="h6"
                    fontSize={{ xs: '0.8rem', sm: '0.8rem', md: '1rem' }}
                    color={theme.palette.common.black}
                  >
                    شرکت :
                  </Typography>
                  <Typography
                    variant="h4"
                    fontSize={{ xs: '1rem', sm: '0.8rem', md: '1.3rem' }}
                    color={theme.palette.secondary.main}
                  >
                    {companyName}
                  </Typography>
                </Box>
              </Box>


              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <Icon src={descriptions} alt="description Icon" />
                <Box>
                  <Typography
                    variant="h6"
                    fontSize={{ xs: '0.8rem', sm: '0.8rem', md: '1rem' }}
                    color={theme.palette.common.black}
                  >
                    توضیحات :
                  </Typography>
                  <Typography
                    variant="h4"
                    fontSize={{ xs: '1rem', sm: '0.8rem', md: '1.3rem' }}
                    color={theme.palette.secondary.main}
                  >
                    {description}
                  </Typography>
                </Box>
              </Box>
            </div>

          </Details>

        </Box>
        {/* <Box style={{ width: '100%', height: '400px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',

             

            }}
          >
            <Typography
              variant="h2"
              fontSize={{ xs: '1.5rem', sm: '1.75rem', md: '2rem' }}
              color={theme.palette.secondary.main}

            >
              صندلی ها
            </Typography>
          </Box>

          <Box sx={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'gray',
            backgroundColor: 'rgba(190,240,250,0.5)',
            display: 'flex',
            flexDirection: 'column', // Changed to column
            justifyContent: 'space-between',
            alignItems: 'center', // Aligned items to center
            height: '100%',
            width: '100%'
          }}>
            <div style={
            
              {
             
              }}>
              
            </div>
            <div style={{
              borderRadius: 10,
              backgroundColor: 'blue',
              width: '50%', // Adjusted width
              margin: '5%', // Added margin for spacing
              transform: 'rotate(-90deg)', // Removed rotation here
              display: 'flex',
              flexDirection: 'column', // Stack items vertically
              alignItems: 'center', // Center content horizontally
            }}>

              <Typography style={{
                color: 'black', fontWeight: 'bold',
                justifyContent: 'center', alignItems: 'center', alignSelf: 'center'
         
              }} >
                جلوی اتوبوس
              </Typography>
           



              {
                <BusSeats data={Data} setData={setData} BusPerson={BusPerson} setBusPerson={setBusPerson} />
              }



            </div>
          </Box>

        
        </Box> */}
        <Box style={{ width: '100%', height: '500px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h2"
              fontSize={{ xs: '1.5rem', sm: '1.75rem', md: '2rem' }}
              color={theme.palette.secondary.main}
            >
              صندلی ها
            </Typography>
          </Box>

          <Box sx={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'gray',
            backgroundColor: 'blue',
            //'rgba(190,240,250,0.5)',
            display: 'flex',
            flexDirection: 'column', // Changed to column
            justifyContent: 'center',
            alignItems: 'center', // Aligned items to center
            height: '100%',
            width: '100%',
            //  borderWidth:1,borderColor:'black'
          }}>
            <div style={{
              borderRadius: 10,

              // borderWidth: 0.5, borderColor: 'gray' // Removed unnecessary styling
            }}>
              {/* Placeholder for FlatList content, if needed */}
            </div>
            <div style={{
              borderRadius: 10,
              // backgroundColor: 'blue',
              // width: '90%', // Adjusted width
              margin: '5%', // Added margin for spacing
              transform: 'rotate(-90deg)', // Removed rotation here
              display: 'flex',
              flexDirection: 'column', // Stack items vertically

              // alignItems: 'center', // Center content horizontally
            }}>
              <Typography style={{
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
                paddingTop: '5px' // add padding for text margin
              }}>
                جلوی اتوبوس
              </Typography>
              {/* <div style={{
                width: '40%',
                height: 2,
                backgroundColor: 'black',
                marginVertical: 5
            }}></div> */}


              {/* Removed rotation here */}
              <BusSeats data={Data} setData={setData} BusPerson={BusPerson} setBusPerson={setBusPerson} />


            </div>
          </Box>
        </Box>

        {BusPerson.length > 0 &&
          <Box sx={{ marginTop: 7 }}>
            <Typography
              variant="h2"
              fontSize={{ xs: '1.5rem', sm: '1.75rem', md: '2rem' }}
              color={theme.palette.secondary.main}
            >
              مسافران          </Typography>
            
          </Box>
        }
        {BusPerson.length > 0 &&
          <div >
            {

              <FlatList
              list={BusPerson}
              renderItem={(item, index ) =>  renderPerson(item, index)}
                // keyExtractor={item => item.id}
              />
            }

          </div>
        }


        <Box sx={{ marginTop: 7 }}>
          <Typography
            variant="h2"
            fontSize={{ xs: '1.5rem', sm: '1.75rem', md: '2rem' }}
            color={theme.palette.secondary.main}
          >
            بهای تمام شده          </Typography>
          <FareBreakDownCard  counts={BusPerson.length} price={data?.price} totalPrice={0} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              onPressSend()
              // passengerDetail.length
              //   ? navigate('/checkout')
              //   : notify('Please add atleast one passenger', 'warn');
            }}
            sx={{
              padding: '0.5rem 2rem',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            پرداخت
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default BusDetails;
