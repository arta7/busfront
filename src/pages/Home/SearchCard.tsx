// // import React,{useState} from 'react';
// // import { Box, Button, TextField, Grid, styled } from '@mui/material';
// // import DropdownComponent from './DropDown';
// // import DatePickers from './DatePickers';
// // import Radio from '@mui/material/Radio';
// // import RadioGroup from '@mui/material/RadioGroup';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import FormLabel from '@mui/material/FormLabel';

// // import {useNavigate} from 'react-router-dom';

// // const SearchCard = ({CityList,userData,setUserData,Loading}) => {
// //   const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
// //     const [dateValue, setDateValue] = useState([{ CurrentDate: '' }]);
// //     const navigate = useNavigate();
// //     const [radiosSelect,setradiosSelect] = useState('1')

// //     const labelField = CityList && CityList.length > 0 ? 'name_en' : '';
// //     const codeField = CityList && CityList.length > 0 ? 'code' : '';
// //   return (
// //     <StyledCard>
// //       <Grid container alignItems="center" spacing={3}>
// //         <Grid item xs={3}>
// //           {/* <TextField
// //             label="From"
// //             variant="outlined"
// //             fullWidth
// //             required
// //           /> */}

// //           <DropdownComponent
// //                 data={CityList} // Pass the reshaped data
// //                 labelField={labelField}
// //                 valueField={codeField}
// //                 Loading={Loading}
// //                 value={userData[0]?.StartPlaceCode || 'Source'}
// //                 // value={selectedValue}
// //                 onChange={(From) => {
// //                   // console.log('from', From)
// //                   if (From.code.toString() === userData[0]?.EndPlaceCode.toString()) {

// //                       const myNextList = [...userData];
// //                       const DatesStep = myNextList;
// //                       DatesStep[0].EndPlace = '';
// //                       DatesStep[0].EndPlaceCode = '';
// //                       setUserData(myNextList)
// //                   }


// //                       const myNextList = [...userData];
// //                       const DatesStep = myNextList;
// //                       console.log('From2', From.name_en.toString())
// //                       DatesStep[0].StartPlace = From.name_en.toString();
// //                       DatesStep[0].StartPlaceCode = From.code.toString();
// //                       setUserData(myNextList)

// //                   console.log('myNextList',myNextList)
// //                   localStorage.setItem('storageData',JSON.stringify(myNextList))
// //               }}
// //                 placeholder="Source"
// //                 // width="300px"
// //                 ShowIcon={true}
// //                 labelStyle={{ color: 'black' }}
// //                 placeholderStyle={{ color: 'grey' }}
// //                 selectedTextStyle={{ color: 'black' }}
// //                 // customStyle={{ marginTop: '20px' }}
// //             />
// //         </Grid>
// //         <Grid item xs={3}>

// //         <DropdownComponent
// //                 data={CityList} // Pass the reshaped data
// //                 labelField={labelField}
// //                 valueField={codeField}
// //                 Loading={Loading}
// //                 value={userData[0]?.EndPlaceCode || 'Destination'}

// //                 // value={selectedValue}
// //                 onChange={(To) => {
// //                   console.log('To Address : => ', To)
// //                   if (To.code.toString() === userData[0]?.StartPlaceCode.toString()) {

// //                       const myNextList = [...userData];
// //                       const DatesStep = myNextList;
// //                       DatesStep[0].StartPlace = '';
// //                       DatesStep[0].StartPlaceCode = '';
// //                       setUserData(myNextList)
// //                   }
// //                   const myNextList = [...userData];
// //                   const DatesStep = myNextList;
// //                   DatesStep[0].EndPlace = To.name_en.toString();
// //                   DatesStep[0].EndPlaceCode = To.code.toString();
// //                   setUserData(myNextList)
// //                   console.log('myNextList',myNextList)

