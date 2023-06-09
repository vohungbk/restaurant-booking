import React, { FC } from 'react';

interface ButtonPrimaryProps {
  text: string;
  className?: string;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ text, className }) => {
  return (
    <button
      type="button"
      className={`bg-crimson text-black py-2 px-8 font-base font-bold leading-[175%] tracking-[0.04em] rounded-[1px] border-0 outline-none cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
