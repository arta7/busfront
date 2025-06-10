
import axios from 'axios'
import { Address } from './Address'
import { useNavigate } from "react-router-dom";
// import Toast from 'react-native-simple-toast';
// import { RouteName } from '../routes';



// export function Registers(_email,_username,_pass,_updateIndicator,self)
// {
//     let params={
//         "username":_username,
//         "email":_email,
//         "password":_pass
//     }
//     _updateIndicator(true)
//   //  console.log('address',Address.URL + Address.Account.Register)
//   axios.post(Address.URL + Address.Account.Register,params,axisConfig)
//   .then( (response)=> {

//           console.log('response',response.data) 
//           _updateIndicator(false) 
//           self.navigate('Login')
//   })
//   .catch( (error)=> {
//     _updateIndicator(false)
//     alert(error.response.data.data[0].messages[0].message);

//     console.log('errors',error.response.data.data[0].messages[0].message)  
//   })
// }


export function LoginAPI(_phone, self, userData, setUserData, setLoading) {
  var params = new FormData();
  params.append("Phone", _phone)
  axios({
    url: Address.URL + Address.Login.Login,
    method: 'POST',
    data: params,
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'multipart/form-data'
    }
  })
    .then((response) => {

      //  console.log('response login Data',response.data.status) 
      if (response.data.status == 1) {
        localStorage.setItem('Mobile', _phone)
        const myNextList = [...userData];
        const DatesStep = myNextList;
        DatesStep[0].Mobile = _phone;

        setUserData(myNextList)
        localStorage.setItem('storageData', JSON.stringify(myNextList))


        // alert(response.data.message);

        //    self.navigate(RouteName.OTP_VERYFY_SCREEN)
      }

      setLoading(false)

    })
    .catch((error) => {

      // setLoading(false)
      console.log('errors', error)

    })
}



export function VerifyAPI(_phone, _code, self, setLoading, userData, setUserData, sendnavigate,setOpen) {
  //  const navigate = useNavigate();
  var params = {
    "Phone": _phone,
    "VerificationCode": _code
  }
  axios({
    url: Address.URL + Address.Login.verify,
    method: 'POST',
    data: params,
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'multipart/form-data'
    }
  })
    .then((response) => {

      console.log('response verify Data', response)
      if (response.data.status == 1) {

        localStorage.setItem('Token', response.data.data.token)
        localStorage.setItem('Name', response.data.data.firstName + ' ' + response.data.data.lastName)
        const myNextList = [...userData];
        const DatesStep = myNextList;
        DatesStep[0].Name = response.data.data.firstName + ' ' + response.data.data.lastName;
        DatesStep[0].Token = response.data.data.token;
        setUserData(myNextList)
        localStorage.setItem('storageData', JSON.stringify(myNextList))
        // alert(response.data.message);

        sendnavigate(true)
        self('/')
        // navigate('/Home')
        setLoading(false)
        setOpen(false)
      }
      else {
        // alert(response.data.errors.VerificationCode);

        alert('Code is not Correct'); 
        sendnavigate(false)
      }

      return true;

    })
    .catch((error) => {
      sendnavigate(false)
      setLoading(false)
      alert('Code is not Correct');
      console.log('errors', error)
      return false;
    })
}



// export function ForgetPasswords(_email,_updateIndicator,self,check)
// {
//     let params={
//         "email":_email
//     }
//     _updateIndicator(true)
//    console.log('address',Address.URL + Address.Account.ForgetPassword)
//   axios.post(Address.URL + Address.Account.ForgetPassword,params,axisConfig)
//   .then( (response)=> {

//           console.log('response forget pass :',response.data.ok) 
//           _updateIndicator(false) 
//           if(response.data.ok && check==true)
//           {
//            self.navigate('OTPAccept',{email:_email})

//           }
//           else  if(response.data.ok && check==false)
//           {
//             Toast.showWithGravity('Token Send,Please Check Your Email'
//                 , Toast.LONG, Toast.CENTER);
//           }
//   })
//   .catch( (error)=> {
//     _updateIndicator(false)
//     Toast.showWithGravity(error.response.data.data[0].messages[0].message
//         , Toast.LONG, Toast.CENTER);
//     console.log('errors',error.response.data.data[0].messages[0].message)  
//   })
// }



export function GetCities(setData, Data, self, setLoading, axisConfigToken) {
  axios.get(Address.URL + Address.Bus.Cities, axisConfigToken)
    .then((response) => {


      console.log('response', response.data.data)
      setData(response.data.data)
      setLoading(false)

    })
    .catch((error) => {
      console.log('errors', error)
      setLoading(false)
    })
}


export function GetProfile(setData, Data, self, setLoading, axisConfigToken) {
  axios.get(Address.URL + Address.Login.GetProfile, axisConfigToken)
    .then((response) => {


      console.log('response', response.data.data)
      setData(response.data.data)
      setLoading(false)

    })
    .catch((error) => {
      console.log('errors', error)
      setLoading(false)
    })
}