// //                   localStorage.setItem('storageData',JSON.stringify(myNextList))
// //                   //setIsFocus(true);
// //               }}
// //                 placeholder="Destination"
// //                 // width="300px"
// //                 ShowIcon={true}
// //                 labelStyle={{ color: 'black' }}
// //                 placeholderStyle={{ color: 'grey' }}
// //                 selectedTextStyle={{ color: 'black' }}
// //                 // customStyle={{ marginTop: '20px' }}
// //             />
// //         </Grid>
// //         <Grid item xs={3}>


// //            <DatePickers
// //                 DatePlaceholder="Date"
// //                 isDatePickerVisible={isDatePickerVisible}
// //                 setDatePickerVisibility={setIsDatePickerVisible}
// //                 // DateValue={userData}
// //                 setDataValue={setUserData}
// //                 DateValue={userData}
// //             />
// //         </Grid>
// //         <Grid item xs={3}>
// //           <Button variant="contained"  fullWidth  size='medium'
// //           disabled={radiosSelect != '1'}
// //           style={{backgroundColor:'#01a693',color:'black'}}
// //           onClick={()=>{
// //             if (userData[0].StartPlace != "" && userData[0].EndPlace != "")
// //               navigate('/bus-schedule')
// //           else {
// //               alert('لطفا کلیه گزینه ها را انتخاب کنید');
// //           }
// //           }}
// //           >
// //          Search
// //           </Button>
// //         </Grid>

// //       </Grid>
// //       <Box>
// //          <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
// //       <RadioGroup
// //         row
// //         aria-labelledby="demo-row-radio-buttons-group-label"
// //         name="row-radio-buttons-group"
// //         onChange={(e)=>{
// //           // console.log(e.target.value)
// //           setradiosSelect(e.target.value)
// //         }}
// //         value={radiosSelect}


// //       >
// //         <FormControlLabel value="1"  control={<Radio  sx={{
// //                 color: 'defaultColor',
// //                 '&.Mui-checked': {
// //                   color: '#01a693',
// //                 },
// //               }} />} label="Bus" />
// //         <FormControlLabel value="2"  control={<Radio  sx={{
// //                 color: 'defaultColor',
// //                 '&.Mui-checked': {
// //                   color: '#01a693',
// //                 },
// //               }} />}label="Taxi" />
// //         <FormControlLabel value="3"  control={<Radio  sx={{
// //                 color: 'defaultColor',
// //                 '&.Mui-checked': {
// //                   color: '#01a693',
// //                 },
// //               }} />} label="Van" />
// //          <FormControlLabel value="4"  control={<Radio  sx={{
// //                 color: 'defaultColor',
// //                 '&.Mui-checked': {
// //                   color: '#01a693',
// //                 },
// //               }} />}label="Cargo" />
// //       </RadioGroup>
// //       </Box>

// //     </StyledCard>
// //   );
// // }

// // const StyledCard = styled(Box)({
// //   backgroundColor: 'white',
// //   padding: '20px',
// //   borderRadius: 5,
// //   boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
// //   // maxWidth: '800px',
// //   margin: ' auto',
// //   minWidth:'1000px'
// // });

// // export default SearchCard;


// import React, { useState } from 'react';
// import { Box, Button, TextField, Grid, styled, useMediaQuery, ThemeProvider, createTheme, useTheme } from '@mui/material';
// import DropdownComponent from './DropDown';
// import DatePickers from './DatePickers';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'

// const SearchCard = ({ CityList, userData, setUserData, Loading }) => {
//   const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
//   const [dateValue, setDateValue] = useState([{ CurrentDate: '' }]);
//   const navigate = useNavigate();
//   const [radiosSelect, setradiosSelect] = useState('1');
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const theme = useTheme();

//   const labelField = CityList && CityList.length > 0 ? 'name_en' : '';
//   const codeField = CityList && CityList.length > 0 ? 'code' : '';



//   const handleSourceCode = async (sourceAddress) => {

//     try {
//       const response = await axios.get(
//         `https://api.neshan.org/v6/geocoding?address=` + sourceAddress,
//         {
//           headers: {
//             'Api-Key': 'service.sx6iTqo6sAY9VJl9rvNTHoo5ylpUS9Bjkd1yDeCM'
//           }
//         }
//       );
//       console.log('response data location ', response.data)

