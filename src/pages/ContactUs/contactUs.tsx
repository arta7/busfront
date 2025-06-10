// // import {Box, CardContent, Grid, styled, Typography} from '@mui/material';
// // import help from '../../assets/contactushelp.svg';
// // import call from '../../assets/contactuscall.svg';
// // import email from '../../assets/contactusemail.svg';
// // import coverimage from '../../assets/BusImage.jpg';

// // const ContactUs = () => {
// //   return (
// //     <>
// //       <Box marginLeft={{xs: '-1rem', sm: '-1rem', md: '-5rem', lg: '-5rem'}}>
// //         <img
// //           src={coverimage}
// //           alt="coverimage"
// //           style={{
// //             paddingTop: '1rem',
// //             position: 'absolute',
// //             width: '100vw',
// //             height: 'auto',
// //             zIndex: '-1',
// //             backgroundRepeat: 'no-repeat',
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center',
// //           }}
// //         />
// //       </Box>

// //       <ContactUsStyle>
// //         <Typography
// //           variant={'h1'}
// //           fontSize={{xs: '2rem', sm: '2.5rem', md: '3.3rem', lg: '5rem'}}
// //           marginTop={{xs: '-1rem', sm: '1rem', md: '4rem', lg: '6.5rem'}}
// //           marginBottom={{xs: '2rem', sm: '1rem', md: '4rem', lg: '12rem'}}
// //         >
// //           Contact us
// //         </Typography>
// //       </ContactUsStyle>

// //       <Grid container direction="column" marginTop="3rem" zIndex={'10'}>
// //         <Grid item>
// //           <Box marginBottom="4rem">
// //             <Grid container  spacing={{xs: 4, md: 10}}  padding={{md: '0.2rem'}}>
// //               <Grid item xs={12} md={4} >
// //                 <Cardall
// //                   padding={{
// //                     xs: '5rem 0rem 5rem',
// //                     sm: '5rem 0rem 5rem',
// //                     md: '10rem 0rem 10rem',
// //                     lg: '8rem 0rem 10rem',
// //                   }}
// //                 >
// //                   <CardContent>
// //                     <img
// //                       src={help}
// //                       alt="help"
// //                       style={{
// //                         width: '100px',
// //                         height: '100px',
// //                         marginBottom: '2rem',
// //                       }}
// //                     />
// //                     <Typography variant={'h4'} fontWeight={'600'}>
// //                       Live chat & Help center
// //                     </Typography>
// //                     <Typography marginTop="4rem" color="textSecondary">
// //                       Want a quick answer to a Burning Question?
// //                     </Typography>
// //                     <Typography marginTop="4rem" color="textSecondary">
// //                       Visit our Help Center for FAQs or chat with a live agent.
// //                     </Typography>
// //                     {/* <Typography
// //                       variant={'h4'}
// //                       fontWeight="600"
// //                       marginTop="5rem"
// //                     >
// //                       Live Chat Hours:
// //                     </Typography> */}
// //                     {/* <Typography
// //                       marginTop="2rem"
// //                       variant={'h5'}
// //                       fontWeight={'600'}
// //                     >
// //                       Monday to Friday:
// //                     </Typography>
// //                     <Typography marginTop={'2 rem'} color={'textSecondary'}>
// //                       6:00 am - 4:00 pm PT
// //                     </Typography> */}
// //                   </CardContent>
// //                 </Cardall>
// //               </Grid>


// //                <Grid item xs={12} md={4}>
// //                 <Cardall
// //                   padding={{
// //                     xs: '5rem 0rem 5rem',
// //                     sm: '5rem 0rem 5rem',
// //                     md: '10rem 0rem 10rem',
// //                     lg: '8rem 0rem 10rem',
// //                   }}
// //                 >
// //                   <CardContent>
// //                     <img
// //                       src={call}
// //                       alt="help"
// //                       style={{
// //                         width: '90px',
// //                         height: '90px',
// //                         marginTop: '1.5rem',
// //                         marginBottom: '1rem',
// //                       }}
// //                     />
// //                     <Typography variant={'h4'} fontWeight={'600'}>
// //                      Mobile & WhatsApp
// //                     </Typography>
// //                     <Typography
// //                       marginTop="4rem"
// //                       variant={'h4'}
// //                       fontWeight={'600'}
// //                     >
// //                     09117976855
// //                     </Typography>
// //                     <Typography
// //                       marginTop="4rem"
// //                       variant={'h4'}
// //                       fontWeight={'600'}
// //                     >
// //                       Phone 
// //                     </Typography>

// //                     <Typography
// //                       marginTop="2rem"
// //                       variant={'h5'}
// //                       fontWeight={'600'}
// //                     >
// //                     +981133243056
// //                     </Typography>
                 
                    
                  
