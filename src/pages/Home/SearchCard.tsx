// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Box, Button, Grid, styled, useMediaQuery, useTheme, IconButton } from '@mui/material';
// import DropdownComponent from './DropDown';
// import DatePickers from './DatePickers';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import moment from 'moment-jalaali';
// import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

// const SearchCard = ({ CityList, userData, setUserData, Loading }) => {
//   const { t, i18n } = useTranslation();
//   const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
//   const [dateValue, setDateValue] = useState([{ CurrentDate: '' }]);
//   const navigate = useNavigate();
//   const [radiosSelect, setradiosSelect] = useState('1');
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const theme = useTheme();

//   const labelField = CityList && CityList.length > 0 ?
//     (i18n.language === 'fa' ? 'name_fa' : 'name_en') : '';
//   const codeField = CityList && CityList.length > 0 ? 'code' : '';

//   const toggleLanguage = () => {
//     const newLang = i18n.language === 'fa' ? 'en' : 'fa';
//     i18n.changeLanguage(newLang);
//     // تغییر تقویم بر اساس زبان انتخاب شده
//     if (newLang === 'fa') {
//       moment.loadPersian({ dialect: 'persian-modern' });
//     }
//   };

//   const handleSourceCode = async (sourceAddress) => {
//     try {
//       const response = await axios.get(
//         `https://api.neshan.org/v6/geocoding?address=${sourceAddress}`,
//         {
//           headers: {
//             'Api-Key': 'service.sx6iTqo6sAY9VJl9rvNTHoo5ylpUS9Bjkd1yDeCM'
//           }
//         }
//       );

//       if (response.data?.location) {
//         const myNextList = [...userData];
//         const DatesStep = myNextList;
//         DatesStep[0].sourcelat = response.data.location.x;
//         DatesStep[0].sourcelong = response.data.location.y;
//         setUserData(myNextList);
//         localStorage.setItem('storageData', JSON.stringify(myNextList));
//       }
//     } catch (err) {
//       console.error('Geocoding error:', err);
//     }
//   };

//   const handleSwapLocations = () => {
//     const myNextList = [...userData];
//     const DatesStep = myNextList;

//     // Swap start and end locations
//     const tempPlace = DatesStep[0].StartPlace;
//     const tempCode = DatesStep[0].StartPlaceCode;
//     const tempLat = DatesStep[0].sourcelat;
//     const tempLong = DatesStep[0].sourcelong;

//     DatesStep[0].StartPlace = DatesStep[0].EndPlace;
//     DatesStep[0].StartPlaceCode = DatesStep[0].EndPlaceCode;
//     DatesStep[0].sourcelat = DatesStep[0].deslat;
//     DatesStep[0].sourcelong = DatesStep[0].deslong;

//     DatesStep[0].EndPlace = tempPlace;
//     DatesStep[0].EndPlaceCode = tempCode;
//     DatesStep[0].deslat = tempLat;
//     DatesStep[0].deslong = tempLong;

//     setUserData(myNextList);
//     localStorage.setItem('storageData', JSON.stringify(myNextList));
//   };

//   const handleDesCode = async (destinationAddress) => {
//     try {
//       const response = await axios.get(
//         `https://api.neshan.org/v6/geocoding?address=${destinationAddress}`,
//         {
//           headers: {
//             'Api-Key': 'service.sx6iTqo6sAY9VJl9rvNTHoo5ylpUS9Bjkd1yDeCM'
//           }
//         }
//       );

//       if (response.data?.location) {
//         const myNextList = [...userData];
//         const DatesStep = myNextList;
//         DatesStep[0].deslat = response.data.location.x;
//         DatesStep[0].deslong = response.data.location.y;
//         setUserData(myNextList);
//         localStorage.setItem('storageData', JSON.stringify(myNextList));
//       }
//     } catch (err) {
//       console.error('Geocoding error:', err);
//     }
//   };

//   return (
//     <StyledCard isMobile={isMobile} className={i18n.language === 'fa' ? 'rtl' : 'ltr'}>


//       <Grid container alignItems="center" spacing={isMobile ? 1 : 2}>
//         {/* From Field */}
//         <Grid item xs={8} sm={4} md={3}>
//           <DropdownComponent
//             data={CityList}
//             labelField={labelField}
//             valueField={codeField}
//             Loading={Loading}
//             value={userData[0]?.StartPlaceCode || t('search.source')}
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
//               DatesStep[0].StartPlace = i18n.language === 'fa' ? From.name_fa : From.name_en;
//               DatesStep[0].StartPlaceCode = From.code.toString();
//               setUserData(myNextList);
//               localStorage.setItem('storageData', JSON.stringify(myNextList));
//               handleSourceCode(From.name_fa);
//             }}
//             placeholder={t('search.source')}
//             ShowIcon={true}
//             labelStyle={{ color: 'black' }}
//             placeholderStyle={{ color: 'grey' }}
//             selectedTextStyle={{ color: 'black' }}
//           />
//         </Grid>

