// ContactUsMap.tsx
import React from 'react';

const ContactUsMap: React.FC = () => {
  return (
    <div style={{  position: 'relative', 
      height :'100%',
    

    }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3908.219158905587!2d76.14729799999999!3d11.607719000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM2JzI3LjgiTiA3NsKwMDgnNTAuMyJF!5e0!3m2!1sen!2sin!4v1738645670272!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: '0' }}
        // allowFullScreen=""
        loading="lazy"
      />
    </div>
  );
};

export default ContactUsMap;


