import React from 'react';
import './LandingSection.css';

interface LandingSectionProps {
  title?: string;
  slogan?: string;
}

const LandingSection: React.FC<LandingSectionProps> = ({
  title = "EMET ENTERPRISES",
  slogan = "Bringing Nature's Treasures Worldwide"
}) => {
  return (
    <div className="content">
      <h1 className="title animate-fadeIn">
        {title.split(' ').map((word, index) => (
          <React.Fragment key={index}>
            {word}
            {index < title.split(' ').length - 1 && <span>&nbsp;</span>}
            {index === 0 && <br className="mobile-break" />}
          </React.Fragment>
        ))}
      </h1>
      
      <div className="animate-fadeInDelay">
        <p className="slogan">
          {slogan}
        </p>
      </div>
    </div>
  );
};

export default LandingSection;
