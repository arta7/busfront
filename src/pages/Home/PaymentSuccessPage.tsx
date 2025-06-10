import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PaymentSuccessPage() {
  const [paymentStatus] = useState(true);
  const [isLoading] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const isRTL =  ['fa', 'ar', 'pa'].includes(i18n.language ) ;
  //i18n.language === 'fa';

  return (
    <div 
      className="payment-container" 
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        direction: isRTL ? 'rtl' : 'ltr'
      }}
    >
      <h1 style={{ color: '#333' }}>{t('success.paymentResult')}</h1>
      
      <div style={{ color: 'green' }}>
        <h2>{t('success.paymentSuccess')}</h2>
        <p>{t('success.orderRegistered')}</p>
        <div style={{ fontSize: '50px', margin: '20px 0' }}>✓</div>
        {/* <p>{t('trackingCode')}: {Math.random().toString(36).substr(2, 10).toUpperCase()}</p> */}
      </div>
    </div>
  );
}

export default PaymentSuccessPage;