//       if (response.data && response.data.location) {

//         const myNextList = [...userData];
//         const DatesStep = myNextList;
//         DatesStep[0].sourcelat = response.data.location.x;
//         DatesStep[0].sourcelong = response.data.location.y;
//         setUserData(myNextList);
//         localStorage.setItem('storageData', JSON.stringify(myNextList));

//       } else {
//         // setError('No results found');
//       }
//     } catch (err) {
//       // setError(err.response?.data?.message || 'Failed to geocode address');
//     } finally {
//       // setLoading(false);
//     }
//   }


//   const handleDesCode = async (destinationAddress) => {

//     try {
//       const response = await axios.get(
//         `https://api.neshan.org/v6/geocoding?address=` + destinationAddress,
//         {
//           headers: {
//             'Api-Key': 'service.sx6iTqo6sAY9VJl9rvNTHoo5ylpUS9Bjkd1yDeCM'
//           }
//         }
//       );
//       console.log('response data location ', response.data)

//       if (response.data && response.data.location) {

//         const myNextList = [...userData];
//         const DatesStep = myNextList;
//         DatesStep[0].deslat = response.data.location.x;
//         DatesStep[0].deslong = response.data.location.y;
//         setUserData(myNextList);
//         localStorage.setItem('storageData', JSON.stringify(myNextList));

//       } else {
//         // setError('No results found');
//       }
//     } catch (err) {
//       // setError(err.response?.data?.message || 'Failed to geocode address');
//     } finally {
//       // setLoading(false);
//     }
//   }


//   return (
//     <StyledCard isMobile={isMobile}>
//       <Grid container alignItems="center" spacing={isMobile ? 1 : 3}>
//         {/* From Field */}
//         <Grid item xs={12} sm={6} md={3}>
//           <DropdownComponent
//             data={CityList}
//             labelField={labelField}
//             valueField={codeField}
//             Loading={Loading}
//             value={userData[0]?.StartPlaceCode || 'Source'}
//             onChange={(From) => {
//               if (From.code.toString() === userData[0]?.EndPlaceCode.toString()) {
//                 const myNextList = [...userData];
//                 const DatesStep = myNextList;
//                 DatesStep[0].EndPlace = '';
//                 DatesStep[0].EndPlaceCode = '';
//                 setUserData(myNextList);
//               }

//               const myNextList = [...userData];
//               const DatesStep = myNextList;
//               DatesStep[0].StartPlace = From.name_en.toString();
//               DatesStep[0].StartPlaceCode = From.code.toString();
//               setUserData(myNextList);
//               localStorage.setItem('storageData', JSON.stringify(myNextList));
//               handleSourceCode(From.name_fa.toString())
//             }}
//             placeholder="Source"
//             ShowIcon={true}
//             labelStyle={{ color: 'black' }}
//             placeholderStyle={{ color: 'grey' }}
//             selectedTextStyle={{ color: 'black' }}
//           />
//         </Grid>

//         {/* To Field */}
//         <Grid item xs={12} sm={6} md={3}>
//           <DropdownComponent
//             data={CityList}
//             labelField={labelField}
//             valueField={codeField}
//             Loading={Loading}
//             value={userData[0]?.EndPlaceCode || 'Destination'}
//             onChange={(To) => {
//               if (To.code.toString() === userData[0]?.StartPlaceCode.toString()) {
//                 const myNextList = [...userData];
//                 const DatesStep = myNextList;
//                 DatesStep[0].StartPlace = '';
//                 DatesStep[0].StartPlaceCode = '';
//                 setUserData(myNextList);
//               }
//               const myNextList = [...userData];
//               const DatesStep = myNextList;
//               DatesStep[0].EndPlace = To.name_en.toString();
//               DatesStep[0].EndPlaceCode = To.code.toString();
//               setUserData(myNextList);
//               localStorage.setItem('storageData', JSON.stringify(myNextList));
//               handleDesCode(To.name_fa.toString())
//             }}
//             placeholder="Destination"
//             ShowIcon={true}
//             labelStyle={{ color: 'black' }}
//             placeholderStyle={{ color: 'grey' }}
//             selectedTextStyle={{ color: 'black' }}
//           />
//         </Grid>

