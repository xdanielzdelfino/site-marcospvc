import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 - Substitua GA_MEASUREMENT_ID pelo seu ID real
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
    
    // Carregar Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);
    
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(script2);
    
    // Google Ads Conversion Tracking - Substitua AW-CONVERSION_ID pelo seu ID real
    const AW_CONVERSION_ID = 'AW-17417816237';
    
    const script3 = document.createElement('script');
    script3.innerHTML = `
      gtag('config', '${AW_CONVERSION_ID}');
    `;
    document.head.appendChild(script3);
    
    // Meta Pixel (Facebook Ads) - Substitua pelo seu Pixel ID real
    const FACEBOOK_PIXEL_ID = 'XXXXXXXXXX';
    
    const script4 = document.createElement('script');
    script4.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FACEBOOK_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script4);
    
    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
      document.head.removeChild(script4);
    };
  }, []);

  // Função para rastrear eventos de conversão
  window.trackConversion = (eventName, value = null) => {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: 'engagement',
        event_label: 'form_submission',
        value: value
      });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', eventName, { value: value });
    }
  };

  return (
    <>
      {/* Noscript para Facebook Pixel */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=XXXXXXXXXX&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
};

export default Analytics;

