
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
import getTheme from '../../theme';

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
  const { t ,i18n } = useTranslation();
 const theme = getTheme(i18n.language);
 

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
                textAlign: { xs: 'center', sm: ['en', 'ru'].includes(i18n.language) ?  'right' : 'left' },
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
                  <LinkContainer to="/about"  sx={{ fontFamily: theme.typography.fontFamily }}>{t('footer.aboutUs')}</LinkContainer>
                </ListItem>
               
                <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <LinkContainer to="/terms-and-conditions"  sx={{ fontFamily: theme.typography.fontFamily }}>{t('footer.termsConditions')}</LinkContainer>
                </ListItem>
              </List>
            </Grid>

            {/* Support Links */}
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                textAlign: { xs: 'center', sm:  ['en', 'ru'].includes(i18n.language)?  'right' : 'left'},
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
                {/* <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <LinkContainer to="/refund-policy">{t('footer.refundPolicy')}</LinkContainer>
                </ListItem> */}
                <ListItem sx={{ padding: 0, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <LinkContainer to="/contactus"  sx={{ fontFamily: theme.typography.fontFamily }}>{t('footer.contactUs')}</LinkContainer>
                </ListItem>
              </List>
            </Grid>

            {/* Frame Image */}
            {/* <Grid
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

              
            </Grid> */}


{/* Frame Image and Trust Seal */}
<Grid
  item
  xs={12}
  sm={4}
  sx={{
    display: 'flex',
    justifyContent: { xs: 'center', sm: 'flex-end' },
    alignItems: 'center',
    gap: 2, // Adds some spacing between the frame and trust seal
  }}
>
  <Box
    component="img"
    src={frame}
    alt={t('footer.frameAlt')}
    sx={{ width: 138, height: 'auto' }}
  />
  
  {/* Trust Seal Badge */}
  <a 
    referrerpolicy='origin' 
    target='_blank' 
    href='https://trustseal.enamad.ir/?id=521154&Code=y4g5FtkXFk1mu78DVkDJoiKxTAIDGH5F'
    style={{ display: 'inline-block' }}
  >
    <img 
      referrerpolicy='origin' 
      src='https://trustseal.enamad.ir/logo.aspx?id=521154&Code=y4g5FtkXFk1mu78DVkDJoiKxTAIDGH5F' 
      alt='' 
      style={{ 
        cursor: 'pointer',
        width: 'auto',
        height: 'auto',
        maxWidth: '100px' // Adjust as needed
      }} 
      code='y4g5FtkXFk1mu78DVkDJoiKxTAIDGH5F'
    />
  </a>
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
            {'© ' +new Date().getFullYear() + ' '+ t('footer.copyright') }
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