//         {/* Date Picker */}
//         <Grid item xs={12} sm={6} md={3}>
//           <DatePickers
//             DatePlaceholder="Date"
//             isDatePickerVisible={isDatePickerVisible}
//             setDatePickerVisibility={setIsDatePickerVisible}
//             setDataValue={setUserData}
//             DateValue={userData}
//           />
//         </Grid>

//         {/* Search Button */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Button
//             variant="contained"
//             fullWidth
//             size={isMobile ? 'small' : 'medium'}
//             disabled={radiosSelect != '1'}
//             style={{ backgroundColor: 'rgba(1,166,147,0.5)', color: 'black', fontFamily: theme.typography.fontFamily }}
//             onClick={() => {
//               if (userData[0].StartPlace != "" && userData[0].EndPlace != "")
//                 navigate('/bus-schedule');
//               else {
//                 alert('Please Select All Items.');
//               }
//             }}
//           >
//             Search
//           </Button>
//         </Grid>
//       </Grid>

//       {/* Radio Buttons */}
//       <Box mt={isMobile ? 1 : 2}>
//         <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
//         <RadioGroup
//           row
//           aria-labelledby="demo-row-radio-buttons-group-label"
//           name="row-radio-buttons-group"
//           onChange={(e) => {
//             setradiosSelect(e.target.value);
//             const myNextList = [...userData];
//             const DatesStep = myNextList;
//             DatesStep[0].radioType = e.target.value;
//             setUserData(myNextList);
//             localStorage.setItem('storageData', JSON.stringify(myNextList));



//           }}
//           value={radiosSelect}
//         >
//           <FormControlLabel
//             value="1"
//             control={
//               <Radio
//                 sx={{
//                   color: 'defaultColor',
//                   '&.Mui-checked': {
//                     color: '#01a693',
//                   },
//                 }}
//               />
//             }
//             label="Bus"
//           />
//           <FormControlLabel
//             value="2"
//             control={
//               <Radio
//                 sx={{
//                   color: 'defaultColor',
//                   '&.Mui-checked': {
//                     color: '#01a693',
//                   },
//                 }}
//               />
//             }
//             label="Taxi"
//           />
//           <FormControlLabel
//             value="3"
//             control={
//               <Radio
//                 sx={{
//                   color: 'defaultColor',
//                   '&.Mui-checked': {
//                     color: '#01a693',
//                   },
//                 }}
//               />
//             }
//             label="Van"
//           />
//           <FormControlLabel
//             value="4"
//             control={
//               <Radio
//                 sx={{
//                   color: 'defaultColor',
//                   '&.Mui-checked': {
//                     color: '#01a693',
//                   },
//                 }}
//               />
//             }
//             label="Cargo"
//           />
//         </RadioGroup>
//       </Box>
//     </StyledCard>
//   );
// };

// const StyledCard = styled(Box, {
//   shouldForwardProp: (prop) => prop !== 'isMobile',
// })(({ theme, isMobile }) => ({
//   backgroundColor: 'white',
//   padding: isMobile ? '15px' : '20px',
//   borderRadius: 5,
//   boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
//   margin: 'auto',
//   width: isMobile ? '100%' : 'auto',
//   minWidth: isMobile ? 'unset' : '1000px',
//   maxWidth: isMobile ? '100%' : 'none',
// }));

// export default SearchCard;


import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Grid, styled, useMediaQuery, useTheme } from '@mui/material';
import DropdownComponent from './DropDown';
import DatePickers from './DatePickers';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment-jalaali';

