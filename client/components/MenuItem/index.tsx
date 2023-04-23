import React from 'react';

type Props = {
  title: string;
  price: string;
  tags: string;
};

const MenuItem = ({ title, price, tags }: Props) => {
  return (
    <div className="flex flex-col w-full my-4">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <p className="p__cormorant text-golden">{title}</p>
        </div>
        <div className="bg-[#FAFAFA] w-[90px] h-[1px] mx-4" />
        <div className="flex items-end justify-end">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="w-full mt-2">
        <p className="p__opensans text-white">{tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
