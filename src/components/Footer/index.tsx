// // // import {
// // //   Typography,
// // //   useTheme,
// // //   List,
// // //   ListItem,
// // //   styled,
// // //   Grid,
// // // } from '@mui/material';
// // // import {Link} from 'react-router-dom';
// // // import Logo from '../../assets/iiitdmj-logo.png';
// // // import frame from '../../assets/frame.png';

// // // const LinkContainer = styled(Link)(() => ({
// // //   textDecoration: 'none',
// // //   color: 'inherit',
// // //   '&:hover': {
// // //     textDecoration: 'underline',
// // //   },
// // //   padding: 0,
// // //   display: 'block',
// // // }));

// // // export default function Footer() {
// // //   const theme = useTheme();
// // //   return (
// // //     <Grid
// // //       container
// // //       sx={{
// // //         flexDirection: {xs: 'column', sm: 'row'},
// // //         borderTop: '1px solid black',
// // //         paddingTop: '3rem',
// // //       }}
// // //     >
// // //       <Grid
// // //         container
// // //         item
// // //         sx={{padding: 0}}
// // //         md={3}
// // //         justifyContent="center"
// // //         alignItems="center"
// // //       >
// // //         <Typography
// // //           variant="h1"
// // //           color={theme.palette.primary.main}
// // //           fontSize={{xs: '2.25rem', md: '2.5rem'}}
// // //           sx={{paddingBottom: {xs: '0.5rem', md: 0}}}
// // //         >
// // //           <LinkContainer
// // //             to="/"
// // //             style={{textDecoration: 'none', color: '#117ef5'}}
// // //           >
// // //             <img src={Logo} alt="College-logo" width={138} />
// // //           </LinkContainer>
// // //         </Typography>
// // //       </Grid>
// // //       <Grid item md={9}>
// // //         <Grid>
// // //           <Grid
// // //             container
// // //             direction="row"
// // //             justifyContent="center"
// // //             sx={{paddingLeft: 0}}
// // //           >
// // //             <Grid item xs={4} sx={{paddingLeft: 0}}>
// // //               <Typography sx={{textDecoration: 'underline'}} variant="h6">
// // //                 Useful Links
// // //               </Typography>
// // //               <List sx={{padding: 0}}>
// // //                 <LinkContainer to="/about" sx={{padding: 0}}>
// // //                   AboutUs
// // //                 </LinkContainer>
// // //                 <LinkContainer to="/privacy-policy" sx={{padding: 0}}>
// // //                   Privacy Policy
// // //                 </LinkContainer>
// // //                 <LinkContainer to="/terms-and-conditions" sx={{padding: 0}}>
// // //                   Terms & Conditions
// // //                 </LinkContainer>
// // //               </List>
// // //             </Grid>
// // //             {/* <Grid item xs={4} sx={{paddingLeft: 0}}>
// // //               <Typography sx={{textDecoration: 'underline'}} variant="h6">
// // //                 Products
// // //               </Typography>
// // //               <List sx={{padding: 0}}>
// // //                 <LinkContainer to="/pricing" sx={{padding: 0}}>
// // //                   Pricing
// // //                 </LinkContainer>
// // //               </List>
// // //             </Grid> */}
// // //             <Grid item xs={4} sx={{paddingLeft: 0}}>
// // //               <Typography sx={{textDecoration: 'underline'}} variant="h6">
// // //                 Support
// // //               </Typography>
// // //               <List sx={{padding: 0}}>
// // //                 <LinkContainer to="/refund-policy" sx={{padding: 0}}>
// // //                   Refund Policy
// // //                 </LinkContainer>
// // //                 <LinkContainer to="/contactus" sx={{padding: 0}}>
// // //                   Contact Us
// // //                 </LinkContainer>
// // //               </List>
// // //             </Grid>

// // //                <Grid item xs={4} sx={{paddingLeft: 0}}>
// // //               <Typography sx={{textDecoration: 'underline'}} variant="h6">
               
// // //               </Typography>
// // //               <List sx={{padding: 0}}>
// // //                   <img src={frame} alt="College-logo" width={138} />
// // //               </List>
// // //             </Grid>
// // //           </Grid>
// // //         </Grid>
// // //         <Grid
// // //           container
// // //           item
// // //           spacing={2}
// // //           padding={3}
// // //           sx={{
// // //             paddingLeft: 0,
// // //             display: 'flex',
// // //             justifyContent: 'center',
// // //             alignItems: 'center',
// // //             [theme.breakpoints.down('sm')]: {
// // //               display: 'flex',
// // //               justifyContent: 'center',
// // //               alignItems: 'center',
// // //             },
// // //             [theme.breakpoints.up('lg')]: {
// // //               display: 'flex',
// // //               justifyContent: 'flex-start',
// // //             },
// // //           }}
// // //           alignItems="center"
// // //         >
// // //           <Grid item padding={0}>
// // //             {/* <img src={Logo} alt="College-logo" width={38} /> */}
// // //           </Grid>
// // //           <Grid item padding={0}>
// // //             {/* <Typography
// // //               align="center"
// // //               color={theme.palette.secondary.main}
// // //               sx={{fontSize: '1rem'}}
// // //               padding={0}
// // //             >
// // //               INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIGN AND
// // //               MANUFACTURING JABALPUR
// // //             </Typography> */}
// // //           </Grid>
// // //         </Grid>
// // //       </Grid>
// // //     </Grid>
// // //   );
// // // }

