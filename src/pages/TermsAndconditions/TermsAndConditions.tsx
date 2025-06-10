
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TermsAndPolicy_1 from '../../assets/termsAndPolicy_1.jpg';
import TermsAndPolicy_2 from '../../assets/termsAndPolicy_2.jpg';
import TermsAndPolicy_3 from '../../assets/termsAndPolicy_3.jpg';
import getTheme from '../../theme';

const styles = {
  container: {
    padding: '32px',
    backgroundColor: '#ffffff',
    color: '#000000',
    marginTop: '16px',
  },
  section: {
    marginBottom: '24px',
  },
  list: {
    paddingLeft: '20px',
  },
  image: {
    maxWidth: '20rem',
    height: 'auto',
    marginBottom: '2rem',
  },
};

const TermsAndConditions = () => {
  const { t ,i18n} = useTranslation();
  const theme = getTheme(i18n.language);

  return (
    <Box bgcolor="#ffffff" mt="3rem">
      <Container maxWidth="lg">
        <Box
          pt="4rem"
          display="flex"
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
          alignItems="center"
        >
          <Box flex="1">
            <Typography
              variant="h2"
              style={{ marginBottom: '3rem' }}
              gutterBottom
               sx={{ fontFamily: theme.typography.fontFamily }}
            >
              {t('terms.title')}
            </Typography>
            <Typography variant="body2" paragraph  sx={{ fontFamily: theme.typography.fontFamily }}>
              {t('terms.introduction')}
            </Typography>
            
            <Typography variant="h5" component="h2"  sx={{ fontFamily: theme.typography.fontFamily }}>
              {t('terms.registration.title')}
            </Typography>
            <div style={styles.section}>
              <Typography variant="body2" paragraph  sx={{ fontFamily: theme.typography.fontFamily }}>
                {t('terms.registration.1_1')}
              </Typography>
              <Typography variant="body2" paragraph  sx={{ fontFamily: theme.typography.fontFamily }}>
                {t('terms.registration.1_2')}
              </Typography>
            </div>
          </Box>
          <Box
            flex="1"
            textAlign="center"
            sx={{ marginBottom: { xs: '3rem', md: 0 } }}
          >
            <img src={TermsAndPolicy_1} alt={t('terms.images.about')} style={styles.image} />
          </Box>
        </Box>

        <Box
          py="4rem"
          display="flex"
          flexDirection={{ xs: 'column-reverse', md: 'row-reverse' }}
          alignItems="center"
        >
          <Box flex="1">
            <Typography variant="h3" component="h2" gutterBottom  sx={{ fontFamily: theme.typography.fontFamily }}>
              {t('terms.booking.title')}
            </Typography>
            <Typography variant="body2" paragraph  sx={{ fontFamily: theme.typography.fontFamily }}>
              {t('terms.booking.2_1')}
            </Typography>
            <Typography variant="body2" paragraph  sx={{ fontFamily: theme.typography.fontFamily }}>
              {t('terms.booking.2_2')}
            </Typography>
            <Typography variant="body2" paragraph  sx={{ fontFamily: theme.typography.fontFamily }}>
              {t('terms.booking.2_3')}
            </Typography>
          </Box>
          <Box flex="1" textAlign="center" mb={{ xs: '2rem', md: 0 }}>
            <img src={TermsAndPolicy_2} alt={t('terms.images.story')} style={styles.image} />
          </Box>
        </Box>

        <Box
          py="4rem"
          display="flex"
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
          alignItems="center"
        >
          <Box flex="1">
            <Typography variant="h3" component="h2" gutterBottom  sx={{ fontFamily: theme.typography.fontFamily }}>
              {t('terms.responsibilities.title')}
            </Typography>
            <Typography variant="body2" paragraph  sx={{ fontFamily: theme.typography.fontFamily }}>
              {t('terms.responsibilities.3_1')}
            </Typography>
            <Typography variant="body2" paragraph  sx={{ fontFamily: theme.typography.fontFamily }}>
              {t('terms.responsibilities.3_2')}
            </Typography>
            <Typography variant="body2" paragraph  sx={{ fontFamily: theme.typography.fontFamily }}>
              {t('terms.responsibilities.3_3')}
            </Typography>
            <Typography variant="body2" paragraph sx={{ fontWeight: 'bold', mt: 2,fontFamily: theme.typography.fontFamily  }}>
              {t('terms.acceptance')}
            </Typography>
          </Box>
          <Box flex="1" textAlign="center">
            <img
              src={TermsAndPolicy_3}
              // alt={t('terms.images.mission')}
              style={styles.image}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;