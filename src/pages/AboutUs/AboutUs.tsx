// // import React from 'react';
// // import {
// //   Container,
// //   Typography,
// //   ThemeProvider,
// //   Box,
// // } from '@mui/material';
// // import {useTheme} from '@mui/material/styles';
// // import useMediaQuery from '@mui/material/useMediaQuery';
// // import { createTheme } from '@mui/material/styles';

// // import aboutUsImage from '../../assets/about-us.png';
// // import ourMissionImage from '../../assets/our-mission.jpg';
// // import ourStoryImage from '../../assets/our-story.jpg';

// // // Create RTL theme
// // const rtlTheme = createTheme({
// //   direction: 'rtl',
// //   typography: {
// //     fontFamily: [
// //       'Vazir',
// //       'Tahoma',
// //       'Arial',
// //       'sans-serif'
// //     ].join(','),
// //   },
// // });

// // const AboutUs = () => {
// //   const theme = useTheme();
// //   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

// //   const styles = {
// //     image: {
// //       width: isSmallScreen ? '24rem' : '32rem',
// //       borderRadius: '8px',
// //       marginBottom: '2rem',
// //     },
// //     text: {
// //       textAlign: 'right',
// //       lineHeight: 2,
// //     }
// //   };
  
// //   return (
// //     <ThemeProvider theme={rtlTheme}>
// //       <Box dir="rtl" bgcolor="#ffffff" pb="4rem" mt="3rem">
// //         <Container maxWidth="lg">
// //           <Box
// //             py="4rem"
// //             display="flex"
// //             flexDirection={{xs: 'column-reverse', md: 'row'}}
// //             alignItems="center"
// //           >
// //             <Box flex="1">
// //               <Box flex="1" textAlign="center" mb={{xs: '2rem', md: 0}}>
// //                 <img src={ourStoryImage} alt="Our Story" style={styles.image} />
// //               </Box>
// //               <Typography variant="body1" style={styles.text}>
// //                 شرکت بین المللی پرتوسیر ایرانیان با بیش از 27 سال تجربه (1376) با هدف ارائه خدمات حمل ونقل بین المللی مسافر تاسیس شد و مدیر عامل کنونی آقای ناصرکلانتری شرکت با ناوگانی متشکل از 30دستگاه اتوبوس ، 24 دستگاه ون و 54 دستگاه سواری های برون شهری ملکی و تحت پوشش و با بهره مندی از شعب فعال در شهرهای چون  ساری ،مشهد ، قم ، اهواز ، زاهدان ، تایباد ، زابل ،چابهار، رشت ، تهران و ایلام ،  در مسیر های مهمی چون مشهد – هرات /تایباد – هرات /زابل – قندهار/ زاهدان – نیمروز/ زاهدان –کویته/ چابهار- کراچی / اهواز – بصره/ قم – نجف / ساری – نجف / رشت – نجف ودیگر مقاصد آسیای میانه فعالیت دارد. 
// //                 پرتوسیر ایرانیان سابقه ای درخشان در توسعه همکاری های  خمل ونقل جاده ای با کشورهایی مانند ترکمنستان ، عراق و افغانستان دارد. در دهه اخیر، این شرکت با توسعه ناوگان و گسترش ارتباطات بین المللی ، جایگاه خود را به عنوان یکی از فعالترین شرکت های حمل ونقل برون مرزی ایران تثبیت نموده است . 
// //                 این مجموعه ، افتخار دارد در ایام اربعین به عنوان یکی از برترین شرکت های حمل ونقل زائران شناخته شده و با ناوگان اختصاصی و رانندگان مجرب ، خدمات ویژه ای را به زائران حسینی ارائه دهد . 
// //                 پرتوسیرایرانیان با تکیه برظرفیت های داخلی و روابط منطقه ای ، به دنبال توسعه پایدار در زمینه حمل ونقل ، گردشگری و خدمات مسافری است و در مسیر تحقق سند چشم انداز 1404 برای تبدیل ایران به قطب گردشگری منطقه ، گام برمی دارد.
// //               </Typography>
// //             </Box>
// //           </Box>

