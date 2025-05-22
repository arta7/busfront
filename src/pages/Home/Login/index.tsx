import { cloneElement, forwardRef, isValidElement, useState ,useContext, useEffect } from 'react';
import { Render, Provider, Container, useStore, ContainerProps } from 'react-login-page';
import { Username } from './control/Username';
import { Password } from './control/Password';
import { Submit } from './control/Submit';
import { Footer } from './control/Footer';
import { Logo } from './control/Logo';
import { Title } from './control/Title';
import Modal from '@mui/material/Modal';

import './index.css';
import { Box, Button, TextField, Typography } from '@mui/material';

export * from 'react-login-page';
export * from './control/Username';
export * from './control/Password';
export * from './control/Submit';
export * from './control/Title';
export * from './control/Logo';


export * from './control/Footer';

import UserContext from './../../../UserContext';
import { LoginAPI, VerifyAPI } from '../../../Api/ApiMaster';
import { useNavigate ,useLocation } from 'react-router-dom';

const RenderLogin = () => {
  const { blocks = {}, extra = {}, data, ...label } = useStore();
  const { fields, buttons } = data || { fields: [] };
  return (
    <Render >
      <div className="login-page7-inner" 
       style={{height:window.innerHeight,justifyContent:'center',alignItems:'center'}}>
        <article>
          <header>
            {blocks.logo}
            {blocks.title}
          </header>
          {fields
            .sort((a, b) => a.index - b.index)
            .map((item, idx) => {
              const extraLabel = extra[item.name as keyof typeof extra];
              if (!item.children && !extraLabel) return null;
              if (!item.children && extraLabel) return <div key={idx}>{extraLabel}</div>;
              if (!item.children) return null;
              const labelElement = label[`$${item.name}`];
              return (
                <label className={`rlp-${item.name}`} htmlFor={item.name} key={item.name + idx}>
                  {labelElement && <span className={`login-page7-label`}>{labelElement}</span>}
                  {item.children}
                  {extraLabel && <div>{extraLabel}</div>}
                </label>
              );
            })}
          <section>
            {buttons
              .sort((a, b) => a.index - b.index)
              .map((item, idx) => {
                const child = item.children;
                if (!isValidElement(child)) return null;
                return cloneElement(child, {
                  ...child.props,
                  key: item.name + idx,
                });
              })}
          </section>
        </article>
      </div>
      {blocks.footer}
      <ul className="login-page7-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Render>
  );
};

const LoginPage = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children, className, ...divProps } = props;
  const [open,setopen] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const[mobileNumber,setmobileNumber] = useState('')
  const[code,setcode] = useState('')
  const [Loading, setLoading] = useState(false);
  const [sendnavigate,setsendnavigate] = useState(false)

  
  const navigate = useNavigate();
   const location = useLocation()

  const LoginPersons = () => {
    setLoading(true)
    
  LoginAPI(mobileNumber, null, userData, setUserData, setLoading);
  

}


  const verify_=  async ()=>{
     VerifyAPI(userData[0].Mobile.toString(), code, navigate,setLoading,userData,setUserData,setsendnavigate);
    
    

  }


useEffect(()=>{
  const checkAuth = async () => {
    try {
      // const isLoggedIn = Array.isArray(userData) && userData.length > 0 ? userData[0].Token : '';
      // console.log('isLoggedIn', isLoggedIn);

      // if (isLoggedIn != '') { // Check for empty token (user not logged in)
      //   console.log('test login - redirecting');
      //   navigate('/')
      // } else {
      //   console.log('User is logged in');
      //   // Optionally, you might want to fetch user data or perform other actions here
      // }
       if (userData && userData.length > 0 && userData[0].Token) {
        navigate('/');  // This condition can be simplified based on your needs
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      // Handle the error appropriately, e.g., set an error state or display a message
      
    } finally {
      
    }
  };

  checkAuth();
  // if(sendnavigate)
  // {
  //   navigate('/')
  // }
},[])


  return (
   
    <Provider >
     
      <Username  value={mobileNumber} setValue={setmobileNumber}/>
   
      <Logo />
   


    

        

      <Submit click={()=>{
        // console.log('mobile',mobileNumber)
        
         LoginPersons()
        setopen(true)
        
        }}/>
        
      <Container  {...divProps} ref={ref} className={`login-page7 ${className || ''}`}>
         <div style={{justifyContent:'center',alignItems:'center',marginTop:'20%'}}>
        <RenderLogin />
        </div>
        {children}
      </Container>
     
      <Modal
  open={open}
  onClose={()=>{}}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,borderWidth:1,borderColor:'black'
  }}
>

  <Box sx={{  width: 400,borderWidth:1,borderColor:'black',flexDirection:'column'
    ,backgroundColor:'white',alignItems:'center',display:'flex',justifyContent:'center',borderRadius:5,padding:5}}>
      <Typography>Please Fill Code Send to Your Phone</Typography>
<TextField
  id="filled-basic"
  label="Code"
  value={code}
  onChange={(e) => { setcode(e.target.value); }}
  variant="outlined"
  sx={{
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1c38bb', // Sets the border color
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1c38bb', // Sets the border color on hover
    },
    '&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1c38bb', // Sets the border color when focused
    },
    '& .MuiFormLabel-root': {
      color: '#1c38bb', // Sets the default label color
    },
    '&:hover .MuiFormLabel-root': {
      color: '#1c38bb', // Sets the label color on hover
    },
    '&.Mui-focused .MuiFormLabel-root': {
      color: '#1c38bb', // Sets the label color when focused
    },
  }}
/>

    <Button  style={{width:30,marginTop:30,backgroundColor:'#01a693',color:'black'}} onClick={()=>{
      
     
      
      setopen(false)
      verify_()
      }}>Submit</Button>
  
  </Box>
</Modal> 
    </Provider>

  );
});

type LoginComponent = typeof LoginPage & {
  Username: typeof Username;
  // Password: typeof Password;
  Submit: typeof Submit;
  Footer: typeof Footer;
  Logo: typeof Logo;
  Title: typeof Title;
};

const Logins = LoginPage as LoginComponent;

Logins.Username = Username;
// Logins.Password = Password;
Logins.Submit = Submit;
Logins.Footer = Footer;
Logins.Logo = Logo;
Logins.Title = Title;
Logins.displayName = 'BaseLoginPage';

export default Logins;