const SearchCard = ({ CityList, userData, setUserData, Loading }) => {
  const { t, i18n } = useTranslation();
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [dateValue, setDateValue] = useState([{ CurrentDate: '' }]);
  const navigate = useNavigate();
  const [radiosSelect, setradiosSelect] = useState('1');
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();

  const labelField = CityList && CityList.length > 0 ? 
    (i18n.language === 'fa' ? 'name_fa' : 'name_en') : '';
  const codeField = CityList && CityList.length > 0 ? 'code' : '';

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fa' ? 'en' : 'fa';
    i18n.changeLanguage(newLang);
    // تغییر تقویم بر اساس زبان انتخاب شده
    if (newLang === 'fa') {
      moment.loadPersian({ dialect: 'persian-modern' });
    }
  };

  const handleSourceCode = async (sourceAddress) => {
    try {
      const response = await axios.get(
        `https://api.neshan.org/v6/geocoding?address=${sourceAddress}`,
        {
          headers: {
            'Api-Key': 'service.sx6iTqo6sAY9VJl9rvNTHoo5ylpUS9Bjkd1yDeCM'
          }
        }
      );

      if (response.data?.location) {
        const myNextList = [...userData];
        const DatesStep = myNextList;
        DatesStep[0].sourcelat = response.data.location.x;
        DatesStep[0].sourcelong = response.data.location.y;
        setUserData(myNextList);
        localStorage.setItem('storageData', JSON.stringify(myNextList));
      }
    } catch (err) {
      console.error('Geocoding error:', err);
    }
  };

  const handleDesCode = async (destinationAddress) => {
    try {
      const response = await axios.get(
        `https://api.neshan.org/v6/geocoding?address=${destinationAddress}`,
        {
          headers: {
            'Api-Key': 'service.sx6iTqo6sAY9VJl9rvNTHoo5ylpUS9Bjkd1yDeCM'
          }
        }
      );

      if (response.data?.location) {
        const myNextList = [...userData];
        const DatesStep = myNextList;
        DatesStep[0].deslat = response.data.location.x;
        DatesStep[0].deslong = response.data.location.y;
        setUserData(myNextList);
        localStorage.setItem('storageData', JSON.stringify(myNextList));
      }
    } catch (err) {
      console.error('Geocoding error:', err);
    }
  };

  return (
    <StyledCard isMobile={isMobile} className={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
   

      <Grid container alignItems="center" spacing={isMobile ? 1 : 3}>
        {/* From Field */}
        <Grid item xs={12} sm={6} md={3}>
          <DropdownComponent
            data={CityList}
            labelField={labelField}
            valueField={codeField}
            Loading={Loading}
            value={userData[0]?.StartPlaceCode || t('search.source')}
            onChange={(From) => {
              if (From.code.toString() === userData[0]?.EndPlaceCode.toString()) {
                const myNextList = [...userData];
                const DatesStep = myNextList;
                DatesStep[0].EndPlace = '';
                DatesStep[0].EndPlaceCode = '';
                setUserData(myNextList);
              }

              const myNextList = [...userData];
              const DatesStep = myNextList;
              DatesStep[0].StartPlace = i18n.language === 'fa' ? From.name_fa : From.name_en;
              DatesStep[0].StartPlaceCode = From.code.toString();
              setUserData(myNextList);
              localStorage.setItem('storageData', JSON.stringify(myNextList));
              handleSourceCode(From.name_fa);
            }}
            placeholder={t('search.source')}
            ShowIcon={true}
            labelStyle={{ color: 'black' }}
            placeholderStyle={{ color: 'grey' }}
            selectedTextStyle={{ color: 'black' }}
          />
        </Grid>

        {/* To Field */}
        <Grid item xs={12} sm={6} md={3}>
          <DropdownComponent
            data={CityList}
            labelField={labelField}
            valueField={codeField}
            Loading={Loading}
            value={userData[0]?.EndPlaceCode || t('search.destination')}
            onChange={(To) => {
              if (To.code.toString() === userData[0]?.StartPlaceCode.toString()) {
                const myNextList = [...userData];
                const DatesStep = myNextList;
                DatesStep[0].StartPlace = '';
                DatesStep[0].StartPlaceCode = '';
                setUserData(myNextList);
              }
              const myNextList = [...userData];
              const DatesStep = myNextList;
              DatesStep[0].EndPlace = i18n.language === 'fa' ? To.name_fa : To.name_en;
              DatesStep[0].EndPlaceCode = To.code.toString();
              setUserData(myNextList);
              localStorage.setItem('storageData', JSON.stringify(myNextList));
              handleDesCode(To.name_fa);
            }}
            placeholder={t('search.destination')}
            ShowIcon={true}
            labelStyle={{ color: 'black' }}
            placeholderStyle={{ color: 'grey' }}
            selectedTextStyle={{ color: 'black' }}
          />
        </Grid>

        {/* Date Picker */}
        <Grid item xs={12} sm={6} md={3}>
          <DatePickers
            DatePlaceholder={t('search.date')}
            isDatePickerVisible={isDatePickerVisible}
            setDatePickerVisibility={setIsDatePickerVisible}
            setDataValue={setUserData}
            DateValue={userData}
            isPersian={i18n.language === 'fa'}
          />
        </Grid>

        {/* Search Button */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            fullWidth
            size={isMobile ? 'small' : 'medium'}
            disabled={radiosSelect !== '1'}
            sx={{ 
              backgroundColor: 'rgba(1,166,147,0.5)', 
              color: 'black',
              fontFamily: theme.typography.fontFamily,
              '&:hover': {
                backgroundColor: 'rgba(1,166,147,0.7)',
              }
            }}
            onClick={() => {
              if (userData[0].StartPlace && userData[0].EndPlace) {
                navigate('/bus-schedule');
              } else {
                alert(t('search.alertMessage'));
              }
            }}
          >
            {t('search.searchButton')}
          </Button>
        </Grid>
      </Grid>

      {/* Radio Buttons */}
      <Box mt={isMobile ? 1 : 2}>
        <FormLabel id="transport-type-radio-group">
          {t('search.transportType')}
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="transport-type-radio-group"
          name="transport-type-radio-group"
          onChange={(e) => {
            setradiosSelect(e.target.value);
            const myNextList = [...userData];
            const DatesStep = myNextList;
            DatesStep[0].radioType = e.target.value;
            setUserData(myNextList);
            localStorage.setItem('storageData', JSON.stringify(myNextList));
          }}
          value={radiosSelect}
        >
          <FormControlLabel
            value="1"
            control={
              <Radio
                sx={{
                  color: 'defaultColor',
                  '&.Mui-checked': {
                    color: '#01a693',
                  },
                }}
              />
            }
            label={t('search.bus')}
          />
          <FormControlLabel
            value="2"
            control={
              <Radio
                sx={{
                  color: 'defaultColor',
                  '&.Mui-checked': {
                    color: '#01a693',
                  },
                }}
              />
            }
            label={t('search.taxi')}
          />
          <FormControlLabel
            value="3"
            control={
              <Radio
                sx={{
                  color: 'defaultColor',
                  '&.Mui-checked': {
                    color: '#01a693',
                  },
                }}
              />
            }
            label={t('search.van')}
          />
          <FormControlLabel
            value="4"
            control={
              <Radio
                sx={{
                  color: 'defaultColor',
                  '&.Mui-checked': {
                    color: '#01a693',
                  },
                }}
              />
            }
            label={t('search.cargo')}
          />
        </RadioGroup>
      </Box>
    </StyledCard>
  );
};

const StyledCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ theme, isMobile }) => ({
  backgroundColor: 'white',
  padding: isMobile ? '15px' : '20px',
  borderRadius: 5,
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
  margin: 'auto',
  width: isMobile ? '100%' : 'auto',
  minWidth: isMobile ? 'unset' : '1000px',
  maxWidth: isMobile ? '100%' : 'none',
  direction: 'inherit', // جهت از والد به ارث می‌رسد
}));

export default SearchCard;