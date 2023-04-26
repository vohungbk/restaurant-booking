import React from 'react';

const FooterOverlay = () => {
  return (
    <div className="w-full h-full -z-10 flex flex-col absolute">
      <div className="h-[25%] bg-black"></div>
      <div className="h-[75%] app-bg"></div>
    </div>
  );
};

export default FooterOverlay;