// //                   </CardContent>
// //                 </Cardall>
// //               </Grid>


// //              <Grid item xs={16} md={4}>
// //                 <Cardall
// //                   padding={{
// //                     xs: '5rem 0rem 5rem',
// //                     sm: '5rem 0rem 5rem',
// //                     md: '10rem 0rem 10rem',
// //                     lg: '8rem 0rem 10rem',
// //                   }}
// //                 >
// //                   <CardContent>
// //                     <img
// //                       src={email}
// //                       alt="help"
// //                       style={{
// //                         width: '110px',
// //                         height: '110px',
// //                         marginBottom: '2rem',
// //                       }}
// //                     />
// //                     <Typography variant={'h4'} fontWeight={'600'}>
// //                       Email Us
// //                     </Typography>
                    
                    

                   
                 
// //                     <Typography marginTop={'2rem'} color={'textSecondary'}>
// //                     info@kalanholding.com
// //                     </Typography>
// //                      <Typography marginTop={'2rem'} color={'textSecondary'}>
// //                     KalanHolding@gmail.com
// //                     </Typography>
// //                   </CardContent>
// //                 </Cardall>
// //               </Grid>

              
// //             </Grid>
// //           </Box>
// //         </Grid>
// //       </Grid>
// //     </>
// //   );
// // };

// // const Cardall = styled(Box)({
// //   display: 'flex',
// //   flexDirection: 'column',
// //   backgroundColor: '#FAFAFA',
// //   justifyContent: 'center',
// //   gap: '1.5rem',
// //   alignItems: 'center',
// //   textAlign: 'center',
// //   boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.3)',
// //   width: '100%',
// //   // padding: '3rem 5rem 4rem',
// //   height: '90%',
// // });

// // const ContactUsStyle = styled(Box)({
// //   display: 'flex',
// //   justifyContent: 'center',
// //   alignItems: 'center',
// //   color: 'white',
// //   paddingTop: '5rem',
// // });

// // export default ContactUs;


// import { Box, CardContent, Grid, Typography, styled, Link } from '@mui/material';
// import help from '../../assets/contactushelp.svg';
// import call from '../../assets/contactuscall.svg';
// import email from '../../assets/contactusemail.svg';
// import coverimage from '../../assets/BusImage.jpg';

// const contactMethods = [
//   {
//     icon: help,
//     iconSize: { width: 100, height: 100 },
//     title: 'Live chat & Help center',
//     details: [
//       'Want a quick answer to a Burning Question?',
//       'Visit our Help Center for FAQs or chat with a live agent.'
//     ]
//   },
//   {
//     icon: call,
//     iconSize: { width: 90, height: 90, mt: '1.5rem', mb: '1rem' },
//     title: 'Mobile & WhatsApp',
//     details: [
//       { 
//         label: '+989117976855', 
//         variant: 'h4', 
//         fontWeight: '600',
//         href: 'tel:+989117976855',
//         isLink: true
//       },
//       { label: 'Phone', variant: 'h4', fontWeight: '600' },
//       { 
//         label: '+981133243056', 
//         variant: 'h5', 
//         fontWeight: '600',
//         href: 'tel:+981133243056',
//         isLink: true
//       }
//     ]
//   },
//   {
//     icon: email,
//     iconSize: { width: 110, height: 110 },
//     title: 'Email Us',
//     details: [
//       {
//         label: 'info@kalanholding.com',
//         href: 'mailto:info@kalanholding.com',
//         isLink: true
//       },
//       {
//         label: 'KalanHolding@gmail.com',
//         href: 'mailto:KalanHolding@gmail.com',
//         isLink: true
//       }
//     ]
//   }
// ];

// const ContactUs = () => {
//   return (
//     <>
//       <CoverImage />
      
//       <ContactUsTitle variant="h1">
//         Contact us
//       </ContactUsTitle>

//       <ContactGrid container>
//         {contactMethods.map((method, index) => (
//           <Grid item xs={12} md={4} key={index}>
//             <ContactCard>
//               <CardContent>
//                 <ContactIcon src={method.icon} alt={method.title} style={method.iconSize} />
//                 <ContactMethodTitle variant="h4" fontWeight="600">
//                   {method.title}
//                 </ContactMethodTitle>
                