export function BusSearch(_originCity, _destinationCity, _date, HeaderValue, setLoading, SetData, setUserData, userData, self) {
  var params = {
    "originCity": _originCity,
    "destinationCity": _destinationCity,
    "date": _date
  }

  console.log('params', params)

  axios({
    url: Address.URL + Address.Bus.search,
    method: 'POST',
    data: params,
    headers: {
      'accept': 'text/plain',
      // 'Content-Type' : 'multipart/form-data',
      'Authorization': HeaderValue
    }
  })
    .then((response) => {

      console.log('response bus Data', response.data.data)
      SetData(response.data.data)


      const myNextList = [...userData];
      const DatesStep = myNextList;
      DatesStep[0].RequestNumber = response.data.data?.requestNumber;
      setUserData(myNextList)
      setLoading(false)

    })
    .catch((error) => {
      console.log('errors', error)
      setLoading(false)
    })
}




export function BusDetailss(_requestNumber, _sourceCode, _busCode, HeaderValue, setLoading, SetData, self, setReturnData) {
  var params = {
    "requestNumber": _requestNumber,
    "sourceCode": _sourceCode,
    "busCode": _busCode
  }
  setLoading(true)

  axios({
    url: Address.URL + Address.Bus.busdetails,
    method: 'POST',
    data: params,
    headers: {
      'accept': 'text/plain',
      // 'Content-Type' : 'multipart/form-data',
      'Authorization': HeaderValue
    }
  })
    .then((response) => {

      console.log('response bus details Data', response.data.data)
      SetData(response.data.data)
      setLoading(false)
      // setReturnData(true)

    })
    .catch((error) => {
      console.log('errors bus details : ', error)
      setLoading(false)
      // setReturnData(false)
    })
}


export function busPreReserves(_requestNumber, _sourceCode, _busCode, HeaderValue, _passengers, _price, _telephone, _contact
  , _clientUserTelephone, _clientUserEmail, setLoading, axisConfigToken, _setReturnValue, self) {
  var params = {
    "requestNumber": _requestNumber,
    "busCode": _busCode,
    "sourceCode": _sourceCode,
    "passengers": _passengers,
    "price": _price,
    "telephone": _telephone,
    "contact": _contact,
    "clientUserTelephone": _clientUserTelephone,
    "clientUserEmail": _clientUserEmail
  }
  // console.log('params =>', params)
  setLoading(true)

  axios({
    url: Address.URL + Address.Bus.busReserves,
    method: 'POST',
    data: params,
    headers: {
      'accept': 'text/plain',
      // 'Content-Type' : 'multipart/form-data',
      'Authorization': HeaderValue
    }
  })
    .then((response) => {

      console.log('response bus busPreReserves : ', response.data.data)
      ChargeAccount(_price, setLoading, axisConfigToken, _setReturnValue, self)
      // Toast.showWithGravity(response.data.data.reserveRequestId, Toast.LONG, Toast.CENTER);
      // SetData(response.data.data)
      //setLoading(false)

    })
    .catch((error) => {
      console.log('error.response',error.response)
      alert(error.response.data.message)
      setLoading(false)
    })
}


export function ChargeAccount(_amount, setLoading, axisConfigToken, _setReturnValue, self) {
  // console.log('params =>',params)
  setLoading(true)

  axios.get(Address.URL + Address.ChargeAccount.Charge + _amount, axisConfigToken)
    .then((response) => {

      console.log('response bus charge account : ', response.data.data)
      // Toast.showWithGravity(response.data.data, Toast.LONG, Toast.CENTER);
      // SetData(response.data.data)
      BillingFactor(response.data.data.id, setLoading, axisConfigToken, _setReturnValue, self)
      // setLoading(false)

    })
    .catch((error) => {
      console.log('errors bus charge account  : ', error)
      setLoading(false)
    })
}

export function BillingFactor(_factorId, setLoading, axisConfigToken, _setReturnValue, self) {

  setLoading(true)

  axios.get(Address.URL + Address.ChargeAccount.BillingFactor + _factorId, axisConfigToken)
    .then((response) => {


      // Toast.showWithGravity(response.data.data, Toast.LONG, Toast.CENTER);
      // SetData(response.data.data)
      _setReturnValue(response.data.data)
      setLoading(false)
      console.log('response bus BillingFactor : ', response.data.data)
      window.open(response.data.data, "_self");

      //     window.addEventListener('message', handlePaymentMessage, false);

      // function handlePaymentMessage(event) {
      //   console.log('event',event)
      //   // Optionally check for the origin for security
      //   if (event.origin == response.data.data) return; // Replace with your actual payment domain

      //   if (event.data === "app://Kalanholding") {
      //     console.log('test redirect')
      //     // Successfully paid, redirect the current window
      //     // navigate('/success'); // Redirect or perform the desired action
      //   }
      // }

      // return () => window.removeEventListener('message', handlePaymentMessage);
      //     let history = useHistory();

      //  history.push("/home");


    }


    )
    .catch((error) => {
      console.log('errors bus charge account  : ', error)
      setLoading(false)
    })
}


