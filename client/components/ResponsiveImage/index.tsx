import Image from 'next/image';
import React, { FC } from 'react';

interface indexProps {
  imgSrc: string;
}

const ResponsiveImage: FC<indexProps> = ({ imgSrc }) => {
  return (
    <div className="w-full unset" style={{ position: 'unset' }}>
      <Image
        fill
        src={imgSrc}
        alt=""
        className="object-contain w-full h-[unset] relative"
        style={{ height: 'unset' }}
      />
    </div>
  );
};

export default ResponsiveImage;
