import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className: string;
  id?: string;
};

const AppWrapper = ({ children, className, id }: Props) => {
  return (
    <div
      className={`${className} section-padding flex items-center justify-between min-h-screen flex-col lg:flex-row`}
      id={id}
    >
      {children}
    </div>
  );
};

export default AppWrapper;