//                 {method.details.map((detail, i) => (
//                   detail.isLink ? (
//                     <ContactLink 
//                       key={i}
//                       href={detail.href}
//                       color="textSecondary"
//                       mt={4}
//                       underline="hover"
//                     >
//                       {detail.label}
//                     </ContactLink>
//                   ) : typeof detail === 'string' ? (
//                     <ContactDetail key={i} color="textSecondary" mt={4}>
//                       {detail}
//                     </ContactDetail>
//                   ) : (
//                     <ContactDetail 
//                       key={i} 
//                       variant={detail.variant} 
//                       fontWeight={detail.fontWeight}
//                       mt={i === 0 ? 4 : 2}
//                     >
//                       {detail.label}
//                     </ContactDetail>
//                   )
//                 ))}
//               </CardContent>
//             </ContactCard>
//           </Grid>
//         ))}
//       </ContactGrid>
//     </>
//   );
// };

// // Styled components
// const CoverImage = styled('img')(({ theme }) => ({
//   src: coverimage,
//   alt: "coverimage",
//   paddingTop: '1rem',
//   position: 'absolute',
//   width: '100vw',
//   height: 'auto',
//   zIndex: '-1',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   marginLeft: {
//     xs: '-1rem',
//     sm: '-1rem',
//     md: '-5rem',
//     lg: '-5rem'
//   }
// }));

// const ContactUsTitle = styled(Typography)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   color: 'white',
//   paddingTop: '5rem',
//   marginTop: {
//     xs: '-1rem',
//     sm: '1rem',
//     md: '4rem',
//     lg: '6.5rem'
//   },
//   marginBottom: {
//     xs: '2rem',
//     sm: '1rem',
//     md: '4rem',
//     lg: '12rem'
//   },
//   fontSize: {
//     xs: '2rem',
//     sm: '2.5rem',
//     md: '3.3rem',
//     lg: '5rem'
//   }
// }));

// const ContactGrid = styled(Grid)(({ theme }) => ({
//   marginTop: '3rem',
//   zIndex: '10',
//   '& .MuiGrid-item': {
//     marginBottom: '4rem'
//   }
// }));

// const ContactCard = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   backgroundColor: '#FAFAFA',
//   justifyContent: 'center',
//   gap: '1.5rem',
//   alignItems: 'center',
//   textAlign: 'center',
//   boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.3)',
//   width: '100%',
//   height: '90%',
//   padding: {
//     xs: '5rem 0rem 5rem',
//     sm: '5rem 0rem 5rem',
//     md: '10rem 0rem 10rem',
//     lg: '8rem 0rem 10rem'
//   }
// }));

// const ContactIcon = styled('img')(({ theme }) => ({
//   marginBottom: '2rem'
// }));

// const ContactMethodTitle = styled(Typography)(({ theme }) => ({
//   marginBottom: '2rem'
// }));

// const ContactDetail = styled(Typography)(({ theme }) => ({
//   '&:not(:first-of-type)': {
//     marginTop: '2rem'
//   }
// }));

// const ContactLink = styled(Link)(({ theme }) => ({
//   display: 'block',
//   '&:not(:first-of-type)': {
//     marginTop: '2rem'
//   },
//   color: theme.palette.text.secondary,
//   textDecoration: 'none',
//   '&:hover': {
//     textDecoration: 'underline'
//   }
// }));

// export default ContactUs;


