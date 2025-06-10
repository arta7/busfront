// // import { useEffect, useState } from 'react';
// // import {
// //   useTheme,
// //   Typography,
// //   Drawer,
// //   Button,
// //   styled,
// //   Box,
// //   TextField,
// //   IconButton,
// //   CircularProgress
// // } from '@mui/material';

// // import ReactInputMask from 'react-input-mask';
// // import CloseIcon from '@mui/icons-material/Close';
// // import AddIcon from '@mui/icons-material/Add';
// // import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
// // import { BusDetailsType } from '../../types';
// // import { useNavigate } from 'react-router-dom';
// // import { useOrderStore } from '../../store/orderStore';
// // import React from 'react';
// // import BusDetailsCard from '../BusDetailsCard';
// // import FareBreakDownCard from '../FareBreakdownCard';
// // import { useAuthStore } from '../../store/authStore';
// // import { notify } from '../../utils/notify';
// // import descriptions from '../../assets/description.svg';
// // import company from '../../assets/company.svg';
// // import BusSeats from './BusSeats';
// // import UserContext from './../../UserContext';
// // import { BusDetailss, busPreReserves } from '../../Api/ApiMaster';
// // import { Height, Padding } from '@mui/icons-material';
// // import FlatList from 'flatlist-react';
// // import { yupResolver } from '@hookform/resolvers/yup';
// // import * as yup from 'yup';

// // import { useForm, Controller } from 'react-hook-form';

// // import MenuItem from '@mui/material/MenuItem';
// // import Select, { SelectChangeEvent } from '@mui/material/Select';


// // const Details = styled(Box)`
// //   display: flex;

// //   gap: 2rem;
// //   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
// //   border-radius: 3px;
// //   margin: 2rem 0;
// //   padding: 1.5rem;
// // `;
// // const Icon = styled('img')`
// //   width: 40px;
// //   height: 40px;

// //   @media (max-width: 600px) {
// //     width: 30px;
// //     height: 30px;

// //   }

// // `;
// // const PassengersContainer = styled(Box)`
// //   display: flex;
// //   flex-direction: column;
// //   gap: 10px;
// //   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
// //   border-radius: 3px;
// //   margin: 2rem 0;
// //   padding: 1rem;
// //   min-height: 20vh;
// // `;

// // const CustomTextField = styled(TextField)`
// //   .MuiInput-underline:after {
// //     border-bottom-color: rgba(0, 0, 0, 0.5);
// //   }

// //   .MuiFormLabel-root.Mui-focused {
// //     color: rgba(0, 0, 0, 0.7);
// //   }

// //   .MuiFormLabel-root {
// //     font-size: 16px;
// //   }

// //   @media (max-width: 600px) {
// //     .MuiFormLabel-root {
// //       font-size: 12px;
// //     }
// //   }

// //   margin: 0;
// // `;

// // const CrossIcon = styled(CloseIcon)`
// //   border: 1px solid rgba(0, 0, 0, 0.5);
// //   border-radius: 50%;
// //   padding: 2px;
// // `;

// // const AddPassengerIcon = styled(AddIcon)`
// //   border: 1px solid rgba(0, 0, 0, 0.5);
// //   border-radius: 50%;
// //   padding: 2px;
// // `;

// // const AddPassengerButton = styled(Button)`
// //   display: flex;
// //   align-items: center;
// //   color: rgba(0, 0, 0, 0.5);
// //   min-width: max-content;

// //   &:hover {
// //     color: rgba(0, 0, 0, 0.5);
// //     background-color: transparent;
// //   }
// // `;

// // const BusDetails = ({ time, from, to, disabled, scheduleId, carType, companyName, description, data, requestNumber, props }: BusDetailsType) => {
// //   const addPassenger = useOrderStore(state => state.addPassenger);
// //   const { passengerDetail, removePassenger } = useOrderStore();
// //   const theme = useTheme();
// //   const navigate = useNavigate();
// //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
// //   const [isAddingPassenger, setIsAddingPassenger] = useState(false);
// //   const { isAuth } = useAuthStore();

// //   const { userData, setUserData } = React.useContext(UserContext);
// //   const [Loading, setLoading] = useState(true);
// //   const [ReturnData, setReturnData] = useState(true);
// //   const [Data, setData] = useState([])
// //   const [BusPerson, setBusPerson] = useState([])
// //   const [ReturnLinking, setReturnLinking] = useState('')








// //   const itemSchema = yup.object().shape({
// //     name: yup.string().required('نام الزامی است').min(4, 'حداقل ۴ حرف باید باشد'),
// //     family: yup.string().required('نام خانوادگی الزامی است').min(4, 'حداقل ۴ حرف باید باشد'),
// //     mobile: yup.string().required('شماره موبایل الزامی است').min(11, 'شماره موبایل باید با 11 رقم باشد '),
// //     date: yup.string().required('تاریخ تولد الزامی است'),
// //     code: yup.string().required('کد ملی الزامی است').min(10, 'کد ملی باید ۱۰ عدد  باشد')
// //   });

// //   const schema = yup.object().shape({
// //     items: yup.array().of(itemSchema).required('حداقل یک مسافر باید تعریف شود')
// //   });

// //   const { control, handleSubmit, formState: { errors } } = useForm({
// //     resolver: yupResolver(schema),
// //     defaultValues: { items: BusPerson },
// //   });

// //   const onPressSend = () => {

// //     console.log('test')
// //     {
// //       var passengers = []
// //       for (let i = 0; i < BusPerson.length; i++) {
// //         passengers.push({
// //           "firstName": BusPerson[i].name,
// //           "lastName": BusPerson[i].family,
// //           "nationalIdentification": BusPerson[i].code,
// //           "seatNumber": BusPerson[i].chairNumber,
// //           "birthDate": BusPerson[i].date,
// //           "gender": BusPerson[i].gender
// //         })

// //       }
// //       console.log('passengers', passengers)
// //       var telephone = { "phoneNumber": BusPerson[0].mobile };
// //       var contact = { "name": "", "email": "" };
// //       var clientUserTelephone = { "phoneNumber": BusPerson[0].mobile }
// //       var clientUserEmail = "";


// //       busPreReserves(requestNumber, data?.sourceCode, data?.busCode, userData[0].Token,
// //         passengers, data.price * BusPerson.length, telephone,
// //         contact, clientUserTelephone, clientUserEmail, setLoading, {
// //         headers: {
// //           'accept': 'text/plain',
// //           "Access-Control-Allow-Origin": "*",
// //           'Authorization': userData[0]?.Token
// //         }
// //       }, setReturnLinking, props)

// //     }

// //   };



// //   const drawerstyle = {
// //     width: { xs: '100%', sm: '66.6667%' },
// //     padding: '2rem',
// //     direction: 'rtl',
// //   };

// //   const openDrawer = () => setIsDrawerOpen(true);
// //   const closeDrawer = () => setIsDrawerOpen(false);

// //   const handleAddPassenger = (event: React.FormEvent) => {
// //     event.preventDefault();
// //     const input = event.target as HTMLInputElement;
// //     const emailID = input.value.trim();

// //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// //     if (!emailPattern.test(emailID)) {
// //       notify('Invalid email address', 'error');
// //       return;
// //     }

// //     if (
// //       emailID !== '' &&
// //       passengerDetail.length < 4 &&
// //       !passengerDetail.some(p => p.emailID === emailID) &&
// //       !emailID.includes(' ')
// //     ) {
// //       addPassenger(emailID);
// //       input.value = '';
// //       setIsAddingPassenger(false);
// //       useOrderStore.setState(state => ({
// //         ticketQuantity: state.ticketQuantity + 1,
// //       }));
// //     }
// //   };

// //   const handleRemovePassenger = (emailID: string) => {
// //     removePassenger(emailID);
// //     useOrderStore.setState(state => ({
// //       ticketQuantity: state.ticketQuantity - 1,
// //     }));
// //   };



// //   useEffect(() => {
// //     {
// //       console.log('requestNumber', data)
// //       BusDetailss(requestNumber, data?.sourceCode, data?.busCode,
// //         userData[0].Token, setLoading, setData, props, setReturnData)
// //     }
// //   }, [])




// //   const renderPerson = (item, index) => {
// //     const itemErrors = errors.items?.[index];

// //     return (
// //       <div key={index} style={{
// //         direction: 'ltr',
// //         width: '100%', padding: 10,
// //         backgroundColor: 'rgba(1,166,147,0.08)', borderRadius: 2,borderColor:'gray',borderWidth:1, marginBottom: '1%'
// //       }}>
// //         <Typography style={{ color: 'black', fontSize: '12px', marginBottom: '1%' }}>
// //           Passenger {item.chairNumber}:
// //         </Typography>

// //         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
// //           <div style={{ flex: 1, marginRight: '5px', marginLeft: '10px', marginBottom: '10px' }}>
// //             <Controller
// //               control={control}
// //               rules={{ required: true }}
// //               name={`items.${index}.name`}
// //               render={({ field: { onChange, value } }) => (
// //                 <TextField
// //                   style={{ height: 50, borderRadius: 2, width: '100%' }}
// //                   onChange={(text) => {