// // import {
// //   Typography,
// //   useTheme,
// //   List,
// //   ListItem,
// //   styled,
// //   Grid,
// // } from '@mui/material';
// // import { Link } from 'react-router-dom';
// // import Logo from '../../assets/iiitdmj-logo.png';
// // import frame from '../../assets/frame.png';

// // const LinkContainer = styled(Link)(() => ({
// //   textDecoration: 'none',
// //   color: 'inherit',
// //   '&:hover': {
// //     textDecoration: 'underline',
// //   },
// //   padding: 0,
// //   display: 'block',
// // }));

// // export default function Footer() {
// //   const theme = useTheme();

// //   return (
// //     <Grid
// //       container
// //       sx={{
// //         flexDirection: { xs: 'column', sm: 'row' },
// //         borderTop: '1px solid black',
// //         paddingTop: '3rem',
// //       }}
// //     >
// //       <Grid
// //         container
// //         item
// //         sx={{ padding: 0 }}
// //         md={3}
// //         justifyContent="center"
// //         alignItems="center"
// //       >
// //         <Typography
// //           variant="h1"
// //           color={theme.palette.primary.main}
// //           fontSize={{ xs: '2.25rem', md: '2.5rem' }}
// //           sx={{ paddingBottom: { xs: '0.5rem', md: 0 } }}
// //         >
// //           <LinkContainer to="/" style={{ textDecoration: 'none', color: '#117ef5' }}>
// //             <img src={Logo} alt="College-logo" width={138} />
// //           </LinkContainer>
// //         </Typography>
// //       </Grid>
// //       <Grid item md={9}>
// //         <Grid>
// //           <Grid
// //             container
// //             direction="row"
// //             justifyContent="center"
// //             sx={{ paddingLeft: 0 }}
// //           >
// //             <Grid item xs={4} sx={{ paddingLeft: 0 }}>
// //               <Typography sx={{ textDecoration: 'underline' }} variant="h6" color={'black'} 
// //             fontFamily={theme.typography.fontFamily}>
// //                 Useful Links
// //               </Typography>
// //               <List sx={{ padding: 0 }}>
// //                 <LinkContainer to="/about" sx={{ padding: 0,fontFamily:theme.typography.fontFamily }} >
// //                   About Us
// //                 </LinkContainer>
// //                 <LinkContainer to="/privacy-policy" sx={{ padding: 0 ,fontFamily:theme.typography.fontFamily }}>
// //                   Privacy Policy
// //                 </LinkContainer>
// //                 <LinkContainer to="/terms-and-conditions" sx={{ padding: 0,fontFamily:theme.typography.fontFamily  }}>
// //                   Terms & Conditions
// //                 </LinkContainer>
// //               </List>
// //             </Grid>
// //             <Grid item xs={4} sx={{ paddingLeft: 0 }}>
// //               <Typography sx={{ textDecoration: 'underline',fontFamily:theme.typography.fontFamily  }} variant="h6">
// //                 Support
// //               </Typography>
// //               <List sx={{ padding: 0 }}>
// //                 <LinkContainer to="/refund-policy" sx={{ padding: 0,fontFamily:theme.typography.fontFamily  }}>
// //                   Refund Policy
// //                 </LinkContainer>
// //                 <LinkContainer to="/contactus" sx={{ padding: 0 ,fontFamily:theme.typography.fontFamily }}>
// //                   Contact Us
// //                 </LinkContainer>
// //               </List>
// //             </Grid>
// //             <Grid item xs={4} sx={{ paddingLeft: 0 }}>
// //               <Typography sx={{ textDecoration: 'underline',fontFamily:theme.typography.fontFamily  }} variant="h6">
// //                 {/* You can add more links here if necessary */}
// //               </Typography>
// //               <List sx={{ padding: 0 }}>
// //                 <img src={frame} alt="College-frame" width={138} />
// //               </List>
// //             </Grid>
// //           </Grid>
// //         </Grid>
// //         <Grid
// //           container
// //           item
// //           spacing={2}
// //           padding={3}
// //           sx={{
// //             paddingLeft: 0,
// //             display: 'flex',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             [theme.breakpoints.down('sm')]: {
// //               display: 'flex',
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //             },
// //             [theme.breakpoints.up('lg')]: {
// //               display: 'flex',
// //               justifyContent: 'flex-start',
// //             },
// //           }}
// //           alignItems="center"
// //         >
// //           <Grid item padding={0}>
// //             {/* Additional logos or items can go here */}
// //           </Grid>
// //           <Grid item padding={0}>
// //             {/* Additional text or items can go here */}
// //           </Grid>
// //         </Grid>
// //       </Grid>
// //       <Grid
// //         item
// //         xs={12}
// //         sx={{
// //           marginTop: '2rem',
// //           textAlign: 'center',
// //           padding: '1rem 0',
// //           borderTop: '1px solid lightgray',
// //           backgroundColor: theme.palette.background.paper,
// //         }}
// //       >
// //           <Typography variant="body2" align="center" sx={{fontFamily:theme.typography.fontFamily }}>
// //             © {new Date().getFullYear()} kalanholding.com - Website designed by{' '}
// //             <LinkContainer href="https://tameshkgroup.com" target="_blank" rel="noopener noreferrer" sx={{fontFamily:theme.typography.fontFamily }}>
// //               <Typography variant="body2" color="inherit" sx={{fontFamily:theme.typography.fontFamily }}>
// //                 Tameshkgroup.com
// //               </Typography>
// //             </LinkContainer>
// //           </Typography>
// //       </Grid>
// //     </Grid>
// //   );
// // }