import { Box, CardContent, Grid, Typography, styled, Link, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import help from '../../assets/contactushelp.svg';
import call from '../../assets/contactuscall.svg';
import email from '../../assets/contactusemail.svg';
import coverimage from '../../assets/BusImage.jpg';
import getTheme from '../../theme';

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const theme = getTheme(i18n.language);

  const contactMethods = [
    {
      icon: help,
      iconSize: { width: 100, height: 100 },
      title: t('contact.help.title'),
      details: [
        t('contact.help.detail1'),
        t('contact.help.detail2')
      ]
    },
    {
      icon: call,
      iconSize: { width: 90, height: 90, mt: '1.5rem', mb: '1rem' },
      title: t('contact.phone.title'),
      details: [
        { 
          label: '+989117976855', 
          variant: 'h4', 
          fontWeight: '600',
          href: 'tel:+989117976855',
          isLink: true
        },
        { label: t('contact.phone.label'), variant: 'h4', fontWeight: '600' },
        { 
          label: '+981133243056', 
          variant: 'h5', 
          fontWeight: '600',
          href: 'tel:+981133243056',
          isLink: true
        }
      ]
    },
    {
      icon: email,
      iconSize: { width: 110, height: 110 },
      title: t('contact.email.title'),
      details: [
        {
          label: 'info@kalanholding.com',
          href: 'mailto:info@kalanholding.com',
          isLink: true
        },
        {
          label: 'KalanHolding@gmail.com',
          href: 'mailto:KalanHolding@gmail.com',
          isLink: true
        }
      ]
    }
  ];

  // const toggleLanguage = () => {
  //   i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa');
  // };

  return (
    <>
      <CoverImage />
      
    

      <ContactUsTitle variant="h1" className={['fa', 'ar','pa'].includes(i18n.language)? 'rtl-text' : ''}>
        {t('contact.title')}
      </ContactUsTitle>

      <ContactGrid container>
        {contactMethods.map((method, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ContactCard>
              <CardContent>
                <ContactIcon src={method.icon} alt={method.title} style={method.iconSize} />
                <ContactMethodTitle variant="h4" className={['fa', 'ar','pa'].includes(i18n.language) ? 'rtl-text' : ''} 
                 sx={{ fontFamily: theme.typography.fontFamily }}
                 >
                  {method.title}
                </ContactMethodTitle>
                
                {method.details.map((detail, i) => (
                  detail.isLink ? (
                    <ContactLink 
                      key={i}
                      href={detail.href}
                      color="textSecondary"
                      mt={4}
                      underline="hover"
                      className={['fa', 'ar','pa'].includes(i18n.language)? 'rtl-text' : ''}
                       sx={{ fontFamily: theme.typography.fontFamily }}
                    >
                      {detail.label}
                    </ContactLink>
                  ) : typeof detail === 'string' ? (
                    <ContactDetail 
                      key={i} 
                       sx={{ fontFamily: theme.typography.fontFamily }}
                      color="textSecondary" 
                      mt={4}
                      className={['fa', 'ar','pa'].includes(i18n.language) ? 'rtl-text' : ''}
                    >
                      {detail}
                    </ContactDetail>
                  ) : (
                    <ContactDetail 
                      key={i} 
                       sx={{ fontFamily: theme.typography.fontFamily }}
                      variant={detail.variant} 
                      fontWeight={detail.fontWeight}
                      mt={i === 0 ? 4 : 2}
                      className={['fa', 'ar','pa'].includes(i18n.language)? 'rtl-text' : ''}
                    >
                      {detail.label}
                    </ContactDetail>
                  )
                ))}
              </CardContent>
            </ContactCard>
          </Grid>
        ))}
      </ContactGrid>
    </>
  );
};

// Styled components (همانند قبل)
const CoverImage = styled('img')(({ theme }) => ({
  src: coverimage,
  alt: "coverimage",
  paddingTop: '1rem',
  position: 'absolute',
  width: '100vw',
  height: 'auto',
  zIndex: '-1',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginLeft: {
    xs: '-1rem',
    sm: '-1rem',
    md: '-5rem',
    lg: '-5rem'
  }
}));

const ContactUsTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  paddingTop: '5rem',
  marginTop: {
    xs: '-1rem',
    sm: '1rem',
    md: '4rem',
    lg: '6.5rem'
  },
  marginBottom: {
    xs: '2rem',
    sm: '1rem',
    md: '4rem',
    lg: '12rem'
  },
  fontSize: {
    xs: '2rem',
    sm: '2.5rem',
    md: '3.3rem',
    lg: '5rem'
  },
  '&.rtl-text': {
     fontFamily: theme.typography.fontFamily,
    direction: 'rtl'
  }
}));

const ContactGrid = styled(Grid)(({ theme }) => ({
  marginTop: '3rem',
  zIndex: '10',
  '& .MuiGrid-item': {
    marginBottom: '4rem'
  }
}));

const ContactCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FAFAFA',
  justifyContent: 'center',
  gap: '1.5rem',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.3)',
  width: '100%',
  height: '90%',
  fontFamily: theme.typography.fontFamily,

  padding: {
    xs: '5rem 0rem 5rem',
    sm: '5rem 0rem 5rem',
    md: '10rem 0rem 10rem',
    lg: '8rem 0rem 10rem'
  }
}));

const ContactIcon = styled('img')(({ theme }) => ({
  marginBottom: '2rem',
   fontFamily: theme.typography.fontFamily,
}));

const ContactMethodTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '2rem',
  fontFamily: theme.typography.fontFamily,
  '&.rtl-text': {
  fontFamily: theme.typography.fontFamily,
    direction: 'rtl'
  }
}));

const ContactDetail = styled(Typography)(({ theme }) => ({
  '&:not(:first-of-type)': {
    marginTop: '2rem'
  },
  '&.rtl-text': {
     fontFamily: theme.typography.fontFamily,
    direction: 'rtl'
  }
}));

const ContactLink = styled(Link)(({ theme }) => ({
  display: 'block',
  '&:not(:first-of-type)': {
    marginTop: '2rem'
  },
  color: theme.palette.text.secondary,
   fontFamily: theme.typography.fontFamily,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  },
  '&.rtl-text': {
    fontFamily: theme.typography.fontFamily,
    direction: 'rtl'
  }
}));

export default ContactUs;