//         <Grid item xs={8} sm={2} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <IconButton
//             onClick={handleSwapLocations}
//             sx={{
//               backgroundColor: '#01a693',
//               color: 'white',
//               '&:hover': {
//                 backgroundColor: '#018c7d',
//               },
//               transform: i18n.language === 'fa' ? 'rotate(180deg)' : 'none',
//             }}
//           >
//             <SwapHorizIcon />
//           </IconButton>
//         </Grid>

//         {/* To Field */}
//         <Grid item xs={8} sm={4} md={3}>
//           <DropdownComponent
//             data={CityList}
//             labelField={labelField}
//             valueField={codeField}
//             Loading={Loading}
//             value={userData[0]?.EndPlaceCode || t('search.destination')}
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
//               DatesStep[0].EndPlace = i18n.language === 'fa' ? To.name_fa : To.name_en;
//               DatesStep[0].EndPlaceCode = To.code.toString();
//               setUserData(myNextList);
//               localStorage.setItem('storageData', JSON.stringify(myNextList));
//               handleDesCode(To.name_fa);
//             }}
//             placeholder={t('search.destination')}
//             ShowIcon={true}
//             labelStyle={{ color: 'black' }}
//             placeholderStyle={{ color: 'grey' }}
//             selectedTextStyle={{ color: 'black' }}
//           />
//         </Grid>

//         {/* Date Picker */}
//         <Grid item xs={8} sm={4} md={3}>
//           <DatePickers
//             DatePlaceholder={t('search.date')}
//             isDatePickerVisible={isDatePickerVisible}
//             setDatePickerVisibility={setIsDatePickerVisible}
//             setDataValue={setUserData}
//             DateValue={userData}
//             isPersian={i18n.language === 'fa'}
//           />
//         </Grid>

//         {/* Search Button */}
//         <Grid item xs={8} sm={4} md={3} spacing={5}>
//           <Button
//             variant="contained"
//             // fullWidth
//             size={isMobile ? 'small' : 'medium'}
//             disabled={radiosSelect !== '1'}
//             sx={{
//               backgroundColor: 'rgba(1,166,147,0.5)',
//               color: 'black',
//               fontFamily: theme.typography.fontFamily,
//               '&:hover': {
//                 backgroundColor: 'rgba(1,166,147,0.7)',
//               }
//             }}
//             onClick={() => {
//               if (userData[0].StartPlace && userData[0].EndPlace) {
//                 navigate('/bus-schedule');
//               } else {
//                 alert(t('search.alertMessage'));
//               }
//             }}
//           >
//             {t('search.searchButton')}
//           </Button>
//         </Grid>
//       </Grid>

//       {/* Radio Buttons */}
//       <Box mt={isMobile ? 1 : 2}>
//         <FormLabel id="transport-type-radio-group">
//           {t('search.transportType')}
//         </FormLabel>
//         <RadioGroup
//           row
//           aria-labelledby="transport-type-radio-group"
//           name="transport-type-radio-group"
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
//             label={t('search.bus')}
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
//             label={t('search.taxi')}
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
//             label={t('search.van')}
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
//             label={t('search.cargo')}
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
//   direction: 'inherit', // جهت از والد به ارث می‌رسد
// }));

// export default SearchCard;




import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Grid, styled, useMediaQuery, useTheme, IconButton } from '@mui/material';
import DropdownComponent from './DropDown';
import DatePickers from './DatePickers';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment-jalaali';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import getTheme from '../../theme';

