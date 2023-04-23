import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className: string;
};

const AppWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} section-padding flex items-center justify-between min-h-screen flex-col lg:flex-row`}
    >
      {children}
    </div>
  );
};

export default AppWrapper;