// import {
//   Typography,
//   useTheme,
//   List,
//   ListItem,
//   styled,
//   Grid,
//   Box,
// } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Logo from '../../assets/iiitdmj-logo.png';
// import frame from '../../assets/frame.png';

// const LinkContainer = styled(Link)(({ theme }) => ({
//   textDecoration: 'none',
//   color: 'inherit',
//   '&:hover': {
//     textDecoration: 'underline',
//   },
//   padding: '4px 0',
//   display: 'block',
//   fontFamily: theme.typography.fontFamily,
//   fontSize: '0.9rem',
// }));

// export default function Footer() {
//   const theme = useTheme();

//   return (
//     <Box
//       component="footer"
//       sx={{
//         width: '100%',
//         borderTop: '1px solid',
//         borderColor: 'divider',
//         paddingTop: '3rem',
//         backgroundColor: theme.palette.background.paper,
//       }}
//     >
//       <Grid
//         container
//         maxWidth="lg"
//         sx={{
//           margin: '0 auto',
//           paddingX: { xs: 2, sm: 4 },
//           flexDirection: { xs: 'column', md: 'row' },
//         }}
//       >
//         {/* Logo Section */}
//         <Grid
//           item
//           xs={12}
//           md={3}
//           sx={{
//             display: 'flex',
//             justifyContent: { xs: 'center', md: 'flex-start' },
//             alignItems: 'center',
//             paddingBottom: { xs: 2, md: 0 },
//           }}
//         >
//           <LinkContainer to="/">
//             <Box
//               component="img"
//               src={Logo}
//               alt="College-logo"
//               sx={{ width: { xs: 120, md: 138 } }}
//             />
//           </LinkContainer>
//         </Grid>

//         {/* Links Section */}
//         <Grid
//           item
//           xs={12}
//           md={9}
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//           }}
//         >
//           <Grid
//             container
//             spacing={2}
//             sx={{
//               justifyContent: { xs: 'center', md: 'space-between' },
//               paddingBottom: 3,
//             }}
//           >
//             {/* Useful Links */}
//             <Grid
//               item
//               xs={12}
//               sm={4}
//               sx={{
//                 textAlign: { xs: 'center', sm: 'left' },
//                 paddingBottom: { xs: 2, sm: 0 },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   textDecoration: 'underline',
//                   color: 'text.primary',
//                   fontFamily: theme.typography.fontFamily,
//                   marginBottom: 1,
//                 }}
//               >
//                 Useful Links
//               </Typography>
//               <List sx={{ padding: 0 }}>
//                 <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
//                   <LinkContainer to="/about">About Us</LinkContainer>
//                 </ListItem>
//                 <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
//                   <LinkContainer to="/privacy-policy">Privacy Policy</LinkContainer>
//                 </ListItem>
//                 <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
//                   <LinkContainer to="/terms-and-conditions">Terms & Conditions</LinkContainer>
//                 </ListItem>
//               </List>
//             </Grid>

