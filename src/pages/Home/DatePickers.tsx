import React, { useState } from 'react';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useTranslation } from 'react-i18next';
import moment from 'moment-jalaali';
// import { useMemo } from 'react';
import { Box, TextField, Button } from '@mui/material'; // Using Material-UI for styling

function DatePickers(props) {
    const { DatePlaceholder, isDatePickerVisible, setDatePickerVisibility, DateValue, setDataValue, DataValue } = props;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { t, i18n } = useTranslation();

    const handleDateChange = (date) => {
        setDatePickerVisibility(false);
        console.log('date', new Date(date))
        if (date) {
            setSelectedDate(new Date(date));
            const myNextList = [...DateValue];
            myNextList[0].CurrentDate = new Date(date);
            setDataValue(myNextList);
            console.log('myNextList', myNextList)

            localStorage.setItem('storageData', JSON.stringify(myNextList))
        }
    };

    const formatDate = (date) => {
        return date ? moment(date).format('jYYYY/jMM/jDD') : 'تاریخ';
    };

    return (
        <Box style={{ textAlign: 'center' }}>
            {/* <TextField
                type='text'
                defaultValue={formatDate(DateValue[0].CurrentDate)}
                variant='outlined'
                disabled
                inputProps={
                    { readOnly: true }
                }
            /> */}
            {/* <Text style={{ color: DateValue[0].CurrentDate === '' ? 'gray' : 'black', fontSize: '14px', fontFamily: 'Poppins' }}>
                
            </Text> */}
            {/* <Button variant="outlined" onClick={() => setDatePickerVisibility(true)}>
                Select Date
            </Button> */}


            {i18n.language === 'fa' ?
                <DatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    calendar={persian}
                    locale={persian_fa}
                    style={{ height: 50, width: 200, textAlign: 'center', fontSize: 17 }}
                    minDate={moment().toDate()}
                />
                :

                <DatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    // calendar={persian}
                    // locale={persian_fa}
                    style={{ height: 50, width: 200, textAlign: 'center', fontSize: 17 }}
                    minDate={moment().toDate()}
                />

            }


        </Box>
    );
}

export default DatePickers;