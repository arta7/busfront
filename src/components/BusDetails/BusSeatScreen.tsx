import React, { useState, useMemo, useEffect } from "react";
// import { Text, View, ScrollView, TouchableOpacity, FlatList, StyleSheet, Linking } from "react-native";
// import { BusSeatScreenStyle } from '../../styles';
// import { Picker } from '@react-native-picker/picker';
// import IconMI from "react-native-vector-icons/MaterialCommunityIcons";
// import IconA from "react-native-vector-icons/AntDesign";
// import IconFA from "react-native-vector-icons/FontAwesome";
// import { RouteName } from "../../routes";
// import { useSelector } from "react-redux";
// import { Button, LikeUnlike } from "../../components";
// import { SH, SF, SW, Colors, Fonts } from "../../utils";
// import { BusSeatData, MobileSelectData, BusSeatUpperData, BusSeatShowData, busSeat } from '../../utils/Imagedataset';
// import { useTranslation } from 'react-i18next';
// import { useTheme, useRoute } from '@react-navigation/native';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FlatList from 'flatlist-react';
import BusSeats from "./BusSeats";
import { BusDetailss, busPreReserves } from "../../Api/ApiMaster";
import UserContext from '../../UserContext';
// import { height, width } from "react-native-bottom-tab/src/AnimatedTabBar/utils";
// import PlaceIcon from "react-native-vector-icons/MaterialIcons";
// import PersianDatePicker from 'react-native-persian-date-picker2';
// import { TextInput } from 'react-native-paper';
// import Toast from 'react-native-simple-toast';
import Loadings from './Loadings';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { Typography, TextField, Button } from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';





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
                .required('شماره موبایل را وارد کنید')

            ,
            // date: yup
            //     .string()
            //     .required('تاریخ تولد را انتخاب کنید'),
            code: yup
                .string().min(10, 'کد ملی باید 10 کاراکتر باشد')
                .required('کد ملی را وارد کنید')

        })
    )
})




