import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PaymentCancelPage() {
  const [paymentStatus, setPaymentStatus] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const isRTL = ['fa', 'ar', 'pa'].includes(i18n.language ) ;
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
      <h1 style={{ color: '#333' }}>{t('cancelpage.paymentResult')}</h1>
      
      <div style={{ color: 'red' }}>
        <h2>{t('cancelpage.paymentFailed')}</h2>
        <p>{t('cancelpage.paymentFailedMessage')}</p>
        <div style={{ fontSize: '50px', margin: '20px 0' }}>✗</div>
        <button 
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ff5252',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {t('cancelpage.homePage')}
        </button>
      </div>
    </div>
  );
}

export default PaymentCancelPage;