const SearchCard = ({ CityList, userData, setUserData, Loading }) => {
  const { t, i18n } = useTranslation();
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [dateValue, setDateValue] = useState([{ CurrentDate: '' }]);
  const navigate = useNavigate();
  const [radiosSelect, setradiosSelect] = useState('1');
  const isMobile = useMediaQuery('(max-width:600px)');


  const theme = getTheme(i18n.language);

  const labelField = CityList && CityList.length > 0 ?
    (i18n.language === 'fa' ? 'name_fa' : 'name_en') : '';
  const codeField = CityList && CityList.length > 0 ? 'code' : '';

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fa' ? 'en' : 'fa';
    i18n.changeLanguage(newLang);
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

  const handleSwapLocations = () => {
    const myNextList = [...userData];
    const DatesStep = myNextList;

    const tempPlace = DatesStep[0].StartPlace;
    const tempCode = DatesStep[0].StartPlaceCode;
    const tempLat = DatesStep[0].sourcelat;
    const tempLong = DatesStep[0].sourcelong;

    DatesStep[0].StartPlace = DatesStep[0].EndPlace;
    DatesStep[0].StartPlaceCode = DatesStep[0].EndPlaceCode;
    DatesStep[0].sourcelat = DatesStep[0].deslat;
    DatesStep[0].sourcelong = DatesStep[0].deslong;

    DatesStep[0].EndPlace = tempPlace;
    DatesStep[0].EndPlaceCode = tempCode;
    DatesStep[0].deslat = tempLat;
    DatesStep[0].deslong = tempLong;

    setUserData(myNextList);
    localStorage.setItem('storageData', JSON.stringify(myNextList));
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
    <StyledCard isMobile={isMobile} className={['fa', 'ar', 'pa'].includes(i18n.language) ? 'rtl' : 'ltr'}>
      {/* Main Search Row */}
      <Grid container alignItems="center" spacing={isMobile ? 1 : 2}>
        {/* From Field */}
        <Grid item xs={12} sm={5} md={3}>
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
            labelStyle={{ color: 'black', fontFamily: theme.typography.fontFamily, }}
            placeholderStyle={{ color: 'grey', fontFamily: theme.typography.fontFamily, }}
            selectedTextStyle={{ color: 'black', fontFamily: theme.typography.fontFamily, }}
          />
        </Grid>

        {/* Swap Button */}
        <Grid item xs={12} sm={2} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton
            onClick={handleSwapLocations}
            sx={{
              backgroundColor: '#01a693',
              color: 'white',
              '&:hover': {
                backgroundColor: '#018c7d',
              },
              // transform: i18n.language === 'fa' ? 'rotate(180deg)' : 'none',
            }}
          >
            <SwapHorizIcon />
          </IconButton>
        </Grid>

        {/* To Field */}
        <Grid item xs={12} sm={5} md={3}>
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
            labelStyle={{ color: 'black', fontFamily: theme.typography.fontFamily, }}
            placeholderStyle={{ color: 'grey', fontFamily: theme.typography.fontFamily, }}
            selectedTextStyle={{ color: 'black', fontFamily: theme.typography.fontFamily, }}
          />
        </Grid>

        {/* Date Picker */}
        <Grid item xs={12} sm={5} md={3}>
          <DatePickers
            DatePlaceholder={t('search.date')}
            isDatePickerVisible={isDatePickerVisible}
            setDatePickerVisibility={setIsDatePickerVisible}
            setDataValue={setUserData}
            DateValue={userData}
            isPersian={i18n.language === 'fa'}
          />
        </Grid>

        {/* Search Button - Desktop */}
        {!isMobile && (
          <Grid item md={2}>
            <Button
              variant="contained"
              fullWidth
              size="medium"
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
        )}
      </Grid>

      {/* Search Button - Mobile */}
      {isMobile && (
        <Grid container justifyContent="center" sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              size="small"
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
      )}

      {/* Radio Buttons */}
      <Box mt={isMobile ? 1 : 2}>
        <FormLabel id="transport-type-radio-group" sx={{ fontFamily: theme.typography.fontFamily, }}>
          {t('search.transportType')}
        </FormLabel>
        <RadioGroup
          row
          sx={{ fontFamily: theme.typography.fontFamily, }}
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
            sx={{ fontFamily: theme.typography.fontFamily, }}
            control={
              <Radio
                sx={{
                  color: 'defaultColor',
                  fontFamily: theme.typography.fontFamily,
                  '&.Mui-checked': {
                    color: '#01a693',
                    fontFamily: theme.typography.fontFamily,
                  },
                }}
              />
            }
            label={t('search.bus')}
          />
          <FormControlLabel
            sx={{ fontFamily: theme.typography.fontFamily, }}
            value="2"
            control={
              <Radio
                sx={{
                  color: 'defaultColor',
                  fontFamily: theme.typography.fontFamily,
                  '&.Mui-checked': {
                    color: '#01a693',
                    fontFamily: theme.typography.fontFamily,
                  },
                }}
              />
            }
            label={t('search.taxi')}
          />
          <FormControlLabel
            value="3"
            sx={{ fontFamily: theme.typography.fontFamily, }}
            control={
              <Radio
                sx={{
                  color: 'defaultColor',
                  fontFamily: theme.typography.fontFamily,
                  '&.Mui-checked': {
                    color: '#01a693',
                    fontFamily: theme.typography.fontFamily,
                  },
                }}
              />
            }
            label={t('search.van')}
          />
          <FormControlLabel
            value="4"
            sx={{ fontFamily: theme.typography.fontFamily, }}
            control={
              <Radio

                sx={{
                  color: 'defaultColor',
                  fontFamily: theme.typography.fontFamily,
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
  direction: 'inherit',
  fontFamily: theme.typography.fontFamily,
}));

export default SearchCard;