// //                     const myNextList = [...BusPerson];
// //                     const DatesStep = myNextList;
// //                     console.log('DatesStep', DatesStep)
// //                     const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
// //                     seatToUpdate[0].name = text.target.value;
// //                     setBusPerson(myNextList)
// //                     console.log('BusPerson', BusPerson)
// //                     onChange(text.target.value)
// //                   }}
// //                   value={item.name}
// //                   label="Name"
// //                   sx={{
// //                     '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                       borderColor: '#1c38bb', // Sets the border color
// //                     },
// //                     '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                       borderColor: '#1c38bb', // Sets the border color on hover
// //                     },
// //                     '&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                       borderColor: '#1c38bb', // Sets the border color when focused
// //                     },
// //                     '& .MuiFormLabel-root': {
// //                       color: '#1c38bb', // Sets the default label color
// //                     },
// //                     '&:hover .MuiFormLabel-root': {
// //                       color: '#1c38bb', // Sets the label color on hover
// //                     },
// //                     '&.Mui-focused .MuiFormLabel-root': {
// //                       color: '#1c38bb', // Sets the label color when focused
// //                     },
// //                   }}



// //                 />
// //               )}
// //             />
// //             {itemErrors?.name && <Typography style={{ color: 'red' }}>* {itemErrors?.name.message}</Typography>}
// //           </div>

// //           <div style={{ flex: 1, marginRight: '5px', marginLeft: '10px', marginBottom: '10px' }}>
// //             <Controller
// //               control={control}
// //               rules={{ required: true }}
// //               name={`items.${index}.family`}
// //               render={({ field: { onChange, value } }) => (
// //                 <TextField
// //                   style={{ height: 50, borderRadius: 2, width: '100%' }}
// //                   onChange={(text) => {
// //                     const myNextList = [...BusPerson];
// //                     const DatesStep = myNextList;
// //                     console.log('DatesStep', DatesStep)
// //                     const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber);
// //                     seatToUpdate[0].family = text.target.value;
// //                     setBusPerson(myNextList)
// //                     console.log('BusPerson', BusPerson)
// //                     onChange(text.target.value)

// //                   }}
// //                   value={item.family}
// //                   label="Family"
// //                   sx={{
// //                     '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                       borderColor: '#1c38bb', // Sets the border color
// //                     },
// //                     '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                       borderColor: '#1c38bb', // Sets the border color on hover
// //                     },
// //                     '&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                       borderColor: '#1c38bb', // Sets the border color when focused
// //                     },
// //                     '& .MuiFormLabel-root': {
// //                       color: '#1c38bb', // Sets the default label color
// //                     },
// //                     '&:hover .MuiFormLabel-root': {
// //                       color: '#1c38bb', // Sets the label color on hover
// //                     },
// //                     '&.Mui-focused .MuiFormLabel-root': {
// //                       color: '#1c38bb', // Sets the label color when focused
// //                     },
// //                   }}
// //                 />
// //               )}
// //             />
// //             {itemErrors?.family && <Typography style={{ color: 'red' }}>* {itemErrors.family.message}</Typography>}
// //           </div>
// //         </div>

// //         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
// //           <div style={{ flex: 1, marginRight: '5px', marginLeft: '10px', marginBottom: '10px' }}>
// //             <Controller
// //               control={control}
// //               rules={{ required: true }}
// //               name={`items.${index}.mobile`}
// //               render={({ field: { onChange, value } }) => (
// //                 <TextField
// //                   style={{ height: 50, borderRadius: 2, width: '100%' }}
// //                   onChange={(text) => {
// //                     const myNextList = [...BusPerson];
// //                     const DatesStep = myNextList;
// //                     console.log('DatesStep', DatesStep)
// //                     const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
// //                     seatToUpdate[0].mobile = text.target.value;
// //                     setBusPerson(myNextList)
// //                     console.log('BusPerson', BusPerson)
// //                     onChange(text.target.value)
// //                   }}
// //                   value={item.mobile}
// //                   label="Mobile No"
// //                   sx={{
// //                     '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                       borderColor: '#1c38bb', // Sets the border color
// //                     },
// //                     '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                       borderColor: '#1c38bb', // Sets the border color on hover
// //                     },
// //                     '&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                       borderColor: '#1c38bb', // Sets the border color when focused
// //                     },
// //                     '& .MuiFormLabel-root': {
// //                       color: '#1c38bb', // Sets the default label color
// //                     },
// //                     '&:hover .MuiFormLabel-root': {
// //                       color: '#1c38bb', // Sets the label color on hover
// //                     },
// //                     '&.Mui-focused .MuiFormLabel-root': {
// //                       color: '#1c38bb', // Sets the label color when focused
// //                     },
// //                   }}
// //                 />
// //               )}
// //             />
// //             {itemErrors?.mobile && <Typography style={{ color: 'red' }}>* {itemErrors.mobile.message}</Typography>}
// //           </div>

// //           <div style={{ flex: 1, marginRight: '5px', marginLeft: '10px', marginBottom: '10px' }}>
// //             {/* <Controller
// //               control={control}
// //               rules={{ required: true }}
// //               name={`items.${index}.date`}
// //               render={({ field: { onChange, value } }) => (
// //                 <TextField
// //                   style={{ height: 50, borderRadius: 2, width: '100%' }}
// //                   onChange={onChange}
// //                   value={value}
// //                   label="Birthday"

// //                 />
// //               )}
// //             /> */}
// //             <Controller
// //               control={control}
// //               rules={{ required: true }}
// //               name={`items.${index}.date`}
// //               render={({ field: { onChange, value } }) => (
// //                 <ReactInputMask
// //                   mask="9999/99/99" // Define the mask (YYYY/MM/DD)
// //                   value={value || ''} // Ensure value is a string or empty
// //                   onChange={(event) => {
// //                     const { value } = event.target;
// //                     const myNextList = [...BusPerson];
// //                     const seatToUpdate = myNextList.filter(a => a.chairNumber === item.chairNumber);

// //                     // Update the birthday in the BusPerson state
// //                     if (seatToUpdate.length > 0) {
// //                       seatToUpdate[0].date = value;  // Update specific seat's birthDate
// //                     }

// //                     setBusPerson(myNextList); // Update segment state
// //                     onChange(value); // Trigger the onChange from react-hook-form
// //                   }}
// //                   style={{ height: 50, borderRadius: 2, width: '100%' }}
// //                   maskChar="_" // Optional: Character to show for unfilled positions
// //                 >
// //                   {(inputProps) => (
// //                     <TextField
// //                       {...inputProps} // Pass the inputProps from ReactInputMask to TextField
// //                       label="Birthday"
// //                       error={!!errors.items?.[index]?.date} // Show error if exists
// //                       helperText={errors.items?.[index]?.date ? errors.items[index].date.message : ''} // Error message

// //                       sx={{
// //                         '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                           borderColor: '#1c38bb', // Sets the border color
// //                         },
// //                         '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                           borderColor: '#1c38bb', // Sets the border color on hover
// //                         },
// //                         '&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                           borderColor: '#1c38bb', // Sets the border color when focused
// //                         },
// //                         '& .MuiFormLabel-root': {
// //                           color: '#1c38bb', // Sets the default label color
// //                         },
// //                         '&:hover .MuiFormLabel-root': {
// //                           color: '#1c38bb', // Sets the label color on hover
// //                         },
// //                         '&.Mui-focused .MuiFormLabel-root': {
// //                           color: '#1c38bb', // Sets the label color when focused
// //                         },
// //                       }}
// //                     />
// //                   )}
// //                 </ReactInputMask>
// //               )}
// //             />


// //             {itemErrors?.date && <Typography style={{ color: 'red' }}>* {itemErrors.date.message}</Typography>}
// //           </div>
// //         </div>

// //         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
// //           <div style={{ flex: 1, marginRight: '5px', marginLeft: '10px', marginBottom: '10px' }}>
// //             <Controller
// //               control={control}
// //               rules={{ required: true }}
// //               name={`items.${index}.code`}
// //               render={({ field: { onChange, value } }) => (
// //                 <TextField
// //                   style={{ height: 50, borderRadius: 2, width: '100%' }}
// //                   onChange={(text) => {
// //                     const myNextList = [...BusPerson];
// //                     const DatesStep = myNextList;
// //                     const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
// //                     seatToUpdate[0].code = text.target.value;
// //                     setBusPerson(myNextList)
// //                     onChange(text.target.value)
// //                   }}
// //                   value={item.code}
// //                   label="NationalCode"
// //                   sx={{
// //                     '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                       borderColor: '#1c38bb', // Sets the border color
// //                     },
// //                     '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                       borderColor: '#1c38bb', // Sets the border color on hover
// //                     },
// //                     '&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
// //                       borderColor: '#1c38bb', // Sets the border color when focused
// //                     },
// //                     '& .MuiFormLabel-root': {
// //                       color: '#1c38bb', // Sets the default label color
// //                     },
// //                     '&:hover .MuiFormLabel-root': {
// //                       color: '#1c38bb', // Sets the label color on hover
// //                     },
// //                     '&.Mui-focused .MuiFormLabel-root': {
// //                       color: '#1c38bb', // Sets the label color when focused
// //                     },
// //                   }}
// //                 />
// //               )}
// //             />
// //             {itemErrors?.code && <Typography style={{ color: 'red' }}>* {itemErrors.code.message}</Typography>}
// //           </div>

// //           <div style={{ flex: 1, marginRight: '5px', marginLeft: '10px', marginBottom: '10px' }}>
// //             <Controller
// //               control={control}
// //               rules={{ required: true }}
// //               name={`items.${index}.gender`}
// //               render={({ field: { onChange, value } }) => (
// //                 <Select
// //                   value={value}
// //                   onChange={(itemValue, itemIndex) => {
// //                     console.log('itemValue', itemValue.target.value)
// //                     const myNextList = [...BusPerson];
// //                     const DatesStep = myNextList;
// //                     const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
// //                     seatToUpdate[0].gender = itemValue.target.value;
// //                     setBusPerson(myNextList)
// //                   }
// //                   }
// //                   style={{ width: '100%', height: '50px', borderRadius: 2 }}
// //                   defaultValue='2'
// //                   label='Gender'
// //                 >
// //                   <MenuItem value="2">Man</MenuItem>
// //                   <MenuItem value="3">Women</MenuItem>
// //                 </Select>
// //               )}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };



// //   const bookTicketHandler = () => {
// //     // if (!isAuth) {
// //     //   notify('Please login to book a ticket', 'error');
// //     //   return;
// //     // }
// //     useOrderStore.setState(state => ({
// //       ...state,
// //       source: from,
// //       destination: to,
// //       time: time,
// //       scheduleId: scheduleId,
// //     })),
// //       openDrawer();
// //   };

// //   return (
// //     <>
// //       <Button
// //         // variant="contained"
// //         disabled={disabled}
// //         startIcon={<ConfirmationNumberIcon />}
// //         onClick={bookTicketHandler}

// //         sx={{
// //           padding: '0.5vw 1.2vw',
// //           // backgroundColor: '#1c38bb',
// //           backgroundColor: 'rgba(1,166,147,0.8)',
// //           fontSize: { xs: '10px', sm: '12px', md: '15px' },
// //           color: 'black',
// //           minWidth: 'max-content',
// //           '&:hover': {
// //             backgroundColor: '#1c38bb',
// //           },

// //         }}

// //       >
// //         More
// //       </Button>
// //       <Drawer
// //         anchor="right"
// //         open={isDrawerOpen}
// //         onClose={() => {
// //           closeDrawer();
// //           passengerDetail.map(value => {
// //             removePassenger(value.emailID);
// //           });
// //           useOrderStore.setState(() => ({
// //             ticketQuantity: 0,
// //           }));
// //         }}
// //         PaperProps={{
// //           sx: drawerstyle,
// //         }}
// //       >
// //         <Box
// //           sx={{
// //             display: 'flex',
// //             justifyContent: 'flex-start',
// //             alignItems: 'center',
// //           }}
// //         >
// //           <IconButton
// //             onClick={closeDrawer}
// //             sx={{ display: { xs: 'flex', sm: 'none' } }}
// //             size="small"
// //           >
// //             <CrossIcon sx={{ fontSize: { md: '1rem' } }} />
// //           </IconButton>
// //         </Box>
// //         <Box sx={{ width: '100%', flexDirection: 'row', display: 'flex' }}>

// //           <Details sx={{ flexDirection: 'column', width: '48%' }} >
// //             <div style={{
// //               width: '100%', marginLeft: '1%', marginRight: '1%', justifyContent: 'center', alignItems: 'flex-start',
// //               gap: '5px', height: '100%', display: 'flex', flexDirection: 'column'
// //             }}>
// //               <BusDetailsCard carType={carType} companyName={companyName} />

// //               <Box
// //                 sx={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   gap: '5px',
// //                 }}
// //               >
// //                 <Icon src={company} alt="Schedule Icon" />
// //                 <Box>
// //                   <Typography
// //                     variant="h6"
// //                     fontSize={{ xs: '0.8rem', sm: '0.8rem', md: '1rem' }}
// //                     color={theme.palette.common.black}
// //                   >
// //                     Company :
// //                   </Typography>
// //                   <Typography
// //                     variant="h6"
// //                     fontSize={{ xs: '1rem', sm: '0.8rem', md: '1.3rem' }}
// //                     color={theme.palette.secondary.main}
// //                   >
// //                     {companyName}
// //                   </Typography>
// //                 </Box>
// //               </Box>


// //               <Box
// //                 sx={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   gap: '5px',
// //                 }}
// //               >
// //                 <Icon src={descriptions} alt="description Icon" />
// //                 <Box>
// //                   <Typography
// //                     variant="h6"
// //                     // fontSize={{ xs: '0.8rem', sm: '0.8rem', md: '1rem' }}
// //                     color={theme.palette.common.black}
// //                   >
// //                     Details :
// //                   </Typography>
// //                   <Typography
// //                     variant="h6"
// //                     fontSize={{ xs: '1rem', sm: '0.8rem', md: '1.3rem' }}
// //                     color={theme.palette.secondary.main}
// //                   >
// //                     {description}
// //                   </Typography>
// //                 </Box>
// //               </Box>
// //             </div>

// //             <Box sx={{ marginTop: 7, width: '100%' }}>
// //               {/* <Typography
// //                 variant="h2"
// //                 fontSize={{ xs: '1.5rem', sm: '1.75rem', md: '2rem' }}
// //                 color={theme.palette.secondary.main}
// //               >
// //                 Prices       </Typography> */}
// //               <FareBreakDownCard counts={BusPerson.length} price={data?.price} totalPrice={0} />
// //             </Box>

// //           </Details>
// //           <Details sx={{ flexDirection: 'column', width: '48%', marginLeft: '1%', marginRight: '1%', }} >
// //             <Box style={{ width: '100%', height: 'auto', Padding: 5 }}>


// //               <Box sx={{
// //                 borderWidth: 1,
// //                 borderRadius: 2,
// //                 borderColor: 'gray',
// //                 backgroundColor: 'rgba(231, 231, 231, 0.5)',
// //                 //'ç',
// //                 display: 'flex',

// //                 flexDirection: 'column', // Changed to column
// //                 justifyContent: 'center',
// //                 alignItems: 'center', // Aligned items to center
// //                 height: '100%',
// //                 width: '100%',
// //                 //  borderWidth:1,borderColor:'black'
// //               }}>
// //                 <div style={{
// //                   borderRadius: 2,

// //                   // borderWidth: 0.5, borderColor: 'gray' // Removed unnecessary styling
// //                 }}>
// //                   {/* Placeholder for FlatList content, if needed */}
// //                 </div>
// //                 <div style={{
// //                   borderRadius: 2,
// //                   // backgroundColor: 'blue',
// //                   // width: '90%', // Adjusted width
// //                   margin: '5%', // Added margin for spacing
// //                   // transform: 'rotate(-90deg)', // Removed rotation here
// //                   display: 'flex',
// //                   flexDirection: 'column', // Stack items vertically

// //                   // alignItems: 'center', // Center content horizontally
// //                 }}>
// //                   <Typography style={{
// //                     color: 'black',
// //                     fontWeight: 'bold',
// //                     textAlign: 'center',
// //                     paddingTop: '5px' // add padding for text margin
// //                   }}>
// //                     Bus Front
// //                   </Typography>

// //                   <BusSeats data={Data} setData={setData} BusPerson={BusPerson} setBusPerson={setBusPerson} />


// //                 </div>
// //               </Box>
// //             </Box>









// //           </Details>




// //         </Box>


// //         <div style={{ width: '100%', flexDirection: 'column', display: 'flex' }}>

// //           {BusPerson.length > 0 &&
// //             <Box sx={{}}>
// //               {/* <Typography
// //                 variant="h2"
// //                 fontSize={{ xs: '1.5rem', sm: '1.75rem', md: '2rem' }}
// //                 color={theme.palette.secondary.main}
// //               >
// //                 Passengers          </Typography> */}

// //             </Box>
// //           }
// //           {BusPerson.length > 0 &&
// //             <div >
// //               {

// //                 <FlatList
// //                   list={BusPerson}

// //                   renderItem={(item, index) => renderPerson(item, index)}
// //                 // keyExtractor={item => item.id}
// //                 />
// //               }

// //             </div>
// //           }





// //         </div>





// //         <Box
// //           sx={{
// //             display: 'flex',
// //             justifyContent: 'flex-start',
// //             alignItems: 'center',
// //             marginTop: '2rem',
// //           }}
// //         >
// //           {Loading ? <Box
// //             sx={{
// //               display: 'flex',
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //               height: '70vh',
// //             }}
// //           >
// //             <CircularProgress size={200} sx={{ color: 'rgba(1,166,147,1)' }} />
// //           </Box> :
// //             <Button
// //               // variant="contained"
// //               onClick={handleSubmit(onPressSend)}

// //               sx={{
// //                 padding: '0.5rem 2rem',
// //                 backgroundColor: 'rgba(1,166,147,1)',
// //                 color: 'black',
// //                 borderRadius: 2,
// //                 '&:hover': {
// //                   backgroundColor: theme.palette.primary.main,
// //                 },
// //               }}
// //             >
// //               Payment
// //             </Button>
// //           }

// //         </Box>
// //       </Drawer>
// //     </>
// //   );
// // };

// // export default BusDetails;


// import { useEffect, useState } from 'react';
// import React from 'react';
// import {
//   useTheme,
//   Typography,
//   Drawer,
//   Button,
//   Box,
//   TextField,
//   IconButton,
//   CircularProgress,
//   useMediaQuery
// } from '@mui/material';
// import ReactInputMask from 'react-input-mask';
// import CloseIcon from '@mui/icons-material/Close';
// import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
// import { useNavigate } from 'react-router-dom';
// import { useOrderStore } from '../../store/orderStore';
// import BusDetailsCard from '../BusDetailsCard';
// import FareBreakDownCard from '../FareBreakdownCard';
// import { notify } from '../../utils/notify';
// import descriptions from '../../assets/description.svg';
// import company from '../../assets/company.svg';
// import BusSeats from './BusSeats';
// import UserContext from './../../UserContext';
// import { BusDetailss, busPreReserves } from '../../Api/ApiMaster';
// import FlatList from 'flatlist-react';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { useForm, Controller } from 'react-hook-form';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import { convertToEnglishNumbers } from './convertToEnglishNumbers';

// const BusDetails = ({ 
//   time, 
//   from, 
//   to, 
//   disabled, 
//   scheduleId, 
//   carType, 
//   companyName, 
//   description, 
//   data, 
//   requestNumber, 
//   props 
// }) => {
//   const addPassenger = useOrderStore(state => state.addPassenger);
//    const { passengerDetail, removePassenger } = useOrderStore();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const { userData, setUserData } = React.useContext(UserContext);
//   const navigate = useNavigate();