// //           <Box
// //             py="4rem"
// //             display="flex"
// //             flexDirection={{xs: 'column-reverse', md: 'row'}}
// //             alignItems="center"
// //           >
// //             {/* Additional RTL content can be added here */}
// //           </Box>
// //         </Container>
// //       </Box>
// //     </ThemeProvider>
// //   );
// // };

// // export default AboutUs;

// import React from 'react';
// import {
//   Container,
//   Typography,
//   ThemeProvider,
//   Box,
//   Grid,
// } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { createTheme } from '@mui/material/styles';

// import aboutUsImage from '../../assets/about-us.png';
// import ourMissionImage from '../../assets/our-mission.jpg';
// import ourStoryImage from '../../assets/our-story.jpg';

// // Create RTL theme
// const rtlTheme = createTheme({
//   direction: 'rtl',
//   typography: {
//     fontFamily: [
//       'Vazir',
//       'Tahoma',
//       'Arial',
//       'sans-serif'
//     ].join(','),
//   },
// });

// const AboutUs = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   const sectionStyles = {
//     container: {
//       py: 8,
//       bgcolor: '#ffffff',
//     },
//     image: {
//       width: '100%',
//       maxWidth: isSmallScreen ? '24rem' : '32rem',
//       borderRadius: '8px',
//       boxShadow: theme.shadows[4],
//     },
//     text: {
//       textAlign: 'right',
//       lineHeight: 2,
//       color: theme.palette.text.secondary,
//     },
//     title: {
//       fontWeight: 700,
//       color: theme.palette.primary.main,
//       mb: 4,
//       textAlign: 'center',
//     }
//   };

//   return (
//     <ThemeProvider theme={rtlTheme}>
//       <Box dir="rtl" component="section" sx={sectionStyles.container}>
//         <Container maxWidth="lg">
//           {/* Our Story Section */}
//           <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
//             <Grid item xs={12} md={6}>
//               <Box textAlign="center">
//                 <img 
//                   src={ourStoryImage} 
//                   alt="Our Story" 
//                   style={sectionStyles.image} 
//                 />
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Typography variant="h4" sx={sectionStyles.title}>
//                 Our Story
//               </Typography>
//               <Typography variant="body1" sx={sectionStyles.text}>
//                 Parto Sir Iranian International Company was established in 1997 with over 27 years of experience in international passenger transportation services. Under the leadership of CEO Mr. Naser Kalantari, we operate a modern fleet including 30 buses, 24 vans, and 54 intercity vehicles.
//               </Typography>
//             </Grid>
//           </Grid>

//           {/* Our Network Section */}
//           <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
//             <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
//               <Typography variant="h4" sx={sectionStyles.title}>
//                 Our Network
//               </Typography>
//               <Typography variant="body1" sx={sectionStyles.text}>
//                 With branches in Sari, Mashhad, Qom, Ahvaz, Zahedan, Taybad, Zabol, Chabahar, Rasht, Tehran, and Ilam, we serve key international routes including:
//                 <ul>
//                   <li>Mashhad-Herat / Taybad-Herat</li>
//                   <li>Zabol-Kandahar / Zahedan-Nimroz</li>
//                   <li>Zahedan-Quetta / Chabahar-Karachi</li>
//                   <li>Ahvaz-Basra / Qom-Najaf</li>
//                   <li>Sari-Najaf / Rasht-Najaf</li>
//                 </ul>
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
//               <Box textAlign="center">
//                 <img 
//                   src={aboutUsImage} 
//                   alt="Our Network" 
//                   style={sectionStyles.image} 
//                 />
//               </Box>
//             </Grid>
//           </Grid>

