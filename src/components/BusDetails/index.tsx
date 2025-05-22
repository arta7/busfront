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
  CircularProgress
} from '@mui/material';

import ReactInputMask from 'react-input-mask';
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
import { Height, Padding } from '@mui/icons-material';
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
  border-radius: 3px;
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
  border-radius: 3px;
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








  const itemSchema = yup.object().shape({
    name: yup.string().required('نام الزامی است').min(4, 'حداقل ۴ حرف باید باشد'),
    family: yup.string().required('نام خانوادگی الزامی است').min(4, 'حداقل ۴ حرف باید باشد'),
    mobile: yup.string().required('شماره موبایل الزامی است').min(11, 'شماره موبایل باید با 11 رقم باشد '),
    date: yup.string().required('تاریخ تولد الزامی است'),
    code: yup.string().required('کد ملی الزامی است').min(10, 'کد ملی باید ۱۰ عدد  باشد')
  });

  const schema = yup.object().shape({
    items: yup.array().of(itemSchema).required('حداقل یک مسافر باید تعریف شود')
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { items: BusPerson },
  });

  const onPressSend = () => {

    console.log('test')
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
    {
      console.log('requestNumber', data)
      BusDetailss(requestNumber, data?.sourceCode, data?.busCode,
        userData[0].Token, setLoading, setData, props, setReturnData)
    }
  }, [])




  const renderPerson = (item, index) => {
    const itemErrors = errors.items?.[index];

    return (
      <div key={index} style={{
        direction: 'ltr',
        width: '100%', padding: 10,
        backgroundColor: 'rgba(1,166,147,0.1)', borderRadius: 2, marginBottom: '1%'
      }}>
        <Typography style={{ color: 'black', fontSize: '12px' }}>
          Passenger {item.chairNumber}:
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: '5px', marginLeft: '10px', marginBottom: '10px' }}>
            <Controller
              control={control}
              rules={{ required: true }}
              name={`items.${index}.name`}
              render={({ field: { onChange, value } }) => (
                <TextField
                  style={{ height: 50, borderRadius: 2, width: '100%' }}
                  onChange={(text) => {


                    const myNextList = [...BusPerson];
                    const DatesStep = myNextList;
                    console.log('DatesStep', DatesStep)
                    const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                    seatToUpdate[0].name = text.target.value;
                    setBusPerson(myNextList)
                    console.log('BusPerson', BusPerson)
                    onChange(text.target.value)
                  }}
                  value={item.name}
                  label="Name"
                  


                />
              )}
            />
            {itemErrors?.name && <Typography style={{ color: 'red' }}>* {itemErrors?.name.message}</Typography>}
          </div>

          <div style={{ flex: 1, marginRight: '5px', marginLeft: '10px', marginBottom: '10px' }}>
            <Controller
              control={control}
              rules={{ required: true }}
              name={`items.${index}.family`}
              render={({ field: { onChange, value } }) => (
                <TextField
                  style={{ height: 50, borderRadius: 2, width: '100%' }}
                  onChange={(text) => {
                    const myNextList = [...BusPerson];
                    const DatesStep = myNextList;
                    console.log('DatesStep', DatesStep)
                    const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber);
                    seatToUpdate[0].family = text.target.value;
                    setBusPerson(myNextList)
                    console.log('BusPerson', BusPerson)
                    onChange(text.target.value)

                  }}
                  value={item.family}
                  label="Family"
                />
              )}
            />
            {itemErrors?.family && <Typography style={{ color: 'red' }}>* {itemErrors.family.message}</Typography>}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
          <div style={{ flex: 1, marginRight: '5px', marginLeft: '10px', marginBottom: '10px' }}>
            <Controller
              control={control}
              rules={{ required: true }}
              name={`items.${index}.mobile`}
              render={({ field: { onChange, value } }) => (
                <TextField
                  style={{ height: 50, borderRadius: 2, width: '100%' }}
                  onChange={(text) => {
                    const myNextList = [...BusPerson];
                    const DatesStep = myNextList;
                    console.log('DatesStep', DatesStep)
                    const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                    seatToUpdate[0].mobile = text.target.value;
                    setBusPerson(myNextList)
                    console.log('BusPerson', BusPerson)
                    onChange(text.target.value)
                  }}
                  value={item.mobile}
                  label="Mobile No"
                />
              )}
            />
            {itemErrors?.mobile && <Typography style={{ color: 'red' }}>* {itemErrors.mobile.message}</Typography>}
          </div>

          <div style={{ flex: 1, marginRight: '5px', marginLeft: '10px', marginBottom: '10px' }}>
            {/* <Controller
              control={control}
              rules={{ required: true }}
              name={`items.${index}.date`}
              render={({ field: { onChange, value } }) => (
                <TextField
                  style={{ height: 50, borderRadius: 2, width: '100%' }}
                  onChange={onChange}
                  value={value}
                  label="Birthday"
                  
                />
              )}
            /> */}
            <Controller
              control={control}
              rules={{ required: true }}
              name={`items.${index}.date`}
              render={({ field: { onChange, value } }) => (
                <ReactInputMask
                  mask="9999/99/99" // Define the mask (YYYY/MM/DD)
                  value={value || ''} // Ensure value is a string or empty
                  onChange={(event) => {
                    const { value } = event.target;
                    const myNextList = [...BusPerson];
                    const seatToUpdate = myNextList.filter(a => a.chairNumber === item.chairNumber);

                    // Update the birthday in the BusPerson state
                    if (seatToUpdate.length > 0) {
                      seatToUpdate[0].date = value;  // Update specific seat's birthDate
                    }

                    setBusPerson(myNextList); // Update segment state
                    onChange(value); // Trigger the onChange from react-hook-form
                  }}
                  style={{ height: 50, borderRadius: 2, width: '100%' }}
                  maskChar="_" // Optional: Character to show for unfilled positions
                >
                  {(inputProps) => (
                    <TextField
                      {...inputProps} // Pass the inputProps from ReactInputMask to TextField
                      label="Birthday"
                      error={!!errors.items?.[index]?.date} // Show error if exists
                      helperText={errors.items?.[index]?.date ? errors.items[index].date.message : ''} // Error message
                    />
                  )}
                </ReactInputMask>
              )}
            />


            {itemErrors?.date && <Typography style={{ color: 'red' }}>* {itemErrors.date.message}</Typography>}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
          <div style={{ flex: 1, marginRight: '5px', marginLeft: '10px', marginBottom: '10px' }}>
            <Controller
              control={control}
              rules={{ required: true }}
              name={`items.${index}.code`}
              render={({ field: { onChange, value } }) => (
                <TextField
                  style={{ height: 50, borderRadius: 2, width: '100%' }}
                  onChange={(text) => {
                    const myNextList = [...BusPerson];
                    const DatesStep = myNextList;
                    const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                    seatToUpdate[0].code = text.target.value;
                    setBusPerson(myNextList)
                    onChange(text.target.value)
                  }}
                  value={item.code}
                  label="NationalCode"
                />
              )}
            />
            {itemErrors?.code && <Typography style={{ color: 'red' }}>* {itemErrors.code.message}</Typography>}
          </div>

          <div style={{ flex: 1, marginRight: '5px', marginLeft: '10px', marginBottom: '10px' }}>
            <Controller
              control={control}
              rules={{ required: true }}
              name={`items.${index}.gender`}
              render={({ field: { onChange, value } }) => (
                <Select
                  value={value}
                  onChange={(itemValue, itemIndex) => {
                    console.log('itemValue', itemValue.target.value)
                    const myNextList = [...BusPerson];
                    const DatesStep = myNextList;
                    const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                    seatToUpdate[0].gender = itemValue.target.value;
                    setBusPerson(myNextList)
                  }
                  }
                  style={{ width: '100%', height: '50px', borderRadius: 2 }}
                  defaultValue='2'
                  label='Gender'
                >
                  <MenuItem value="2">Man</MenuItem>
                  <MenuItem value="3">Women</MenuItem>
                </Select>
              )}
            />
          </div>
        </div>
      </div>
    );
  };



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
        // variant="contained"
        disabled={disabled}
        startIcon={<ConfirmationNumberIcon />}
        onClick={bookTicketHandler}

        sx={{
          padding: '0.5vw 1.2vw',
          backgroundColor: '#1c38bb',
          fontSize: { xs: '10px', sm: '12px', md: '15px' },
          color: 'black',
          minWidth: 'max-content',
          '&:hover': {
            backgroundColor: '#1c38bb',
          },

        }}

      >
        More
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
        <Box sx={{ width: '100%', flexDirection: 'row', display: 'flex' }}>

          <Details sx={{ flexDirection: 'column', width: '48%' }} >
            <div style={{
              width: '100%', marginLeft: '1%', marginRight: '1%', justifyContent: 'center', alignItems: 'flex-start',
              gap: '5px', height: '100%', display: 'flex', flexDirection: 'column'
            }}>
              <BusDetailsCard carType={carType} companyName={companyName} />

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
                    Company :
                  </Typography>
                  <Typography
                    variant="h6"
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
                    // fontSize={{ xs: '0.8rem', sm: '0.8rem', md: '1rem' }}
                    color={theme.palette.common.black}
                  >
                    Details :
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize={{ xs: '1rem', sm: '0.8rem', md: '1.3rem' }}
                    color={theme.palette.secondary.main}
                  >
                    {description}
                  </Typography>
                </Box>
              </Box>
            </div>

            <Box sx={{ marginTop: 7, width: '100%' }}>
              {/* <Typography
                variant="h2"
                fontSize={{ xs: '1.5rem', sm: '1.75rem', md: '2rem' }}
                color={theme.palette.secondary.main}
              >
                Prices       </Typography> */}
              <FareBreakDownCard counts={BusPerson.length} price={data?.price} totalPrice={0} />
            </Box>

          </Details>
          <Details sx={{ flexDirection: 'column', width: '48%', marginLeft: '1%', marginRight: '1%', }} >
            <Box style={{ width: '100%', height: 'auto', Padding: 5 }}>


              <Box sx={{
                borderWidth: 1,
                borderRadius: 2,
                borderColor: 'gray',
                backgroundColor: 'rgba(231, 231, 231, 0.5)',
                //'ç',
                display: 'flex',

                flexDirection: 'column', // Changed to column
                justifyContent: 'center',
                alignItems: 'center', // Aligned items to center
                height: '100%',
                width: '100%',
                //  borderWidth:1,borderColor:'black'
              }}>
                <div style={{
                  borderRadius: 2,

                  // borderWidth: 0.5, borderColor: 'gray' // Removed unnecessary styling
                }}>
                  {/* Placeholder for FlatList content, if needed */}
                </div>
                <div style={{
                  borderRadius: 2,
                  // backgroundColor: 'blue',
                  // width: '90%', // Adjusted width
                  margin: '5%', // Added margin for spacing
                  // transform: 'rotate(-90deg)', // Removed rotation here
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
                    Bus Front
                  </Typography>

                  <BusSeats data={Data} setData={setData} BusPerson={BusPerson} setBusPerson={setBusPerson} />


                </div>
              </Box>
            </Box>









          </Details>




        </Box>


        <div style={{ width: '100%', flexDirection: 'column', display: 'flex' }}>

          {BusPerson.length > 0 &&
            <Box sx={{  }}>
              {/* <Typography
                variant="h2"
                fontSize={{ xs: '1.5rem', sm: '1.75rem', md: '2rem' }}
                color={theme.palette.secondary.main}
              >
                Passengers          </Typography> */}

            </Box>
          }
          {BusPerson.length > 0 &&
            <div >
              {

                <FlatList
                  list={BusPerson}

                  renderItem={(item, index) => renderPerson(item, index)}
                // keyExtractor={item => item.id}
                />
              }

            </div>
          }





        </div>





        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          {Loading ? <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '70vh',
            }}
          >
            <CircularProgress size={200} sx={{ color: 'rgb(1,166,147,1)' }} />
          </Box> :
            <Button
              // variant="contained"
              onClick={handleSubmit(onPressSend)}

              sx={{
                padding: '0.5rem 2rem',
                backgroundColor: 'rgba(1,166,147,1)',
                color: 'blue',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            >
              Payment
            </Button>
          }

        </Box>
      </Drawer>
    </>
  );
};

export default BusDetails;