//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [Loading, setLoading] = useState(true);
//   const [Data, setData] = useState([]);
//   const [BusPerson, setBusPerson] = useState([]);
//   const [ReturnLinking, setReturnLinking] = useState('');

//   // Form validation schema
//   const itemSchema = yup.object().shape({
//     name: yup.string().required('Name required').min(3, 'Min Name 3 Characters '),
//     family: yup.string().required('Family Required').min(3, 'Min Family 3 Characters '),
//     mobile: yup.string().required('Cell Phone Required').min(11, 'Min Mobile 11 Characters '),
//     date: yup.string().required('BirthDay Required'),
//     code: yup.string().required('NationalCode Required')
//     // .min(10, 'Min NationalCode 10 Characters ')
//   });

//   const schema = yup.object().shape({
//     items: yup.array().of(itemSchema).required('حداقل یک مسافر باید تعریف شود')
//   });

//   const { control, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: { items: BusPerson },
//   });

//   // Handle form submission
//   const onPressSend = () => {
//     const passengers = BusPerson.map(person => ({
//       firstName: person.name,
//       lastName: person.family,
//       nationalIdentification: person.code,
//       seatNumber: person.chairNumber,
//       birthDate: person.date,
//       gender: person.gender
//     }));

//     const telephone = { phoneNumber: BusPerson[0]?.mobile || '' };
//     const contact = { name: "", email: "" };
//     const clientUserTelephone = { phoneNumber: BusPerson[0]?.mobile || "" };

//     busPreReserves(
//       requestNumber, 
//       data?.sourceCode, 
//       data?.busCode, 
//       userData[0].Token,
//       passengers, 
//       data.price * BusPerson.length, 
//       telephone,
//       contact, 
//       clientUserTelephone, 
//       "", 
//       setLoading, 
//       {
//         headers: {
//           'accept': 'text/plain',
//           "Access-Control-Allow-Origin": "*",
//           'Authorization': userData[0]?.Token
//         }
//       }, 
//       setReturnLinking, 
//       props
//     );
//   };

//   // Fetch bus details on mount
//   useEffect(() => {
//     BusDetailss(
//       requestNumber, 
//       data?.sourceCode, 
//       data?.busCode,
//       userData[0].Token, 
//       setLoading, 
//       setData, 
//       props
//     );
//   }, []);

//   // Render passenger form
//   const renderPerson = (item, index) => {
//     const itemErrors = errors.items?.[index];

//     return (
//       <Box key={index} sx={{
//         direction: 'ltr',
//         width: '100%', 
//         p: 1,
//         backgroundColor: 'rgba(1,166,147,0.08)', 
//         borderRadius: 1,
//         border: '1px solid',
//         borderColor: 'divider',
//         mb: 1
//       }}>
//         <Typography variant="caption" sx={{ color: 'text.primary', mb: 1 }}>
//           Passenger {item.chairNumber}:
//         </Typography>

//         {/* Name and Family */}
//         <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
//           <Box sx={{ flex: 1 }}>
//             <Controller
//               name={`items.${index}.name`}
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   fullWidth
//                   size="small"
//                   label="Name"
//                   onChange={(e) => {
//                     const updated = [...BusPerson];
//                     updated[index].name = convertToEnglishNumbers(e.target.value);
//                     setBusPerson(updated);
//                     field.onChange(convertToEnglishNumbers(e.target.value));
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#1c38bb' },
//                       '&:hover fieldset': { borderColor: '#1c38bb' },
//                       '&.Mui-focused fieldset': { borderColor: '#1c38bb' }
//                     },
//                     '& .MuiInputLabel-root': { color: '#1c38bb' },
//                     '& .MuiInputLabel-root.Mui-focused': { color: '#1c38bb' }
//                   }}
//                 />
//               )}
//             />
//             {itemErrors?.name && (
//               <Typography variant="caption" color="error">
//                 * {itemErrors.name.message}
//               </Typography>
//             )}
//           </Box>

//           <Box sx={{ flex: 1 }}>
//             <Controller
//               name={`items.${index}.family`}
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   fullWidth
//                   size="small"
//                   label="Family"
//                   onChange={(e) => {
//                     const updated = [...BusPerson];
//                     updated[index].family = convertToEnglishNumbers(e.target.value);
//                     setBusPerson(updated);
//                     field.onChange(convertToEnglishNumbers(e.target.value));
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#1c38bb' },
//                       '&:hover fieldset': { borderColor: '#1c38bb' },
//                       '&.Mui-focused fieldset': { borderColor: '#1c38bb' }
//                     },
//                     '& .MuiInputLabel-root': { color: '#1c38bb' },
//                     '& .MuiInputLabel-root.Mui-focused': { color: '#1c38bb' }
//                   }}
//                 />
//               )}
//             />
//             {itemErrors?.family && (
//               <Typography variant="caption" color="error">
//                 * {itemErrors.family.message}
//               </Typography>
//             )}
//           </Box>
//         </Box>

//         {/* Mobile and Birthday */}
//         <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
//           <Box sx={{ flex: 1 }}>
//             <Controller
//               name={`items.${index}.mobile`}
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   fullWidth
//                   size="small"
//                   label="Mobile No"
//                   onChange={(e) => {
//                     const updated = [...BusPerson];
//                     updated[index].mobile = convertToEnglishNumbers(e.target.value);
//                     setBusPerson(updated);
//                     field.onChange(convertToEnglishNumbers(e.target.value));
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#1c38bb' },
//                       '&:hover fieldset': { borderColor: '#1c38bb' },
//                       '&.Mui-focused fieldset': { borderColor: '#1c38bb' }
//                     },
//                     '& .MuiInputLabel-root': { color: '#1c38bb' },
//                     '& .MuiInputLabel-root.Mui-focused': { color: '#1c38bb' }
//                   }}
//                 />
//               )}
//             />
//             {itemErrors?.mobile && (
//               <Typography variant="caption" color="error">
//                 * {itemErrors.mobile.message}
//               </Typography>
//             )}
//           </Box>

//           <Box sx={{ flex: 1 }}>
//             <Controller
//               name={`items.${index}.date`}
//               control={control}
//               render={({ field }) => (
//                 <ReactInputMask
//                   mask="9999/99/99"
//                     placeholder='1371/02/19'
//                   value={field.value || ''}
//                   onChange={(e) => {
//                     const updated = [...BusPerson];
//                     updated[index].date = convertToEnglishNumbers(e.target.value)
//                     setBusPerson(updated);
//                     field.onChange(convertToEnglishNumbers(e.target.value));
//                   }}
//                 >
//                   {() => (
//                     <TextField
//                       fullWidth

//                       size="small"
//                       label="Birthday (yyyy/mm/dd) : "
//                       error={!!itemErrors?.date}
//                       helperText={itemErrors?.date?.message}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '& fieldset': { borderColor: '#1c38bb' },
//                           '&:hover fieldset': { borderColor: '#1c38bb' },
//                           '&.Mui-focused fieldset': { borderColor: '#1c38bb' }
//                         },
//                         '& .MuiInputLabel-root': { color: '#1c38bb' },
//                         '& .MuiInputLabel-root.Mui-focused': { color: '#1c38bb' }
//                       }}
//                     />
//                   )}
//                 </ReactInputMask>
//               )}
//             />
//           </Box>
//         </Box>

//         {/* National Code and Gender */}
//         <Box sx={{ display: 'flex', gap: 1 }}>
//           <Box sx={{ flex: 1 }}>
//             <Controller
//               name={`items.${index}.code`}
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   fullWidth
//                   size="small"
//                   label="NationalCode"
//                   onChange={(e) => {
//                     const updated = [...BusPerson];
//                     updated[index].code = convertToEnglishNumbers(e.target.value);
//                     setBusPerson(updated);
//                     field.onChange(convertToEnglishNumbers(e.target.value));
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#1c38bb' },
//                       '&:hover fieldset': { borderColor: '#1c38bb' },
//                       '&.Mui-focused fieldset': { borderColor: '#1c38bb' }
//                     },
//                     '& .MuiInputLabel-root': { color: '#1c38bb' },
//                     '& .MuiInputLabel-root.Mui-focused': { color: '#1c38bb' }
//                   }}
//                 />
//               )}
//             />
//             {itemErrors?.code && (
//               <Typography variant="caption" color="error">
//                 * {itemErrors.code.message}
//               </Typography>
//             )}
//           </Box>

//           <Box sx={{ flex: 1 }}>
//             <Controller
//               name={`items.${index}.gender`}
//               control={control}
//               render={({ field }) => (
//                 <Select
//                   {...field}
//                   fullWidth
//                   size="small"
//                   value={field.value || '2'}
//                   onChange={(e) => {
//                     const updated = [...BusPerson];
//                     updated[index].gender = convertToEnglishNumbers(e.target.value);
//                     setBusPerson(updated);
//                     field.onChange(convertToEnglishNumbers(e.target.value));
//                   }}
//                   sx={{ height: '40px' }}
//                 >
//                   <MenuItem value="2">Man</MenuItem>
//                   <MenuItem value="3">Women</MenuItem>
//                 </Select>
//               )}
//             />
//           </Box>
//         </Box>
//       </Box>
//     );
//   };

