import React,{useState} from 'react';
import { Box, Button, TextField, Grid, styled } from '@mui/material';
import DropdownComponent from './DropDown';
import DatePickers from './DatePickers';

import {useNavigate} from 'react-router-dom';

const SearchCard = ({CityList,userData,setUserData,Loading}) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [dateValue, setDateValue] = useState([{ CurrentDate: '' }]);
    const navigate = useNavigate();

    const labelField = CityList && CityList.length > 0 ? 'name_fa' : '';
    const codeField = CityList && CityList.length > 0 ? 'code' : '';
  return (
    <StyledCard>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={3}>
          {/* <TextField
            label="From"
            variant="outlined"
            fullWidth
            required
          /> */}
          
          <DropdownComponent
                data={CityList} // Pass the reshaped data
                labelField={labelField}
                valueField={codeField}
                Loading={Loading}
                value={userData[0]?.StartPlaceCode || 'مبدا'}
                // value={selectedValue}
                onChange={(From) => {
                  // console.log('from', From)
                  if (From.code.toString() === userData[0]?.EndPlaceCode.toString()) {

                      const myNextList = [...userData];
                      const DatesStep = myNextList;
                      DatesStep[0].EndPlace = '';
                      DatesStep[0].EndPlaceCode = '';
                      setUserData(myNextList)
                  }

                  
                      const myNextList = [...userData];
                      const DatesStep = myNextList;
                      console.log('From2', From.name_fa.toString())
                      DatesStep[0].StartPlace = From.name_fa.toString();
                      DatesStep[0].StartPlaceCode = From.code.toString();
                      setUserData(myNextList)
                  
                  console.log('myNextList',myNextList)
                  localStorage.setItem('storageData',JSON.stringify(myNextList))
              }}
                placeholder="مبدا"
                // width="300px"
                ShowIcon={true}
                labelStyle={{ color: 'black' }}
                placeholderStyle={{ color: 'grey' }}
                selectedTextStyle={{ color: 'black' }}
                // customStyle={{ marginTop: '20px' }}
            />
        </Grid>
        <Grid item xs={3}>
       
        <DropdownComponent
                data={CityList} // Pass the reshaped data
                labelField={labelField}
                valueField={codeField}
                Loading={Loading}
                value={userData[0]?.EndPlaceCode || 'مقصد'}
             
                // value={selectedValue}
                onChange={(To) => {
                  console.log('To Address : => ', To)
                  if (To.code.toString() === userData[0]?.StartPlaceCode.toString()) {

                      const myNextList = [...userData];
                      const DatesStep = myNextList;
                      DatesStep[0].StartPlace = '';
                      DatesStep[0].StartPlaceCode = '';
                      setUserData(myNextList)
                  }
                  const myNextList = [...userData];
                  const DatesStep = myNextList;
                  DatesStep[0].EndPlace = To.name_fa.toString();
                  DatesStep[0].EndPlaceCode = To.code.toString();
                  setUserData(myNextList)
                  console.log('myNextList',myNextList)

                  localStorage.setItem('storageData',JSON.stringify(myNextList))
                  //setIsFocus(true);
              }}
                placeholder="مقصد"
                // width="300px"
                ShowIcon={true}
                labelStyle={{ color: 'black' }}
                placeholderStyle={{ color: 'grey' }}
                selectedTextStyle={{ color: 'black' }}
                // customStyle={{ marginTop: '20px' }}
            />
        </Grid>
        <Grid item xs={3}>

        
           <DatePickers
                DatePlaceholder="تاریخ"
                isDatePickerVisible={isDatePickerVisible}
                setDatePickerVisibility={setIsDatePickerVisible}
                // DateValue={userData}
                setDataValue={setUserData}
                DateValue={userData}
            />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained"  fullWidth  size='medium'
          style={{backgroundColor:'#e6f2ff',color:'black'}}
          onClick={()=>{
            if (userData[0].StartPlace != "" && userData[0].EndPlace != "")
              navigate('/bus-schedule')
          else {
              alert('لطفا کلیه گزینه ها را انتخاب کنید');
          }
          }}
          >
            جستجوی اتوبوس
          </Button>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

const StyledCard = styled(Box)({
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
  // maxWidth: '800px',
  margin: ' auto',
  minWidth:'1000px'
});

export default SearchCard;