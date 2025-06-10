import React from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const TravelServicesMenu = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="travel-services-button"
        aria-controls={open ? 'travel-services-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ 
          color: 'black',
          textTransform: 'none',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'action.hover',
          }
        }}
      >
        {t('navbar.travelServices')}
      </Button>
      <Menu
        id="travel-services-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'travel-services-button',
        }}
        PaperProps={{
          style: {
            width: '200px',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography variant="body1">{t('navbar.flightTickets')}</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="body1">{t('navbar.hotelReservation')}</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="body1">{t('navbar.qatarTickets')}</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="body1">{t('navbar.busTickets')}</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="body1">{t('navbar.rideTickets')}</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default TravelServicesMenu;