//   return (
//     <>
//       {/* Book Ticket Button */}
//       <Button
//         disabled={disabled}
//         startIcon={<ConfirmationNumberIcon />}
//         onClick={() => setIsDrawerOpen(true)}
//         sx={{
//           px: isMobile ? 1 : 2,
//           py: 1,
//           backgroundColor: 'rgba(1,166,147,0.8)',
//           fontSize: isMobile ? '0.75rem' : '0.875rem',
//           color: 'black',
//           minWidth: 'max-content',
//           '&:hover': {
//             backgroundColor: theme.palette.primary.main,
//           },
//         }}
//       >
//         More
//       </Button>

//       {/* Booking Drawer */}
//       <Drawer
//         anchor={isMobile ? 'bottom' : 'left'}
//         open={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//         PaperProps={{
//           sx: {
//             width: isMobile ? '100%' : '66.6667%',
//             height: isMobile ? '90vh' : '100%',
//             p: 2,
//             overflow: 'auto'
//           }
//         }}
//       >
//         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//          <Typography variant="h3"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//             Booking Details
//           </Typography>
//           <IconButton onClick={() => setIsDrawerOpen(false)}>
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         {/* Main Content */}
//         <Box sx={{ 
//           display: 'flex', 
//           flexDirection: isMobile ? 'column' : 'row', 
//           gap: 2,
//           mt: 2
//         }}>
//           {/* Left Section - Bus Details */}
//           <Box sx={{ 
//             width: isMobile ? '100%' : '48%',
//             p: 2,
//             borderRadius: 1,
//             boxShadow: 1
//           }}>
//             <BusDetailsCard carType={carType} companyName={companyName}  source={from} destination={to} time={time} />

//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
//               <Box
//                 component="img"
//                 src={company}
//                 alt="Company"
//                 sx={{ width: 40, height: 40 }}
//               />
//               <Box>
//                 <Typography  variant="h6"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//                   Company:
//                 </Typography>
//                 <Typography  variant="h6"  color={theme.palette.secondary.main}  fontFamily={theme.typography.fontFamily}>
//                   {companyName}
//                 </Typography>
//               </Box>
//             </Box>

//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
//               <Box
//                 component="img"
//                 src={descriptions}
//                 alt="Description"
//                 sx={{ width: 40, height: 40 }}
//               />
//               <Box>
//                 <Typography variant="h6"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>
//                   Details:
//                 </Typography>
//                 <Typography variant="h6"  color={theme.palette.secondary.main}  fontFamily={theme.typography.fontFamily}>
//                   {description}
//                 </Typography>
//               </Box>
//             </Box>

//             <Box sx={{ mt: 4 }}>
//               <FareBreakDownCard 
//                 counts={BusPerson.length} 
//                 price={data?.price} 
//                 totalPrice={0} 
//               />
//             </Box>
//           </Box>

//           {/* Right Section - Seat Selection */}
//           <Box sx={{ 
//             width: isMobile ? '100%' : '48%',
//             p: 2,
//             borderRadius: 1,
//             boxShadow: 1,
//             backgroundColor: 'rgba(231, 231, 231, 0.5)'
//           }}>
//            <Typography variant="h6"  color={theme.palette.secondary.main}  textAlign={'center'}  fontFamily={theme.typography.fontFamily}>
//               Bus Front
//             </Typography>
//             <BusSeats 
//               data={Data} 
//               setData={setData} 
//               BusPerson={BusPerson} 
//               setBusPerson={setBusPerson} 
//             />
//           </Box>
//         </Box>

//         {/* Passenger Forms */}
//         {BusPerson.length > 0 && (
//           <Box sx={{ mt: 3 }}>
//             <FlatList
//               list={BusPerson}
//               renderItem={renderPerson}
//             />
//           </Box>
//         )}

//         {/* Payment Button */}
//         <Box sx={{ 
//           display: 'flex', 
//           justifyContent: 'center', 
//           mt: 3,
//           mb: isMobile ? 3 : 0
//         }}>
//           {Loading ? (
//             <CircularProgress size={isMobile ? 40 : 60} color="primary" />
//           ) : (
//             <Button
//               variant="contained"
//               onClick={handleSubmit(onPressSend)}
//               sx={{
//                 px: 4,
//                 py: 1.5,
//                 backgroundColor: 'rgba(1,146,127,0.7)',
//                 color: 'black',
//                 borderRadius: 1,
//                 '&:hover': {
//                   backgroundColor: 'primary.dark',
//                 },
//               }}
//             >
//               Payment
//             </Button>
//           )}
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default BusDetails;

// import { useEffect, useState } from 'react';
// import React from 'react';
// import {
//   useTheme,
//   Typography,
//   Drawer,
//   Button,
//   Box,
//   TextField,
//   IconButton,
//   CircularProgress,
//   useMediaQuery
// } from '@mui/material';
// import { useTranslation } from 'react-i18next';
// import ReactInputMask from 'react-input-mask';
// import CloseIcon from '@mui/icons-material/Close';
// import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
// import { useNavigate } from 'react-router-dom';
// import { useOrderStore } from '../../store/orderStore';
// import BusDetailsCard from '../BusDetailsCard';
// import FareBreakDownCard from '../FareBreakdownCard';
// import { notify } from '../../utils/notify';
// import descriptions from '../../assets/description.svg';
// import company from '../../assets/company.svg';
// import BusSeats from './BusSeats';
// import UserContext from './../../UserContext';
// import { BusDetailss, busPreReserves } from '../../Api/ApiMaster';
// import FlatList from 'flatlist-react';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { useForm, Controller } from 'react-hook-form';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import { convertToEnglishNumbers } from './convertToEnglishNumbers';

// const BusDetails = ({ 
//   time, 
//   from, 
//   to, 
//   disabled, 
//   scheduleId, 
//   carType, 
//   companyName, 
//   description, 
//   data, 
//   requestNumber, 
//   props 
// }) => {
//   const { t, i18n } = useTranslation();
//   const addPassenger = useOrderStore(state => state.addPassenger);
//   const { passengerDetail, removePassenger } = useOrderStore();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const { userData, setUserData } = React.useContext(UserContext);
//   const navigate = useNavigate();

//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [Loading, setLoading] = useState(true);
//   const [Data, setData] = useState([]);
//   const [BusPerson, setBusPerson] = useState([]);
//   const [ReturnLinking, setReturnLinking] = useState('');

//   // Form validation schema
//   const itemSchema = yup.object().shape({
//     name: yup.string().required(t('validation.nameRequired')).min(3, t('validation.minName')),
//     family: yup.string().required(t('validation.familyRequired')).min(3, t('validation.minFamily')),
//     mobile: yup.string().required(t('validation.mobileRequired')).min(11, t('validation.minMobile')),
//     date: yup.string().required(t('validation.birthdayRequired')),
//     code: yup.string().required(t('validation.nationalCodeRequired'))
//   });

//   const schema = yup.object().shape({
//     items: yup.array().of(itemSchema).required(t('validation.minPassenger'))
//   });

//   const { control, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: { items: BusPerson },
//   });

//   const toggleLanguage = () => {
//     i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa');
//   };

//   const onPressSend = () => {
//     const passengers = BusPerson.map(person => ({
//       firstName: person.name,
//       lastName: person.family,
//       nationalIdentification: person.code,
//       seatNumber: person.chairNumber,
//       birthDate: person.date,
//       gender: person.gender
//     }));

//     console.log('passengers',passengers)

//     const telephone = { phoneNumber: BusPerson[0]?.mobile || '' };
//     const contact = { name: "", email: "" };
//     const clientUserTelephone = { phoneNumber: BusPerson[0]?.mobile || "" };

//     busPreReserves(
//       requestNumber, 
//       data?.sourceCode, 
//       data?.busCode, 
//       userData[0].Token,
//       passengers, 
//       data.price * BusPerson.length, 
//       telephone,
//       contact, 
//       clientUserTelephone, 
//       "", 
//       setLoading, 
//       {
//         headers: {
//           'accept': 'text/plain',
//           "Access-Control-Allow-Origin": "*",
//           'Authorization': userData[0]?.Token
//         }
//       }, 
//       setReturnLinking, 
//       props
//     );
//   };

//   useEffect(() => {
//     BusDetailss(
//       requestNumber, 
//       data?.sourceCode, 
//       data?.busCode,
//       userData[0].Token, 
//       setLoading, 
//       setData, 
//       props
//     );
//   }, []);

//   const renderPerson = (item, index) => {
//     const itemErrors = errors.items?.[index];

//     return (
//       <Box key={index} sx={{
//         direction: i18n.language != 'fa' ? 'rtl' : 'ltr',
//         width: '100%', 
//         p: 1,
//         backgroundColor: 'rgba(1,166,147,0.08)', 
//         borderRadius: 1,
//         border: '1px solid',
//         borderColor: 'divider',
//         mb: 1
//       }}>
//         <Typography variant="caption" sx={{ color: 'text.primary', mb: 1 }}>
//           {t('passenger.title')} {item.chairNumber}:
//         </Typography>

//         {/* Name and Family */}
//         <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
//           <Box sx={{ flex: 1 }}>
//             <Controller
//               name={`items.${index}.name`}
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   fullWidth
//                   size="small"
//                   label={t('passenger.name')}
//                   onChange={(e) => {
//                     const updated = [...BusPerson];
//                     updated[index].name = convertToEnglishNumbers(e.target.value);
//                     setBusPerson(updated);
//                     field.onChange(convertToEnglishNumbers(e.target.value));
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#1c38bb' },
//                       '&:hover fieldset': { borderColor: '#1c38bb' },
//                       '&.Mui-focused fieldset': { borderColor: '#1c38bb' }
//                     },
//                     '& .MuiInputLabel-root': { color: '#1c38bb' },
//                     '& .MuiInputLabel-root.Mui-focused': { color: '#1c38bb' }
//                   }}
//                 />
//               )}
//             />
//             {itemErrors?.name && (
//               <Typography variant="caption" color="error">
//                 * {itemErrors.name.message}
//               </Typography>
//             )}
//           </Box>

