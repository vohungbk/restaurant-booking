import React, { FC } from 'react';

interface indexProps {
  text: string;
  className?: string;
}

const HeadText: FC<indexProps> = ({ text, className }) => {
  return (
    <h1
      className={`font-base font-semibold text-[45px] sm:text-[64px] leading-[130%] capitalize tracking-[0.03em] text-golden ${className}`}
    >
      {text}
    </h1>
  );
};

export default HeadText;