//           {/* Our Achievements Section */}
//           <Grid container spacing={6} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Box textAlign="center">
//                 <img 
//                   src={ourMissionImage} 
//                   alt="Our Achievements" 
//                   style={sectionStyles.image} 
//                 />
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Typography variant="h4" sx={sectionStyles.title}>
//                 Our Achievements
//               </Typography>
//               <Typography variant="body1" sx={sectionStyles.text}>
//                 We have established strong transportation partnerships with Turkmenistan, Iraq, and Afghanistan. During Arbaeen, we're recognized as a top transportation provider for pilgrims, offering dedicated fleets and professional drivers.
//                 <br /><br />
//                 Building on domestic capabilities and regional relationships, we're committed to sustainable development in transportation, tourism, and passenger services, working toward Iran's Vision 2025 as a regional tourism hub.
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default AboutUs;

import React from 'react';
import {
  Container,
  Typography,
  ThemeProvider,
  Box,
  Grid,
  Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import aboutUsImage from '../../assets/about-us.png';
import ourMissionImage from '../../assets/our-mission.jpg';
import ourStoryImage from '../../assets/our-story.jpg';
import getTheme from '../../theme';

// Create RTL theme
const rtlTheme = createTheme({
  // direction: 'rtl',
  typography: {
    fontFamily: [
      'IranianSans'
      
    ].join(','),
  },
});

const AboutUs = () => {
 
 
  const { t, i18n } = useTranslation();


 const theme = getTheme(i18n.language);
 const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isPersian = ['fa', 'ar', 'pa'].includes(i18n.language ) ;
  //i18n.language === 'fa';

  const sectionStyles = {
    container: {
      py: 8,
      bgcolor: '#ffffff',
    },
    image: {
      width: '100%',
      maxWidth: isSmallScreen ? '24rem' : '32rem',
      borderRadius: '8px',
      boxShadow: theme.shadows[4],
    },
    text: {
      textAlign: !isPersian ? 'right' : 'left',
      lineHeight: 2,
      color: theme.palette.text.secondary,
      fontFamily:'IranianSans'
    },
    title: {
      fontWeight: 700,
      color: theme.palette.primary.main,
      mb: 4,
      textAlign: 'center',
      fontFamily:'IranianSans'
    },
    languageButton: {
      position: 'fixed',
      top: '80px',
      right: isPersian ? 'unset' : '20px',
      left: isPersian ? '20px' : 'unset',
      zIndex: 1000,
    }
  };

  return (
    <ThemeProvider theme={rtlTheme}>
      <Box dir={isPersian ? 'rtl' : 'ltr'} component="section" sx={sectionStyles.container}>
       
        
        <Container maxWidth="lg">
          {/* Our Story Section */}
          <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <img 
                  src={ourStoryImage} 
                  alt={t('about.storyImageAlt')} 
                  style={sectionStyles.image} 
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={sectionStyles.title}>
                {t('about.storyTitle')}
              </Typography>
              <Typography variant="body1" sx={sectionStyles.text}>
                {t('about.storyContent')}
              </Typography>
            </Grid>
          </Grid>

          {/* Our Network Section */}
          <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Typography variant="h4" sx={sectionStyles.title}>
                {t('about.networkTitle')}
              </Typography>
              <Typography variant="body1" sx={sectionStyles.text}>
                {t('about.networkContent1')}
                <ul>
                  <li>{t('about.route1')}</li>
                  <li>{t('about.route2')}</li>
                  <li>{t('about.route3')}</li>
                  <li>{t('about.route4')}</li>
                  <li>{t('about.route5')}</li>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box textAlign="center">
                <img 
                  src={aboutUsImage} 
                  alt={t('about.networkImageAlt')} 
                  style={sectionStyles.image} 
                />
              </Box>
            </Grid>
          </Grid>

          {/* Our Achievements Section */}
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <img 
                  src={ourMissionImage} 
                  alt={t('about.achievementsImageAlt')} 
                  style={sectionStyles.image} 
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={sectionStyles.title}>
                {t('about.achievementsTitle')}
              </Typography>
              <Typography variant="body1" sx={sectionStyles.text}>
                {t('about.achievementsContent1')}
                <br /><br />
                {t('about.achievementsContent2')}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AboutUs;