//           <Box sx={{ flex: 1 }}>
//             <Controller
//               name={`items.${index}.family`}
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   fullWidth
//                   size="small"
//                   label={t('passenger.family')}
//                   onChange={(e) => {
//                     const updated = [...BusPerson];
//                     updated[index].family = convertToEnglishNumbers(e.target.value);
//                     setBusPerson(updated);
//                     field.onChange(convertToEnglishNumbers(e.target.value));
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#1c38bb' },
//                       '&:hover fieldset': { borderColor: '#1c38bb' },
//                       '&.Mui-focused fieldset': { borderColor: '#1c38bb' }
//                     },
//                     '& .MuiInputLabel-root': { color: '#1c38bb' },
//                     '& .MuiInputLabel-root.Mui-focused': { color: '#1c38bb' }
//                   }}
//                 />
//               )}
//             />
//             {itemErrors?.family && (
//               <Typography variant="caption" color="error">
//                 * {itemErrors.family.message}
//               </Typography>
//             )}
//           </Box>
//         </Box>

//         {/* Mobile and Birthday */}
//         <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
//           <Box sx={{ flex: 1 }}>
//             <Controller
//               name={`items.${index}.mobile`}
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   fullWidth
//                   size="small"
//                   label={t('passenger.mobile')}
//                   onChange={(e) => {
//                     const updated = [...BusPerson];
//                     updated[index].mobile = convertToEnglishNumbers(e.target.value);
//                     setBusPerson(updated);
//                     field.onChange(convertToEnglishNumbers(e.target.value));
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#1c38bb' },
//                       '&:hover fieldset': { borderColor: '#1c38bb' },
//                       '&.Mui-focused fieldset': { borderColor: '#1c38bb' }
//                     },
//                     '& .MuiInputLabel-root': { color: '#1c38bb' },
//                     '& .MuiInputLabel-root.Mui-focused': { color: '#1c38bb' }
//                   }}
//                 />
//               )}
//             />
//             {itemErrors?.mobile && (
//               <Typography variant="caption" color="error">
//                 * {itemErrors.mobile.message}
//               </Typography>
//             )}
//           </Box>

//           <Box sx={{ flex: 1 }}>
//             <Controller
//               name={`items.${index}.date`}
//               control={control}
//               render={({ field }) => (
//                 <ReactInputMask
//                   mask={i18n.language === 'fa' ? '1399/99/99' : '9999/99/99'}
//                   placeholder={i18n.language === 'fa' ? '1371/02/19' : '1992/05/10'}
//                   value={field.value || ''}
//                   onChange={(e) => {
//                     const updated = [...BusPerson];
//                     updated[index].date = convertToEnglishNumbers(e.target.value)
//                     setBusPerson(updated);
//                     field.onChange(convertToEnglishNumbers(e.target.value));
//                   }}
//                 >
//                   {() => (
//                     <TextField
//                       fullWidth
//                       size="small"
//                       label={t('passenger.birthday')}
//                       error={!!itemErrors?.date}
//                       helperText={itemErrors?.date?.message}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '& fieldset': { borderColor: '#1c38bb' },
//                           '&:hover fieldset': { borderColor: '#1c38bb' },
//                           '&.Mui-focused fieldset': { borderColor: '#1c38bb' }
//                         },
//                         '& .MuiInputLabel-root': { color: '#1c38bb' },
//                         '& .MuiInputLabel-root.Mui-focused': { color: '#1c38bb' }
//                       }}
//                     />
//                   )}
//                 </ReactInputMask>
//               )}
//             />
//           </Box>
//         </Box>

//         {/* National Code and Gender */}
//         <Box sx={{ display: 'flex', gap: 1 }}>
//           <Box sx={{ flex: 1 }}>
//             <Controller
//               name={`items.${index}.code`}
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   fullWidth
//                   size="small"
//                   label={t('passenger.nationalCode')}
//                   onChange={(e) => {
//                     const updated = [...BusPerson];
//                     updated[index].code = convertToEnglishNumbers(e.target.value);
//                     setBusPerson(updated);
//                     field.onChange(convertToEnglishNumbers(e.target.value));
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#1c38bb' },
//                       '&:hover fieldset': { borderColor: '#1c38bb' },
//                       '&.Mui-focused fieldset': { borderColor: '#1c38bb' }
//                     },
//                     '& .MuiInputLabel-root': { color: '#1c38bb' },
//                     '& .MuiInputLabel-root.Mui-focused': { color: '#1c38bb' }
//                   }}
//                 />
//               )}
//             />
//             {itemErrors?.code && (
//               <Typography variant="caption" color="error">
//                 * {itemErrors.code.message}
//               </Typography>
//             )}
//           </Box>

//           <Box sx={{ flex: 1 }}>
//             <Controller
//               name={`items.${index}.gender`}
//               control={control}
//               render={({ field }) => (
//                 <Select
//                   {...field}
//                   fullWidth
//                   size="small"
//                   value={field.value || '2'}
//                   onChange={(e) => {
//                     const updated = [...BusPerson];
//                     updated[index].gender = convertToEnglishNumbers(e.target.value);
//                     setBusPerson(updated);
//                     field.onChange(convertToEnglishNumbers(e.target.value));
//                   }}
//                   sx={{ height: '40px' }}
//                 >
//                   <MenuItem value="2">{t('passenger.male')}</MenuItem>
//                   <MenuItem value="3">{t('passenger.female')}</MenuItem>
//                 </Select>
//               )}
//             />
//           </Box>
//         </Box>
//       </Box>
//     );
//   };

//   return (
//     <>
//       {/* Book Ticket Button */}
//       <Button
//         disabled={disabled}
//         startIcon={<ConfirmationNumberIcon  sx={{marginLeft:1,marginRight:1}}/>}
//         onClick={() => setIsDrawerOpen(true)}
//         sx={{
//           px: isMobile ? 1 : 2,
//           py: 1,
//           backgroundColor: 'rgba(1,166,147,0.8)',
//           fontSize: isMobile ? '0.75rem' : '0.875rem',
//           color: 'black',
//           minWidth: 'max-content',
//           '&:hover': {
//             backgroundColor: theme.palette.primary.main,
//           },
//         }}
//       >
//         {t('buttons.more')}
//       </Button>

//       {/* Booking Drawer */}
//       <Drawer
//         anchor={isMobile ? 'bottom' : i18n.language != 'fa' ? 'right' : 'left'}
//         open={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//         PaperProps={{
//           sx: {
//             width: isMobile ? '100%' : '66.6667%',
//             height: isMobile ? '90vh' : '100%',
//             p: 2,
//             overflow: 'auto',
//             direction: i18n.language === 'fa' ? 'rtl' : 'ltr'
//           }
//         }}
//       >
//         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Typography variant="h3" color={theme.palette.secondary.main} fontFamily={i18n.language === 'fa' ? 'IRANSans' : theme.typography.fontFamily}>
//             {t('booking.title')}
//           </Typography>
//           <IconButton onClick={() => setIsDrawerOpen(false)}>
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         {/* Main Content */}
//         <Box sx={{ 
//           display: 'flex', 
//           flexDirection: isMobile ? 'column' : 'row', 
//           gap: 2,
//           mt: 2
//         }}>
//           {/* Left Section - Bus Details */}
//           <Box sx={{ 
//             width: isMobile ? '100%' : '48%',
//             p: 2,
//             borderRadius: 1,
//             boxShadow: 1
//           }}>
//             <BusDetailsCard 
//               carType={carType} 
//               companyName={companyName}  
//               source={from} 
//               destination={to} 
//               time={time} 
//             />

//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
//               <Box
//                 component="img"
//                 src={company}
//                 alt={t('labels.company')}
//                 sx={{ width: 40, height: 40 }}
//               />
//               <Box>
//                 <Typography variant="h6" color={theme.palette.secondary.main} fontFamily={i18n.language === 'fa' ? 'IRANSans' : theme.typography.fontFamily}>
//                   {t('labels.company')}:
//                 </Typography>
//                 <Typography variant="h6" color={theme.palette.secondary.main} fontFamily={i18n.language === 'fa' ? 'IRANSans' : theme.typography.fontFamily}>
//                   {companyName}
//                 </Typography>
//               </Box>
//             </Box>

//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
//               <Box
//                 component="img"
//                 src={descriptions}
//                 alt={t('labels.details')}
//                 sx={{ width: 40, height: 40 }}
//               />
//               <Box>
//                 <Typography variant="h6" color={theme.palette.secondary.main} fontFamily={i18n.language === 'fa' ? 'IRANSans' : theme.typography.fontFamily}>
//                   {t('labels.details')}:
//                 </Typography>
//                 <Typography variant="h6" color={theme.palette.secondary.main} fontFamily={i18n.language === 'fa' ? 'IRANSans' : theme.typography.fontFamily}>
//                   {description}
//                 </Typography>
//               </Box>
//             </Box>

//             <Box sx={{ mt: 4 }}>
//               <FareBreakDownCard 
//                 counts={BusPerson.length} 
//                 price={data?.price} 
//                 totalPrice={0} 
//               />
//             </Box>
//           </Box>

//           {/* Right Section - Seat Selection */}
//           <Box sx={{ 
//             width: isMobile ? '100%' : '48%',
//             p: 2,
//             borderRadius: 1,
//             boxShadow: 1,
//             backgroundColor: 'rgba(231, 231, 231, 0.5)'
//           }}>
//             <Typography variant="h6" color={theme.palette.secondary.main} textAlign={'center'} fontFamily={i18n.language === 'fa' ? 'IRANSans' : theme.typography.fontFamily}>
//               {t('labels.busFront')}
//             </Typography>
//             <BusSeats 
//               data={Data} 
//               setData={setData} 
//               BusPerson={BusPerson} 
//               setBusPerson={setBusPerson} 
//             />
//           </Box>
//         </Box>

