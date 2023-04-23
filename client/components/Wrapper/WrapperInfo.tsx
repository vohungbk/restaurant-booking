import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const WrapperInfo = ({ children }: Props) => {
  return (
    <div className="flex-1 w-full flex items-start justify-center flex-col">
      {children}
    </div>
  );
};

export default WrapperInfo;