//             {/* Support Links */}
//             <Grid
//               item
//               xs={12}
//               sm={4}
//               sx={{
//                 textAlign: { xs: 'center', sm: 'left' },
//                 paddingBottom: { xs: 2, sm: 0 },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   textDecoration: 'underline',
//                   color: 'text.primary',
//                   fontFamily: theme.typography.fontFamily,
//                   marginBottom: 1,
//                 }}
//               >
//                 Support
//               </Typography>
//               <List sx={{ padding: 0 }}>
//                 <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
//                   <LinkContainer to="/refund-policy">Refund Policy</LinkContainer>
//                 </ListItem>
//                 <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
//                   <LinkContainer to="/contactus">Contact Us</LinkContainer>
//                 </ListItem>
//               </List>
//             </Grid>

//             {/* Frame Image */}
//             <Grid
//               item
//               xs={12}
//               sm={4}
//               sx={{
//                 display: 'flex',
//                 justifyContent: { xs: 'center', sm: 'flex-end' },
//                 alignItems: 'center',
//               }}
//             >
//               <Box
//                 component="img"
//                 src={frame}
//                 alt="College-frame"
//                 sx={{ width: 138, height: 'auto' }}
//               />
//             </Grid>
//           </Grid>
//         </Grid>

//         {/* Copyright Section */}
//         <Grid
//           item
//           xs={12}
//           sx={{
//             marginTop: '2rem',
//             padding: '1rem 0',
//             borderTop: '1px solid',
//             borderColor: 'divider',
//             textAlign: 'center',
//           }}
//         >
//           <Typography
//             variant="body2"
//             sx={{ fontFamily: theme.typography.fontFamily }}
//           >
//             © {new Date().getFullYear()} kalanholding.com - Website designed by{' '}
//             <LinkContainer
//               to="https://tameshkgroup.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ display: 'inline' }}
//             >
//               Tameshkgroup.com
//             </LinkContainer>
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

import {
  Typography,
  useTheme,
  List,
  ListItem,
  styled,
  Grid,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../assets/iiitdmj-logo.png';
import frame from '../../assets/frame.png';
import { useTranslation } from 'react-i18next';

const LinkContainer = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
  padding: '4px 0',
  display: 'block',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.9rem',
}));

export default function Footer() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        borderTop: '1px solid',
        borderColor: 'divider',
        paddingTop: '3rem',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Grid
        container
        maxWidth="lg"
        sx={{
          margin: '0 auto',
          paddingX: { xs: 2, sm: 4 },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* Logo Section */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
            alignItems: 'center',
            paddingBottom: { xs: 2, md: 0 },
          }}
        >
          <LinkContainer to="/">
            <Box
              component="img"
              src={Logo}
              alt={t('footer.logoAlt')}
              sx={{ width: { xs: 120, md: 138 } }}
            />
          </LinkContainer>
        </Grid>

        {/* Links Section */}
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: { xs: 'center', md: 'space-between' },
              paddingBottom: 3,
            }}
          >
            {/* Useful Links */}
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                textAlign: { xs: 'center', sm: 'left' },
                paddingBottom: { xs: 2, sm: 0 },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textDecoration: 'underline',
                  color: 'text.primary',
                  fontFamily: theme.typography.fontFamily,
                  marginBottom: 1,
                }}
              >
                {t('footer.usefulLinks')}
              </Typography>
              <List sx={{ padding: 0 }}>
                <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <LinkContainer to="/about">{t('footer.aboutUs')}</LinkContainer>
                </ListItem>
                <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <LinkContainer to="/privacy-policy">{t('footer.privacyPolicy')}</LinkContainer>
                </ListItem>
                <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <LinkContainer to="/terms-and-conditions">{t('footer.termsConditions')}</LinkContainer>
                </ListItem>
              </List>
            </Grid>

            {/* Support Links */}
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                textAlign: { xs: 'center', sm: 'left' },
                paddingBottom: { xs: 2, sm: 0 },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textDecoration: 'underline',
                  color: 'text.primary',
                  fontFamily: theme.typography.fontFamily,
                  marginBottom: 1,
                }}
              >
                {t('footer.support')}
              </Typography>
              <List sx={{ padding: 0 }}>
                <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <LinkContainer to="/refund-policy">{t('footer.refundPolicy')}</LinkContainer>
                </ListItem>
                <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <LinkContainer to="/contactus">{t('footer.contactUs')}</LinkContainer>
                </ListItem>
              </List>
            </Grid>

            {/* Frame Image */}
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'flex-end' },
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={frame}
                alt={t('footer.frameAlt')}
                sx={{ width: 138, height: 'auto' }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Grid
          item
          xs={12}
          sx={{
            marginTop: '2rem',
            padding: '1rem 0',
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontFamily: theme.typography.fontFamily }}
          >
            {'© ' +new Date().getFullYear() + ' '+ t('footer.copyright')}
            <LinkContainer
              to="https://tameshkgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'inline' }}
            >
              Tameshkgroup.com
            </LinkContainer>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}