//         {/* Passenger Forms */}
//         {BusPerson.length > 0 && (
//           <Box sx={{ mt: 3 }}>
//             <FlatList
//               list={BusPerson}
//               renderItem={renderPerson}
//             />
//           </Box>
//         )}

//         {/* Payment Button */}
//         <Box sx={{ 
//           display: 'flex', 
//           justifyContent: 'center', 
//           mt: 3,
//           mb: isMobile ? 3 : 0
//         }}>
//           {Loading ? (
//             <CircularProgress size={isMobile ? 40 : 60} color="primary" />
//           ) : (
//             <Button
//               variant="contained"
//               onClick={handleSubmit(onPressSend)}
//               sx={{
//                 px: 4,
//                 py: 1.5,
//                 backgroundColor: 'rgba(1,146,127,0.7)',
//                 color: 'black',
//                 borderRadius: 1,
//                 '&:hover': {
//                   backgroundColor: 'primary.dark',
//                 },
//               }}
//             >
//               {t('buttons.payment')}
//             </Button>
//           )}
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default BusDetails;


import { useEffect, useState } from 'react';
import React from 'react';
import {
  useTheme,
  Typography,
  Drawer,
  Button,
  Box,
  TextField,
  IconButton,
  CircularProgress,
  useMediaQuery
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ReactInputMask from 'react-input-mask';
import CloseIcon from '@mui/icons-material/Close';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { useNavigate } from 'react-router-dom';
import { useOrderStore } from '../../store/orderStore';
import BusDetailsCard from '../BusDetailsCard';
import FareBreakDownCard from '../FareBreakdownCard';
import { notify } from '../../utils/notify';
import descriptions from '../../assets/description.svg';
import company from '../../assets/company.svg';
import BusSeats from './BusSeats';
import UserContext from './../../UserContext';
import { BusDetailss, busPreReserves } from '../../Api/ApiMaster';
import FlatList from 'flatlist-react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { convertToEnglishNumbers } from './convertToEnglishNumbers';
// import { Directions } from '@mui/icons-material';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import getTheme from '../../theme';

const BusDetails = ({
  time,
  from,
  to,
  disabled,
  scheduleId,
  carType,
  companyName,
  description,
  data,
  requestNumber,
  props
}) => {
  const { t, i18n } = useTranslation();
  const addPassenger = useOrderStore(state => state.addPassenger);
  const { passengerDetail, removePassenger } = useOrderStore();
  const theme = getTheme(i18n.language);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const { userData, setUserData } = React.useContext(UserContext);
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState([]);
  const [BusPerson, setBusPerson] = useState([]);
  const [ReturnLinking, setReturnLinking] = useState('');

  // Form validation schema
  const itemSchema = yup.object().shape({
    name: yup.string().required(t('validation.nameRequired')).min(3, t('validation.minName')),
    family: yup.string().required(t('validation.familyRequired')).min(3, t('validation.minFamily')),
    mobile: yup.string().required(t('validation.mobileRequired')).min(11, t('validation.minMobile')),
    date: yup.string().required(t('validation.birthdayRequired')),
    code: yup.string().required(t('validation.nationalCodeRequired'))
  });

  const schema = yup.object().shape({
    items: yup.array().of(itemSchema).required(t('validation.minPassenger'))
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { items: BusPerson },
  });

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa');
  };

  const onPressSend = () => {
    const passengers = BusPerson.map(person => ({
      firstName: person.name,
      lastName: person.family,
      nationalIdentification: person.code,
      seatNumber: person.chairNumber,
      birthDate: person.date,
      gender: person.gender
    }));
    console.log('passengers',passengers)

    const telephone = { phoneNumber: BusPerson[0]?.mobile || '' };
    const contact = { name: "", email: "" };
    const clientUserTelephone = { phoneNumber: BusPerson[0]?.mobile || "" };

    busPreReserves(
      requestNumber,
      data?.sourceCode,
      data?.busCode,
      userData[0].Token,
      passengers,
      data.price * BusPerson.length,
      telephone,
      contact,
      clientUserTelephone,
      "",
      setLoading,
      {
        headers: {
          'accept': 'text/plain',
          "Access-Control-Allow-Origin": "*",
          'Authorization': userData[0]?.Token
        }
      },
      setReturnLinking,
      props
    );
  };
  const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

  useEffect(() => {
    BusDetailss(
      requestNumber,
      data?.sourceCode,
      data?.busCode,
      userData[0].Token,
      setLoading,
      setData,
      props,null
    )
  }, []);

  const renderPerson = (item, index) => {
    const itemErrors = errors.items?.[index];
    const isRTL = ['fa', 'ar', 'pa'].includes(i18n.language );

    return (
      <Box key={index} sx={{
        direction: !isRTL ? 'rtl' : 'ltr',
        width: '100%',
        p: 1,
        backgroundColor: 'rgba(1,166,147,0.08)',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
        mb: 1
      }}>
        <Typography variant="caption" sx={{ color: 'text.primary', mb: 1}}>
          {t('passenger.title')} {item.chairNumber}:
        </Typography>

        {/* Name and Family */}
        <Box sx={{ display: 'flex', gap: 1, mb: 1,marginTop:2 }}>
          <Box sx={{ flex: 1 }} >
            <Controller
              name={`items.${index}.name`}
              control={control}

              render={({ field }) => (
                <TextField
                variant='filled'
                  {...field}
                  fullWidth
                  size="small"
                  // dir={isRTL ? 'rtl' : 'ltr'}

                  label={t('passenger.name')}
                  onChange={(e) => {
                    const updated = [...BusPerson];
                    updated[index].name = convertToEnglishNumbers(e.target.value);
                    setBusPerson(updated);
                    field.onChange(convertToEnglishNumbers(e.target.value));
                  }}
                  
      sx={{
        '& .MuiOutlinedInput-root': {
          // Border styling for all states
          '& fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border
          },
          '&:hover fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border on hover
          },
          '&.Mui-focused fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border when focused
            boxShadow: '0 0 0 2px rgba(28, 56, 187, 0.2)', // Optional focus effect
          },
          // Direction control
          direction: !isRTL ? 'rtl' : 'ltr',
        },
        '& .MuiInputLabel-root': {
          color: '#1c38bb',
          right: !isRTL && '14px',
          left: !isRTL && 'unset' ,
        },
        '& .MuiInputLabel-shrink': {
          transform: !isRTL 
            && 'translate(-12px, -9px) scale(0.75)' 
            ,
          backgroundColor:  !isRTL ? 'white' : 'trasnparent',
          padding: '0 4px', // Better for label background
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        style: {
          textAlign: isRTL ? 'right' : 'left',
          direction: isRTL ? 'rtl' : 'ltr',
        },
      }}
    />
  )}
/>
              
           
              
              
            {itemErrors?.name && (
              <Typography variant="caption" color="error" sx={{ textAlign: isRTL ? 'right' : 'left' }}>
                * {itemErrors.name.message}
              </Typography>
            )}
          </Box>

          <Box sx={{ flex: 1 }}>
            <Controller
              name={`items.${index}.family`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                    variant='filled'
                  fullWidth
                  size="small"

                  // dir={isRTL ? 'rtl' : 'ltr'}
                  label={t('passenger.family')}
                  onChange={(e) => {
                    const updated = [...BusPerson];
                    updated[index].family = convertToEnglishNumbers(e.target.value);
                    setBusPerson(updated);
                    field.onChange(convertToEnglishNumbers(e.target.value));
                  }}
           sx={{
        '& .MuiOutlinedInput-root': {
          // Border styling for all states
          '& fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border
          },
          '&:hover fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border on hover
          },
          '&.Mui-focused fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border when focused
            boxShadow: '0 0 0 2px rgba(28, 56, 187, 0.2)', // Optional focus effect
          },
          // Direction control
          direction: !isRTL ? 'rtl' : 'ltr',
        },
        '& .MuiInputLabel-root': {
          color: '#1c38bb',
          right: !isRTL && '14px',
          left: !isRTL && 'unset' ,
        },
        '& .MuiInputLabel-shrink': {
          transform: !isRTL 
            && 'translate(-12px, -9px) scale(0.75)' 
            ,
          backgroundColor:  !isRTL ? 'white' : 'trasnparent',
          padding: '0 4px', // Better for label background
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        style: {
          textAlign: isRTL ? 'right' : 'left',
          direction: isRTL ? 'rtl' : 'ltr',
        },
      }}
                />
              )}
            />
            {itemErrors?.family && (
              <Typography variant="caption" color="error" sx={{ textAlign: isRTL ? 'right' : 'left' }}>
                * {itemErrors.family.message}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Mobile and Birthday */}
        <Box sx={{ display: 'flex', gap: 1, mb: 1 ,marginTop:2}}>
          <Box sx={{ flex: 1 }}>
            <Controller
              name={`items.${index}.mobile`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                    variant='filled'
                  fullWidth
                  size="small"
                  // dir={isRTL ? 'rtl' : 'ltr'}
                  label={t('passenger.mobile')}
                  onChange={(e) => {
                    const updated = [...BusPerson];
                    updated[index].mobile = convertToEnglishNumbers(e.target.value);
                    setBusPerson(updated);
                    field.onChange(convertToEnglishNumbers(e.target.value));
                  }}
         sx={{
        '& .MuiOutlinedInput-root': {
          // Border styling for all states
          '& fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border
          },
          '&:hover fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border on hover
          },
          '&.Mui-focused fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border when focused
            boxShadow: '0 0 0 2px rgba(28, 56, 187, 0.2)', // Optional focus effect
          },
          // Direction control
          direction: !isRTL ? 'rtl' : 'ltr',
        },
        '& .MuiInputLabel-root': {
          color: '#1c38bb',
          right: !isRTL && '14px',
          left: !isRTL && 'unset' ,
        },
        '& .MuiInputLabel-shrink': {
          transform: !isRTL 
            && 'translate(-12px, -9px) scale(0.75)' 
            ,
          backgroundColor:  !isRTL ? 'white' : 'trasnparent',
          padding: '0 4px', // Better for label background
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        style: {
          textAlign: isRTL ? 'right' : 'left',
          direction: isRTL ? 'rtl' : 'ltr',
        },
      }}
                />
              )}
            />
            {itemErrors?.mobile && (
              <Typography variant="caption" color="error" sx={{ textAlign: isRTL ? 'right' : 'left' }}>
                * {itemErrors.mobile.message}
              </Typography>
            )}
          </Box>

          <Box sx={{ flex: 1 }}>
            <Controller
              name={`items.${index}.date`}
              control={control}
              render={({ field }) => (
                <ReactInputMask
                  mask={isRTL ? '1399/99/99' : '9999/99/99'}
                  placeholder={isRTL ? '1371/02/19' : '1992/05/10'}
                  value={field.value || ''}
                  onChange={(e) => {
                    const updated = [...BusPerson];
                    updated[index].date = convertToEnglishNumbers(e.target.value)
                    setBusPerson(updated);
                    field.onChange(convertToEnglishNumbers(e.target.value));
                  }}
                >
                  {() => (
                    <TextField
                      fullWidth
                        variant='filled'
                      size="small"
                      // dir={isRTL ? 'rtl' : 'ltr'}
                      label={t('passenger.birthday')}
                      error={!!itemErrors?.date}
                      helperText={itemErrors?.date?.message}
        sx={{
        '& .MuiOutlinedInput-root': {
          // Border styling for all states
          '& fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border
          },
          '&:hover fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border on hover
          },
          '&.Mui-focused fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border when focused
            boxShadow: '0 0 0 2px rgba(28, 56, 187, 0.2)', // Optional focus effect
          },
          // Direction control
          direction: !isRTL ? 'rtl' : 'ltr',
        },
        '& .MuiInputLabel-root': {
          color: '#1c38bb',
          right: !isRTL && '14px',
          left: !isRTL && 'unset' ,
        },
        '& .MuiInputLabel-shrink': {
          transform: !isRTL 
            && 'translate(-12px, -9px) scale(0.75)' 
            ,
          backgroundColor:  !isRTL ? 'white' : 'trasnparent',
          padding: '0 4px', // Better for label background
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        style: {
          textAlign: isRTL ? 'right' : 'left',
          direction: isRTL ? 'rtl' : 'ltr',
        },
      }}
                    />
                  )}
                </ReactInputMask>
              )}
            />
          </Box>
        </Box>

        {/* National Code and Gender */}
        <Box sx={{ display: 'flex', gap: 1,marginTop:2}}>
          <Box sx={{ flex: 1 }}>
            <Controller
              name={`items.${index}.code`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                    variant='filled'
                  fullWidth
                  size="small"
                  // dir={isRTL ? 'rtl' : 'ltr'}
                  label={t('passenger.nationalCode')}
                  onChange={(e) => {
                    const updated = [...BusPerson];
                    updated[index].code = convertToEnglishNumbers(e.target.value);
                    setBusPerson(updated);
                    field.onChange(convertToEnglishNumbers(e.target.value));
                  }}
          sx={{
        '& .MuiOutlinedInput-root': {
          // Border styling for all states
          '& fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border
          },
          '&:hover fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border on hover
          },
          '&.Mui-focused fieldset': { 
            borderColor: '#1c38bb',
            borderWidth: '1px', // Ensures complete border when focused
            boxShadow: '0 0 0 2px rgba(28, 56, 187, 0.2)', // Optional focus effect
          },
          // Direction control
          direction: !isRTL ? 'rtl' : 'ltr',
        },
        '& .MuiInputLabel-root': {
          color: '#1c38bb',
          right: !isRTL && '14px',
          left: !isRTL && 'unset' ,
        },
        '& .MuiInputLabel-shrink': {
          transform: !isRTL 
            && 'translate(-12px, -9px) scale(0.75)' 
            ,
          backgroundColor:  !isRTL ? 'white' : 'trasnparent',
          padding: '0 4px', // Better for label background
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        style: {
          textAlign: isRTL ? 'right' : 'left',
          direction: isRTL ? 'rtl' : 'ltr',
        },
      }}
                />
              )}
            />
            {itemErrors?.code && (
              <Typography variant="caption" color="error" sx={{ textAlign: isRTL ? 'right' : 'left' }}>
                * {itemErrors.code.message}
              </Typography>
            )}
          </Box>

          <Box sx={{ flex: 1 }}>
            <Controller
              name={`items.${index}.gender`}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  fullWidth
                  dir={isRTL ? 'rtl' : 'ltr'}
                  size="small"
                  value={field.value || '2'}
                  onChange={(e) => {
                    const updated = [...BusPerson];
                    updated[index].gender = convertToEnglishNumbers(e.target.value);
                    setBusPerson(updated);
                    field.onChange(convertToEnglishNumbers(e.target.value));
                  }}
                  sx={{
                    height: '40px',
                    // direction: isRTL ? 'rtl' : 'ltr',
                    '& .MuiSelect-select': {
                      // textAlign: isRTL ? 'right' : 'left'
                    }
                  }}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        // direction: isRTL ? 'rtl' : 'ltr'
                      }
                    }
                  }}
                >
                  <MenuItem value="2">{t('passenger.male')}</MenuItem>
                  <MenuItem value="3">{t('passenger.female')}</MenuItem>
                </Select>
              )}
            />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <>
      {/* Book Ticket Button */}
      <Button
        disabled={disabled}
        startIcon={<ConfirmationNumberIcon sx={{ marginLeft: 1, marginRight: 1 }} />}
        onClick={() => setIsDrawerOpen(true)}
        sx={{
          px: isMobile ? 1 : 2,
          py: 1,
              fontFamily: theme.typography.fontFamily,
          backgroundColor: 'rgba(1,166,147,0.8)',
          fontSize: isMobile ? '0.75rem' : '0.875rem',
          color: 'black',
          minWidth: 'max-content',
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        {t('buttons.more')}
      </Button>

      {/* Booking Drawer */}
      <Drawer
        anchor={isMobile ? 'bottom' : ['fa', 'ar','pa'].includes(i18n.language) ? 'left' : 'right'}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: isMobile ? '100%' : '66.6667%',
            height: isMobile ? '90vh' : '100%',
            p: 2,
            overflow: 'auto',
            direction: ['fa', 'ar','pa'].includes(i18n.language) ? 'rtl' : 'ltr'
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h3" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
            {t('booking.title')}
          </Typography>
          <IconButton onClick={() => setIsDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Main Content */}
        <Box sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 2,
          mt: 2
        }}>
          {/* Left Section - Bus Details */}
          <Box sx={{
            width: isMobile ? '100%' : '48%',
            p: 2,
            borderRadius: 1,
            boxShadow: 1
          }}>
            <BusDetailsCard
              carType={carType}
              companyName={companyName}
              source={from}
              destination={to}
              time={time}
            />

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
              <Box
                component="img"
                src={company}
                alt={t('labels.company')}
                sx={{ width: 40, height: 40 }}
              />
              <Box>
                <Typography variant="h6" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
                  {t('labels.company')}:
                </Typography>
                <Typography variant="h6" color={theme.palette.secondary.main} fontFamily={theme.typography.fontFamily}>
                  {companyName}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
              <Box
                component="img"
                src={descriptions}
                alt={t('labels.details')}
                sx={{ width: 40, height: 40 }}
              />
              <Box>
                <Typography variant="h6" color={theme.palette.secondary.main} fontFamily={ theme.typography.fontFamily}>
                  {t('labels.details')}:
                </Typography>
                <Typography variant="h6" color={theme.palette.secondary.main} fontFamily={ theme.typography.fontFamily}>
                  {description}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
              <FareBreakDownCard
                counts={BusPerson.length}
                price={data?.price}
                totalPrice={0}
              />
            </Box>
          </Box>

          {/* Right Section - Seat Selection */}
          <Box sx={{
            width: isMobile ? '100%' : '48%',
            p: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: 'rgba(231, 231, 231, 0.5)'
          }}>
            <Typography variant="h6" color={theme.palette.secondary.main} textAlign={'center'} fontFamily={theme.typography.fontFamily}>
              {t('labels.busFront')}
            </Typography>
            <BusSeats
              data={Data}
              setData={setData}
              BusPerson={BusPerson}
              setBusPerson={setBusPerson}
            />
          </Box>
        </Box>

        {/* Passenger Forms */}
        {BusPerson.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <FlatList
              list={BusPerson}
              renderItem={renderPerson}
            />
          </Box>
        )}

        {/* Payment Button */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3,
          mb: isMobile ? 3 : 0
        }}>
          {Loading ? (
            <CircularProgress size={isMobile ? 40 : 60} color="primary" />
          ) : (
            <Button
              variant="contained"
              onClick={handleSubmit(onPressSend)}
              sx={{
                px: 4,
                py: 1.5,
                fontFamily:theme.typography.fontFamily,
                backgroundColor: 'rgba(1,146,127,0.7)',
                color: 'black',
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              {t('buttons.payment')}
            </Button>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default BusDetails;