export const Address = 
{
URL:'https://api.kalanholding.com/api',
Login:{
     Login:'/account/authenticate',
     verify:'/account/verify',
     Profile:'/UpdateUsers',  
     GetProfile:'/profile'
},
Bus:{
     Cities : '/bus/cities',
     search:'/bus/bussearch',
      busdetails:'/bus/bus-detail',
      busReserves:'/bus/bus-pre-reserve',
},
ChargeAccount:{
     Charge:'/billing/charge?amount=',
     BillingFactor:'/billing/payfactor/saman/'
}
}