const BusSeatScreen = (props) => {
    let CurrentRow = 0;
    const { navigation } = props;

    // const { t } = useTranslation();
    // const route = useRoute();
    // const { detailsStore } = useSelector(state => state.DataReducer) || {};
    const [tabShow, SettabShow] = useState('1');
    const ColumnCount = [{}, {}, {}, {}, {}]
    // const { Colors } = useTheme();
    // const BusSeatScreenStyles = useMemo(() => BusSeatScreenStyle(Colors), [Colors]);
    const { userData, setUserData } = React.useContext(UserContext);
    const [Loading, setLoading] = useState(true);
    const [ReturnData, setReturnData] = useState(true);
    const [Data, setData] = useState([])
    const [BusPerson, setBusPerson] = useState([])
    const [datePickerVisibility, setDatePickerVisibility] = React.useState({ status: false, id: 0 });

    const [ReturnLinking, setReturnLinking] = useState('')



    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),

        initialValues: {
            // Initial values for the array
            items: BusPerson
            //   name: '', family: '', mobile: '', birthDate: '', codemelli: ''
            // ... other initial items

        },

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

            busPreReserves(userData[0].RequestNumber, route.params?.data.sourceCode, route.params?.data.busCode, userData[0].Token,
                passengers, route.params?.data.price * BusPerson.length, telephone,
                contact, clientUserTelephone, clientUserEmail, setLoading, {
                headers: {
                    'accept': 'text/plain',
                    "Access-Control-Allow-Origin": "*",
                    'Authorization': userData[0]?.Token
                }
            }, setReturnLinking, props)

        }

    };




    let _handleOpenURL = (event) => {

        navigation.replace(RouteName.BOOKING_TAB)



    }
    useEffect(() => {
        // console.log('navigation', userData[0])
        setReturnData(false)
        BusDetailss(userData[0].RequestNumber, route.params?.data.sourceCode, route.params?.data.busCode,
            userData[0].Token, setLoading, setData, props, setReturnData)



        // Linking.getInitialURL().then((ev) => {
        //     console.log('ev url => ', ev);
        //     if (ev) {
        //         _handleOpenURL(ev);
        //     }
        // }).catch(err => {
        //     console.warn('An error occurred', err);
        // });
        // var urlListener = Linking.addEventListener('url', _handleOpenURL);

        // return () => {
        //     urlListener.remove();
        // };


    }, [])

    function numberShow(n) {
        return n > 9 ? "" + n : "0" + n;
    }


    const MobileSelect = (item, index) => {
        return (
            <div style={BusSeatScreenStyles.FlightsCityBox}>
                <div style={BusSeatScreenStyles.BackArrowBoxWidthSet}>
                    <Button onClick={() =>
                    //navigation.navigate(RouteName.BUS_LIST_SCREEN) 
                    {

                    }
                    }>
                        {/* <IconA name="arrowright" size={SF(20)} color={Colors.black_text_color} /> */}
                    </Button>
                </div>
            </div>
        )
    }

    const BusSeatShowFunction = (item, index) => {
        return (
            <div style={BusSeatScreenStyles.SeatAvlblBox}>
                <div style={BusSeatScreenStyles.SeatAvChildBox}>
                    {/* <IconMI name={item.Seaticon} color={item.SeaticonColor} size={SF(22)} /> */}
                    <Typography style={BusSeatScreenStyles.SeatAvChildBoxText}>{t(item.text)}</Typography>
                </div>
            </div>
        )
    }
    const onBirthDatePickerConfirm = (objVal, id) => {
        let dataString = objVal.value[0] + '-' + numberShow(objVal.value[1]) + '-' + numberShow(objVal.value[2]);

        const myNextList = [...BusPerson];
        const DatesStep = myNextList;
        console.log('DatesStep', DatesStep)
        const seatToUpdate = DatesStep.filter(a => a.chairNumber == id)
        seatToUpdate[0].date = dataString;
        setBusPerson(myNextList)

        setDatePickerVisibility({ status: false, id: id });
        return true;
    }

    const renderPerson = (item, index) => {
        const itemErrors = errors.items?.[index];
        // const { errors } = control;
        return (
            <div key={index} style={{ width: '100%', height: 'auto', padding: 10, 
                backgroundColor: 'rgba(190,240,250,0.5)', borderRadius: 10, borderWidth: 0.5, marginBottom: '3%' }}
            >
                <div>
                    <Typography style={{
                        color: 'black', fontSize: '12'
                        // , fontFamily: Fonts.Poppins_Italic 
                    }}>مسافر صندلی  {item.chairNumber} :  </Typography>
                </div>
                <div style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, alignItems: 'center' }}>
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
                                            height: 50, borderRadius: 10, textAlign: 'right'
                                            //    , fontFamily: Fonts.Poppins_Italic 
                                        }}
                                        onChange={(text) => {

                                            const myNextList = [...BusPerson];
                                            const DatesStep = myNextList;
                                            console.log('DatesStep', DatesStep)
                                            const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                                            seatToUpdate[0].name = text;
                                            setBusPerson(myNextList)
                                            console.log('BusPerson', BusPerson)
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
                        {itemErrors?.name && <Typography style={{ color: 'red', fontFamily: Fonts.Poppins_Italic }}>* {itemErrors.name.message}</Typography>}
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
                                    style={{ height: 50, color: 'black', borderRadius: 10, textAlign: 'right', fontFamily: Fonts.Poppins_Italic }}
                                    onChange={(text) => {
                                        const myNextList = [...BusPerson];
                                        const DatesStep = myNextList;
                                        console.log('DatesStep', DatesStep)
                                        const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                                        seatToUpdate[0].family = text;
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



                <div style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}>


                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextField
                                style={{ width: '97%', height: 50, color: 'black', borderRadius: 10, textAlign: 'right', fontFamily: Fonts.Poppins_Italic }}
                                onChange={(text) => {
                                    const myNextList = [...BusPerson];
                                    const DatesStep = myNextList;
                                    console.log('DatesStep', DatesStep)
                                    const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                                    seatToUpdate[0].mobile = text;
                                    setBusPerson(myNextList)
                                    console.log('BusPerson', BusPerson)
                                    onChange(text)
                                }}
                                // mode='outlined'
                                value={item.mobile}
                                label={'شماره موبایل'}
                                // placeholderTextColor={'black'}
                                maxLength={11}
                            />
                        )}
                        name={`items.${index}.mobile`}
                    />


                    {itemErrors?.mobile && (<Typography style={{
                        color: 'red', textAlign: 'right'
                        // , fontFamily: Fonts.Poppins_Italic 
                    }}>* {itemErrors?.mobile.message}</Typography>)}


                </div>



                <>

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Button style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}
                                onClick={() => { setDatePickerVisibility({ status: true, id: item.chairNumber }) }}>
                                <TextField
                                    style={{ width: '97%', height: 50, color: 'black', borderRadius: 10, textAlign: 'center', fontFamily: Fonts.Poppins_Italic }}
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
                </>




                <div style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, alignItems: 'center' }}>

                    <div style={{ width: '65%', height: 70, marginRight: '2%', }}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}

                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    style={{ height: 50, color: 'black', borderRadius: 10, textAlign: 'right', fontFamily: Fonts.Poppins_Italic }}
                                    onChange={(text) => {
                                        const myNextList = [...BusPerson];
                                        const DatesStep = myNextList;
                                        const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                                        seatToUpdate[0].code = text;
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
                            label="Gender"
                            onChange={(itemValue, itemIndex) => {
                                const myNextList = [...BusPerson];
                                const DatesStep = myNextList;
                                const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                                seatToUpdate[0].gender = itemValue.target.value;
                                setBusPerson(myNextList)
                            }
                            }
                        >
                            {/* <Picker
                            selectedValue={item.gender}
                            mode="dropdown"
                            style={{ width: '100%', height: '100%' }}
                            onValueChange={(itemValue, itemIndex) => {
                                const myNextList = [...BusPerson];
                                const DatesStep = myNextList;
                                const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                                seatToUpdate[0].gender = itemValue;
                                setBusPerson(myNextList)
                            }
                            }> */}

                            <MenuItem value="2"> آقا</MenuItem>
                            <MenuItem value="3">خانم</MenuItem>
                        </Select>
                    </div>
                </div>


            </div >
        )
    }

    return (
        <div style={BusSeatScreenStyles.MinFlexView}>
            {
                Loading ?
                    <Loadings />
                    :
                    <>
                        <div >
                            <div>
                                <FlatList
                                    data={MobileSelectData}
                                    renderItem={({ item, index }) => MobileSelect(item, index)}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </div>
                        </div>


                        {/* <ScrollView
                        keyboardShouldPersistTaps="handled"
                        style={BusSeatScreenStyles.ContentContainerStyle}
                    > */}
                        {ReturnData ?
                            <>
                                <div style={{
                                    width: '100%', borderWidth: 1, height: 200, borderRadius: 10, borderColor: 'gray',
                                    marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgba(190,240,250,0.5)'
                                }}>


                                    <div style={{ width: '60%', }}>
                                        <div style={{ width: '100%', height: '60%' }}>

                                        </div>
                                        <div style={{ width: '90%', marginLeft: '10%', height: '40%', alignItems: 'flex-start' }}>
                                            <Typography style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '12', }}>{route.params?.data.baseCompany}</Typography>
                                            <Typography style={{ textAlign: 'center', color: 'gray', fontSize: '12', }}>{route.params?.data.carType}</Typography>
                                        </div>

                                    </div>

                                    <div style={{ height: '100%', borderWidth: 1, backgroundColor: 'black', borderColor: 'gray' }}>

                                    </div>

                                    <div style={{ width: '38%', alignItems: 'flex-start' }}>
                                        <div style={{ flexDirection: 'row', alignItems: 'center', height: '25%' }}>
                                            {/* <PlaceIcon name={'directions-bus'} color={'gray'} size={SH(22)} /> */}
                                            <Typography style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '12px', }}>{route.params?.data.origin?.terminal != '' ?
                                                route.params?.data.origin?.terminal : route.params?.data.origin?.cityName}</Typography>
                                        </div>


                                        <div style={{ height: '25%' }}>
                                            <Typography style={{ textAlign: 'center', color: 'gray', fontSize: '12px', }}>ساعت حرکت</Typography>
                                            <Typography style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '12px', }}>{route.params?.data.timeMove}</Typography>
                                        </div>

                                        <div style={{ height: '25%' }}>
                                            <Typography style={{ textAlign: 'center', color: 'gray', fontSize: '12px', }}>تاریخ حرکت</Typography>
                                            <Typography style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '12px', }}>{route.params?.data.dateMove}</Typography>
                                        </div>

                                        <div style={{ flexDirection: 'row', alignItems: 'center', height: '25%' }}>
                                            {/* <PlaceIcon name={'place'} color={'gray'} size={'22px'} /> */}
                                            <Typography style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '12px', }}>{route.params?.data.destination?.terminal != ''
                                                ? route.params?.data.destination?.terminal : route.params?.data.destination?.cityName}</Typography>
                                        </div>
                                    </div>

                                </div>



                                <div style={[{ marginBottom: '3%', borderWidth: 1, paddingBottom: '5%', paddingTop: '5%', borderRadius: 10, borderColor: 'gray', backgroundColor: 'rgba(190,240,250,0.5)' }]}>
                                    <div style={[BusSeatScreenStyles.BusSratflatlistbox, {
                                        borderRadius: 10, width: '90%', marginHorizontal: '5%', borderWidth: 0.5, borderColor: 'gray'
                                    }]}>
                                        <FlatList
                                            data={BusSeatShowData}
                                            renderItem={({ item, index }) => BusSeatShowFunction(item, index)}
                                            keyExtractor={item => item.id}
                                            horizontal
                                        />
                                    </div>
                                    <div style={{ borderRadius: 10, marginTop: 5, borderRadius: 10, width: '90%', marginHorizontal: '5%' }}>
                                        <div style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography style={{ color: 'black', fontWeight: 'bold', fontSize: '12px' }} >
                                                جلوی اتوبوس
                                            </Typography>
                                            <div style={{ width: '40%', height: 2, backgroundColor: 'black', marginVertical: 5, }}>

                                            </div>

                                        </div>
                                        <div >
                                            {

                                                <BusSeats data={Data} setData={setData} BusPerson={BusPerson} setBusPerson={setBusPerson} />
                                            }


                                        </div>
                                    </div>
                                </div>




                                <div >
                                    {

                                        <FlatList
                                            data={BusPerson}
                                            renderItem={({ item, index }) => renderPerson(item, index)}
                                            keyExtractor={item => item.id}
                                        />
                                    }

                                </div>


                            </>
                            :
                            <div style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: '10%', width: '80%', marginTop: '50%' }}>
                                <Typography style={{ textAlign: 'center', fontSize: '12px', color: 'black' }}>دریافت اطلاعات از سمت سرور مرکزی برای این اتوبوس دچار مشکل شده است.</Typography>
                            </div>

                        }




                        {/* </ScrollView > */}


                        <div style={{ marginTop: '5%' }}>

                            <div style={BusSeatScreenStyles.BusFinalBoookedBox}>
                                <div style={BusSeatScreenStyles.Widthone}>
                                    <Typography style={[BusSeatScreenStyles.Selectedtext, { color: 'black' }]}>جمع کل قیمت</Typography>
                                    <Typography style={{...BusSeatScreenStyles.SelectedSeattext}}>{route.params?.data.price * BusPerson.length} ریال</Typography>
                                </div>
                                {/* <div style={BusSeatScreenStyles.Widthtwo}>
                        <Typography style={BusSeatScreenStyles.Selectedtext}>{t("Book_for")}</Typography>
                        <Typography style={BusSeatScreenStyles.SelectedSeattext}><IconFA name="rupee" color={Colors.black_text_color} size={SF(14)} /> 1</Typography>
                    </div> */}
                                <div style={BusSeatScreenStyles.Widththree}>
                                    <Button title={t('Proceed')} ButtonStyle={[BusSeatScreenStyles.ButtonStyle, {}]}

                                        onClick={handleSubmit(onPressSend, console.log('error'))}
                                        disable={BusPerson.length == 0 ? true : false}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <PersianDatePicker
                            visible={datePickerVisibility.status}
                            onConfirm={(obc) => onBirthDatePickerConfirm(obc, datePickerVisibility.id)}
                            startYear={1280}
                            endYear={1403}
                            containerStyle={{ marginHorizontal: 5 }}
                            pickercontainerStyle={{}}
                            pickerWrapperStyle={{ borderWidth: 1, borderRadius: 10, borderColor: 'gray', marginHorizontal: 3 }}
                            pickerItemStyle={{}}
                            submitTextStyle={{}}
                            defaultValue={[1370, 7, 5]}
                        /> */}
                    </>
            }
        </div >
    );
};
const styles = StyleSheet.create({
    seat: {
        //   flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 5, marginBottom: 15
        //   width:80
    },
    seatText: {
        fontSize: '12px'
    },
    row: {
        flexDirection: 'row', justifyContent: 'space-between'
        //   ,flexWrap:'wrap'
    },
    seatSpacer: {
        // Adjust spacer width as needed
    },
    rowcheck: {

        flexDirection: 'row', width: '100%', height: 100, marginVertical: 10,
    }
});
export default BusSeatScreen;